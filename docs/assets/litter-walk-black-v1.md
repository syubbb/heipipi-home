# Heipipi front-door walking atlas v1

Generated 2026-10-29 using the built-in `image_gen.imagegen` tool with `transparent_background: true`. No API/CLI fallback used. Output copied byte-for-byte; no pixel edits, alpha cleanup, resampling, cropping, or compositing applied.

## Saved files

- `dist/assets/litter-walk-black-v1.png`
- `dist/assets/litter-walk-black-v1.json`

Dimensions: 1536 × 1024 pixels, RGBA, 4 columns × 2 rows, 384 × 512 cells. Top row is rear-facing walking away; bottom row is front-facing walking toward. Four phases at 0%, 25%, 50%, 75%.

Final original: `C:/Users/USER/.codex/generated_images/01a18735-7ebb-74d0-8b8a-d828d019a0f3/exec-59a7066c-2f17-4a62-bf43-5f5cf58adec1.png`

Initial original retained: `C:/Users/USER/.codex/generated_images/01a18735-7ebb-74d0-8b8a-d828d019a0f3/exec-62e18a0c-6130-4354-9db1-d60ed5e5e0b2.png`

Final SHA-256: `e275f203a7a33b0e14ab8785a8bd3f30be7e34535eed97035237a4dfe7f76366`.

## References inspected before generation

1. `dist/assets/fullwalk0.webp` — cat identity and adult proportions.
2. `dist/assets/lie.webp` — same cat's face, ears, coat and proportions.
3. `C:/Users/USER/.codex/codex-remote-attachments/01a18289-419b-7e02-a4ac-0d7d4125c4d1/592B2617-E946-4039-A43D-809B373D5086/1-照片-1.jpg` — owner's black cat identity; person/background excluded.

All three reference paths were supplied as `referenced_image_paths` to the initial built-in generation. Cleanup generation referenced only the initial generated PNG.

## Inspection and limits

Visually usable regular 4×2 sprite grid. True rear/front orientations, natural adult black-cat proportions, calm closed mouth and four distinct lifted/grounded paw phases per direction. No clipping of the visible cats across cells. Tail sways remain within cells. Rear visible heights are 424–442 px; front visible heights are 386–393 px. Per-frame anchors and ground values are supplied because image generation does not maintain exact pixel registration.

RGBA alpha is native: 71.32% of pixels have alpha zero and maximum alpha is 254. Faint alpha 1–15 residual pixels remain beyond visible fur despite one targeted transparency cleanup. Therefore the result has usable visible gutters but does not meet a mathematically perfect zero-alpha gutter specification. Broad brown/gray haze seen in raw image previews is hidden RGB beneath alpha-zero pixels: sampled background points (50,250), (100,250), (50,550), (200,520), (384,256), (768,256), and (1152,256) all have alpha 0 and therefore contribute no visible haze in normal RGBA compositing. Both exact nonzero-alpha crops and visible crops (alpha ≥ 16) are recorded. No raster processing was used to conceal or fix this limitation.

The JSON's `alphaCrop` coordinates are atlas-global. `anchorX` and `ground` are relative to that crop, while `anchorXInCell` and `groundInCell` are cell-relative. Body axis is measured from the midpoint of strong-alpha span around 36% of visible height; ground is the exclusive bottom of alpha ≥ 16 bounds. `visibleHeight` uses the alpha ≥ 16 crop.

## Exact initial prompt

```text
Use case: photorealistic-natural
Asset type: transparent game sprite atlas for a cat walking through the FRONT doorway of a litter tray.
Primary request: Create ONE RGBA PNG sprite atlas, wide 1536x1024 canvas, strict exactly FOUR equal columns and TWO equal rows, exactly EIGHT isolated full-body photographs of the same adult black cat Heipipi. Each cell is 384x512. Invisible grid only, no drawn grid.
Input images: Image 1 fullwalk0.webp is the cat identity/body proportions reference. Image 2 lie.webp reinforces the same cat's face, ears, coat, and proportions. Image 3 owner photo is supporting identity reference for the black cat ONLY; do not include the woman, sofa, room, or any other reference background.
Subject: Adult natural-proportioned lean black domestic cat, silky short black fur, realistic black muzzle, upright triangular ears, subtle yellow-green eyes when facing camera, calm closed mouth. Match Heipipi. No kitten/chibi proportions.
Composition: TOP ROW (cells 1-4, left to right): TRUE REAR VIEW, the cat WALKING AWAY from camera in four sequential quarter-cycle walking gait phases. The cat's back and rear are facing camera; head points away. BOTTOM ROW (cells 5-8, left to right): TRUE FRONT VIEW, the cat WALKING TOWARD camera in four corresponding sequential gait phases. Head and chest face camera. No side or three-quarter poses. Camera modestly elevated about 20 degrees down, same camera and size in every cell. Narrow front/rear body silhouette appropriate for passing through a front doorway. Center each cat exactly in its own cell at x centers 192,576,960,1344. Cat footprints align to baselines y=455 top row and y=967 bottom row. Visible cat height approximately 350 pixels in every cell; keep same adult scale. Leave generous fully transparent space at top, bottom and both sides of each cell.
Motion: A believable slow continuous WALK, with weight on paws and clear leg articulation. Frame phases at 0%,25%,50%,75% of a walk cycle; alternating front paw reaching, opposite front paw lifting, hind paws following; different paw positions in each frame. Four distinct continuous stride phases, not sitting, standing duplicates, hopping or sliding. Back stays level with minimal bob. Tail relaxed behind/along body, entire tail inside cell, never spreading across gutter. All four legs anatomically correct, paws complete.
Style: photorealistic clean isolated photographic cutout, realistic fine fur and anatomy, soft diffuse neutral light revealing black fur.
Scene/backdrop: genuine transparent alpha, no scenery. NO floor, NO contact shadow, NO cast shadow, NO gray or colored backdrop, NO checkerboard painted into image, NO props, litter tray, text, labels, border, collar or clothing.
Constraints: exactly 8 complete cats in strict regular 4x2 grid. Entire ears, paws, whiskers and tails inside own cell with transparent gutters. Preserve original transparency.
```

## Exact cleanup prompt

```text
Use case: background-extraction
Edit target: the supplied eight-frame black-cat sprite atlas.
Change only the background and transparency cleanup. Preserve exactly the SAME eight cat poses, fur, anatomy, photorealism, orientations, 4-column 2-row layout and 1536x1024 canvas. Do not add or remove any cat or alter its expression. Top four rear walking away; bottom four front walking toward.
Remove ALL background haze, glow, gradients, dark shadows, halos, floor and faint stray pixels. The previous background has diffuse dark glows visible around cats: delete those completely. Every pixel outside actual cat fur, whiskers, and body must have alpha EXACTLY ZERO. Keep antialiasing only immediately at fur edge. No wide semitransparent halo. True empty fully transparent gutters at cell boundaries. Each cat silhouette must be entirely contained within its own 384x512 cell, leaving at least 40 pixels of fully alpha-zero space along left and right cell edges and 25 pixels top/bottom. Never paint a checkerboard or black background. Output one clean transparent RGBA PNG.
```

## Final transparency retry (not adopted)

A final built-in imagegen edit was requested after raw previews appeared to show a broad halo. Original retry retained at `C:/Users/USER/.codex/generated_images/01a18735-7ebb-74d0-8b8a-d828d019a0f3/exec-9cd038ac-e6a4-4b38-b73d-aca2ab037afc.png`. The retry did not improve transparency: alpha-zero coverage fell from 1,121,838 to 1,102,483 pixels; alpha 1–15 coverage changed from 38,575 to 37,962. Meaningful alpha ≥ 200 coverage rose from 393,280 to 414,381 as fur appearance changed. All seven sampled background points still had alpha 0 in both versions. V1 is retained because the retry did not solve a visible compositing defect and altered fur. No v2 asset was adopted or copied into dist.

Exact retry prompt:

```text
Use case: background-extraction
Edit this exact sprite atlas. Keep all EIGHT black cats, their eight poses, their fur, their faces, their walking gait phases, their orientations, positions, scale, and the strict FOUR columns by TWO rows unchanged. Keep 1536x1024 pixel canvas. Top row rear walking away, bottom row front walking toward.
CRITICAL REQUIRED CORRECTION: REMOVE ALL broad brown/gray atmospheric halos surrounding every cat. The current image has huge diffuse radial gray/brown glow clouds and gradients around each animal. These are unwanted BACKGROUND, not fur. Delete them completely. There must be NO vignette, NO airbrush, NO ambient haze, NO glow, NO halo, NO shadows, NO floor, NO lighting gradient, NO colored fog anywhere.
True transparent cutout: preserve subject pixels unchanged, but every pixel immediately outside actual fine black fur/whiskers must have alpha EXACTLY 0. All empty spaces between cats and all cell gutters must be fully transparent with alpha 0, not semi-transparent dark pixels. Keep only actual cat body, fur, ears, paws, tail and whiskers. All non-fur background must be alpha0. The resulting atlas should show eight clean isolated photographic cat cutouts on genuine empty transparency. Do not render a checkerboard or solid black/brown/gray background. No props, no text, no borders.
```
