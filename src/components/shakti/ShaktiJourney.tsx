import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteNav, SiteFooter } from "@/components/aikyam/SiteLayout";
import {
  VIDEO_SCENES,
  STILL_GODDESSES,
  GODDESS_FRAMES,
  buildFrameWeights,
  type GoddessEntry,
} from "./shaktiData";
import "./shakti.css";

const TOTAL_FRAMES = GODDESS_FRAMES.length; // 40
const frameWeights = buildFrameWeights();
const totalWeight = frameWeights.reduce((a, b) => a + b, 0);

const cumWeights: number[] = [0];
frameWeights.forEach((w) => cumWeights.push(cumWeights[cumWeights.length - 1]! + w));

function progressToFrameIndex(p: number): number {
  const d = Math.max(0, Math.min(1, p)) * totalWeight;
  let i = 0;
  while (i < frameWeights.length - 1 && cumWeights[i + 1]! <= d) i++;
  const seg = frameWeights[i] ?? 1;
  return i + (seg > 0 ? (d - cumWeights[i]!) / seg : 0);
}

function frameIndexToProgress(frame: number): number {
  const f = Math.max(0, Math.min(TOTAL_FRAMES - 1, frame - 1));
  const i = Math.min(Math.floor(f), frameWeights.length - 1);
  return (cumWeights[i]! + (frameWeights[i] ?? 1) * (f - i)) / totalWeight;
}

const sceneWindows = VIDEO_SCENES.map((scene) => ({
  id: scene.id,
  start: frameIndexToProgress(scene.frameStart!),
  end: frameIndexToProgress(scene.frameEnd!),
}));

const smooth = (t: number) => {
  const c = Math.max(0, Math.min(1, t));
  return c * c * (3 - 2 * c);
};

// Split text into word spans for staggered reveal.
// The aria-label on the parent keeps screen-reader output clean.
function WordSplit({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      {text.split(" ").map((word, i) => (
        <span key={i} className="shakti-word">
          {word}
          {i < text.split(" ").length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}

function GoddessOverlayText({ entry }: { entry: GoddessEntry }) {
  return (
    <>
      <p className="shakti-seq" aria-hidden="true">
        {String(entry.seq).padStart(2, "0")} / 18
      </p>
      <h2 className="shakti-goddess-name" aria-hidden="true">
        {entry.name}
      </h2>
      <p className="shakti-goddess-location" aria-hidden="true">
        {entry.location}
      </p>
      <p className="shakti-goddess-desc" aria-hidden="true">
        {entry.description}
      </p>
    </>
  );
}

export function ShaktiJourney() {
  const frameTrackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillRef = useRef<HTMLDivElement>(null);
  const stillImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const stillSectionRefs = useRef<(HTMLElement | null)[]>([]);
  const introRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Hero text reveal ──────────────────────────────────────────────────
    if (!reduce && introRef.current) {
      const heroWords = introRef.current.querySelectorAll<HTMLElement>(".shakti-word");
      const heroLines = introRef.current.querySelectorAll<HTMLElement>(
        ".shakti-intro-subtitle, .shakti-intro-desc, .shakti-scroll-cue",
      );
      gsap.set(heroWords, { opacity: 0, y: 16 });
      gsap.set(heroLines, { opacity: 0, y: 10 });
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to(heroWords, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.045,
        ease: "power2.out",
      }).to(
        heroLines,
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" },
        "-=0.2",
      );
    }

    // ── Frame chapter ─────────────────────────────────────────────────────
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    let disposed = false;
    let W = 0,
      H = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const loadFrame = (i: number) =>
      new Promise<void>((res) => {
        if (images[i]) return res();
        const img = new Image();
        img.decoding = "async";
        img.src = GODDESS_FRAMES[i]!;
        const done = () => {
          if (!disposed) images[i] = img;
          res();
        };
        img.onload = () => (img.decode ? img.decode().then(done, done) : done());
        img.onerror = () => res();
      });

    (async () => {
      await loadFrame(0);
      if (disposed) return;
      drawFrame(0);
      for (let i = 1; i < TOTAL_FRAMES; i++) {
        if (disposed) break;
        await loadFrame(i);
      }
    })();

    const nearest = (i: number): HTMLImageElement | null => {
      for (let d = 0; d < TOTAL_FRAMES; d++) {
        if (images[i - d]) return images[i - d]!;
        if (images[i + d]) return images[i + d]!;
      }
      return null;
    };

    const drawFrame = (fi: number) => {
      const idx = Math.round(Math.max(0, Math.min(TOTAL_FRAMES - 1, fi)));
      const img = images[idx] ?? nearest(idx);
      if (!img) return;
      const s = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      const w = img.naturalWidth * s;
      const h = img.naturalHeight * s;
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = 1;
      ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
    };

    let progress = 0;
    let target = 0;
    let current = 0;
    let lastDrawn = -1;

    const render = () => {
      current += (target - current) * (reduce ? 1 : 0.12);
      if (Math.abs(target - current) < 0.0005) current = target;

      const fi = progressToFrameIndex(current);
      const rounded = Math.round(fi);
      if (rounded !== lastDrawn) {
        drawFrame(fi);
        lastDrawn = rounded;
      }

      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        const win = sceneWindows[i]!;
        const len = win.end - win.start;
        const fade = Math.max(len * 0.25, 0.02);
        let o = 0;
        if (progress >= win.start && progress <= win.end) {
          const enter = smooth((progress - win.start) / fade);
          const leave = smooth((win.end - progress) / fade);
          o = Math.min(enter, leave);
        }
        panel.style.opacity = String(o);
        panel.style.visibility = o < 0.005 ? "hidden" : "visible";
      });

      if (fillRef.current) fillRef.current.style.transform = `scaleX(${progress})`;
    };

    const ticker = gsap.ticker;
    ticker.add(render);
    ticker.lagSmoothing(0);

    const st = ScrollTrigger.create({
      trigger: frameTrackRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        progress = self.progress;
        target = self.progress;
      },
    });

    // ── Still chapter: parallax + text reveal ────────────────────────────
    stillSectionRefs.current.forEach((section, i) => {
      if (!section) return;
      const img = stillImgRefs.current[i];
      const textEls = section.querySelectorAll<HTMLElement>(
        ".shakti-seq, .shakti-goddess-name, .shakti-goddess-location, .shakti-goddess-desc",
      );

      if (!reduce) {
        // Gentle image parallax: scale 1.00→1.05, slight vertical drift
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.05, yPercent: -2 },
            {
              scale: 1.0,
              yPercent: 2,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        // Staggered text reveal on scroll-into-view
        gsap.set(textEls, { opacity: 0, y: 14 });
        gsap.to(textEls, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // ── Closing section text reveal ───────────────────────────────────────
    const closing = document.querySelector<HTMLElement>(".shakti-closing");
    if (closing && !reduce) {
      const closingEls = closing.querySelectorAll<HTMLElement>(
        ".aikyam-eyebrow, .shakti-closing-heading .shakti-word, .shakti-closing p, .aikyam-actions",
      );
      gsap.set(closingEls, { opacity: 0, y: 12 });
      gsap.to(closingEls, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: closing,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    return () => {
      disposed = true;
      st.kill();
      ticker.remove(render);
      window.removeEventListener("resize", resize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="aikyam-page shakti-page">
      <SiteNav />

      {/* ── Hero: temple architecture background ── */}
      <section
        ref={introRef}
        className="shakti-intro"
        aria-label="Shakti — I CREATE, The 18 Maha Shakti Peethas"
      >
        <div className="shakti-intro-bg" aria-hidden="true">
          <img
            src="/images/aikyam-about/sequence_01/01_entrance.jpg"
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="shakti-intro-content">
          <p className="aikyam-eyebrow">Shakti — I CREATE</p>
          <h1 aria-label="The 18 Maha Shakti Peethas">
            <WordSplit text="The 18 Maha Shakti Peethas" />
          </h1>
          <p className="shakti-intro-subtitle">The Sacred Journey</p>
          <p className="shakti-intro-desc">
            Explore sacred expressions of Shakti and reflect on creative energy, intention, and the
            possibilities you bring into the world.
          </p>
          <p className="shakti-scroll-cue" aria-hidden="true">
            Scroll to explore ↓
          </p>
        </div>
      </section>

      {/* ── Chapter 1 label ── */}
      <div className="shakti-chapter-label">
        <p className="aikyam-eyebrow">Chapter One</p>
        <h2>Nine Goddesses — A Scroll Journey</h2>
      </div>

      {/* ── Frame chapter ── */}
      <div
        ref={frameTrackRef}
        className="shakti-frame-track"
        style={{ height: "1800vh" }}
        aria-label="Nine goddess scenes — scroll to explore"
      >
        <div className="shakti-frame-stage">
          <canvas ref={canvasRef} className="shakti-frame-canvas" aria-hidden="true" />
          <div className="shakti-frame-vignette" aria-hidden="true" />

          {VIDEO_SCENES.map((scene, i) => (
            <div
              key={scene.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="shakti-goddess-panel"
              data-side={scene.side}
              style={{ opacity: 0, visibility: "hidden" }}
              aria-hidden="true"
            >
              <div className="shakti-goddess-scrim" />
              <div className="shakti-goddess-body">
                <GoddessOverlayText entry={scene} />
              </div>
            </div>
          ))}

          <div className="shakti-frame-progress" aria-hidden="true">
            <div ref={fillRef} className="shakti-frame-progress-fill" />
          </div>
        </div>

        {/* Accessible text for screen readers */}
        <div className="sr-only">
          {VIDEO_SCENES.map((scene) => (
            <article key={scene.id}>
              <h2>{scene.name}</h2>
              <p>{scene.location}</p>
              <p>{scene.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* ── Chapter 2 label ── */}
      <div className="shakti-chapter-label">
        <p className="aikyam-eyebrow">Chapter Two</p>
        <h2>Nine Goddesses — Sacred Stills</h2>
      </div>

      {/* ── Still chapter: half-image / half-content ── */}
      {STILL_GODDESSES.map((goddess, i) => (
        <section
          key={goddess.id}
          ref={(el) => {
            stillSectionRefs.current[i] = el;
          }}
          className="shakti-still-section"
          data-side={goddess.side}
          aria-labelledby={`shakti-still-${goddess.id}`}
        >
          {/* Image half */}
          <div className="shakti-still-img-col" aria-hidden="true">
            <img
              ref={(el) => {
                stillImgRefs.current[i] = el;
              }}
              src={goddess.stillPath}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              style={{ objectPosition: goddess.focalPoint }}
            />
          </div>

          {/* Content half */}
          <div className="shakti-still-copy">
            <p className="shakti-seq">{String(goddess.seq).padStart(2, "0")} / 18</p>
            <h2 id={`shakti-still-${goddess.id}`} className="shakti-goddess-name">
              {goddess.name}
            </h2>
            <p className="shakti-goddess-location">{goddess.location}</p>
            <p className="shakti-goddess-desc">{goddess.description}</p>
          </div>
        </section>
      ))}

      {/* ── Closing ── */}
      <section className="shakti-closing" aria-label="Return to AIKYA Mandala">
        <p className="aikyam-eyebrow">The Journey Continues</p>
        <h2
          className="shakti-closing-heading"
          aria-label="Eighteen expressions. One creative force."
        >
          <WordSplit text="Eighteen expressions." />
          <br />
          <WordSplit text="One creative force." />
        </h2>
        <p>
          Each Shakti Peetha marks a place where the divine creative energy is honoured. Together
          they form a living map of Shakti across the land — an invitation to reflect on the
          creative possibilities you carry within you.
        </p>
        <div className="aikyam-actions">
          <a href="/aikya-mandala">
            Return to AIKYA Mandala <span aria-hidden="true">↗</span>
          </a>
          <a href="/about">
            Back to About AIKYAM <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
