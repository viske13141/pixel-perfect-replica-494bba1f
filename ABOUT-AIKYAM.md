# About AIKYAM

The new `/about`, `/aikya-mandala`, and `/participate` routes share navigation and a footer. The homepage also uses the shared navigation so visitors can open About AIKYAM. The temple player, chapter definitions, and global stylesheet are unchanged.

## Homepage audit

- `TempleExperience.tsx` renders the supplied homepage frames onto a cover-sized canvas, with device pixel ratio capped at 2 (1.5 on mobile).
- Frame weights in `chapters.ts` control dwell time. Frame selection eases toward scroll progress; HTML chapter overlays fade, drift, and blur independently.
- A 1700vh track holds a CSS sticky, viewport-sized stage. GSAP ScrollTrigger observes progress; Lenis smooths wheel scrolling.
- The canvas scales from 1.05 to 1.00 across the journey. Eight images load first; four workers then request nearby frames. Loaded frames remain in memory.

## Restored About design

Git history and diffs were inspected. The immediately preceding About implementation was uncommitted; an older unrelated About route exists in commit 67ef446. The restored reference is the original stylesheet still present in `aikyam.css`, the earlier implementation from this session, and saved pre-update desktop/mobile screenshots. No Git reset, history rewrite, or unrelated file replacement was used.

The original continuous full-screen sticky stage, serif typography, ivory/gold palette, generous side padding, image sequence, 1.025-1.07 zoom/pans, 0.35-second visual scrub, overlapping scene dissolves, bottom reading controls, and normal-flow final CTA placement are restored. The separate reading panels from the content update are removed.

All Part A copy is retained as real HTML. Sections 2/4/6/8 sit left and 3/5/7 right in 540px columns; the hero remains left and the final buttons remain after the stage. Supporting text and H3 items stay over imagery. Long sections naturally scroll through their full text with content-dependent height; shorter blocks linger with sticky text. Text enters upward by 16px and then settles. Scrolling is native and reversible.

A separate feathered gradient and optional 6px backdrop blur follow each text block's opacity. Text is never blurred. The opposite image side remains clear, and the sculpture focal position is shifted away from right-hand text. Unsupported browsers retain the gradient. Mobile, short viewports, reduced motion, and reading mode use normal-flow copy with static imagery; mobile/reduced motion omit blur.

The supplied still-image mapping, copy JSON, original assets, shared navigation, homepage, and routes remain unchanged. Progressive decoding and JPEG fallback retain the last available visual on failures. Resize/font changes refresh measurements; timelines, observers, and image callbacks clean up on unmount.

## Verification

Build, TypeScript, and scoped ESLint pass. Chromium checks cover all public copy, nine sections, unique heading IDs, alternating column positions, computed local blur with sharp text, forward/reverse images, long gate descriptions, keyboard CTA navigation, skip focus, final stage release, mobile gradient fallback/normal flow, reduced motion, no JavaScript, and failed image requests. Desktop, right-aligned content, gates, and mobile screenshots are reviewed.

The repository-wide lint failures recorded in the previous update are unrelated baseline formatting issues; no unrelated formatting was changed.
