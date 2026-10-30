# TV walking, sleep choices and owner memories plan

> **For agentic workers:** Use superpowers:executing-plans inline; final independent review.

**Goal:** Slow real walking to TV, two sleep destinations, unframed black-cat expressions and personal owner affection icons.

**Architecture:** Preserve room path/collision ownership, use native per-cat gait clocks through the TV controller, reuse the accessible chooser for sleep. Keep black-cat faces as native vectors; generate a transparent reference-based owner interaction atlas with imagegen.

**Spec:** User request in this conversation: no static-pose drifting, 睡覺 chooses 紙箱 or 黑貓腳踏墊; no outer circular/square frames and no nonblack cats in TV expression icons. Black cat itself displays only puzzled black-cat face or the two owners with hugs, kisses, petting and longing, using provided photos.

## Tasks
- [x] Reproduce stalled/yielded walking with a regression; restore walk pose on every actual movement, slow speed, native gait callback and no teleport.
- [x] Add sleep chooser and manual mat entry that bypasses autonomous cooldown, preserves safe routing and cancellation, and highlights sleep.
- [x] Generate/copy/inspect owner atlas; draw its alpha with no surrounding badges. Expand companion black-cat face variants and restrict black cat's own reaction pool.
- [ ] Run focused and full tests, inspect UI and sprites on phone/desktop, final review and publish same Site/audience.

## Rulings and review focus
- Ruling: existing real walking frames and navigation remain; only TV travel uses a slower requested speed (Socks retains its 38 cap).
- Ruling: no portrait photos are published; only the generated cute reference-based owner icons are included.
- Manual mat selection bypasses autonomous cooldown, never route completion/urgent-care safety.
- Stop/yield/resume must change both render pose and animation time; previously stopped feet must not slide.
- No circular halo, photo frame, speech bubble or nonblack-cat face in companions' TV icons.
- Sleep opening does not start sleep; manual cancel cannot revive a stale mat-arrival callback.
- Owner sprites have clean true alpha, preserve separate owner identities, and never leak adjacent atlas cells.

## Ledger
- Baseline live v115, source 131836bcfaef8bb786525744c9560f2310d71f57.
- Root cause evidence: TV tick updates coordinates/walkTime but does not reset pose after finishLocomotionTick makes black cat sit, or after seated traffic yield. Existing generic speed/clock also differs from native per-cat gait.

- TV slow-walk, personal reaction pool/no-frame and manual mat tests observed RED before implementation, then GREEN.
- Generated owner atlas with built-in imagegen, 1086x1448 RGBA, 12 independent owner interaction motifs; source portraits remain outside dist. Custom atlas rectangles inspected on checkerboard. Tiny neighboring alpha column excluded from the two bottom petting crops.
- Independent final review found TV traffic-yield gait mismatch (Socks 44 instead of38 and Rabbit 3x normal clock). Fixed with actual room-engine tv-native-yield.cjs RED→GREEN; every TV yield uses the same per-cat requested speed and native gait denominator as TV travel. No other important findings.
- Native companions use 17 frameless black-cat vector variants; black cat's personal pool contains only puzzled face and twelve owner motifs. Loading owner art falls back to puzzled face.
- Sleep choice clears on manual interruption, mat wake callback, and box wake; manual mat arrival remains token-cancellable and urgent-care aware.

- Final UI validation: phone 390x844 and desktop1440x900 sleep chooser, both selected destinations, real TV movement pose/walkTime telemetry (55 px/s, Socks38), owner icons above seated black cat, frameless black-cat reaction gallery. Final fresh full suite 70/70 passed, syntax and diff checks pass. Dedicated TV reactions suppress normal cream mood faces during travel as well as while seated (regression RED→GREEN).
