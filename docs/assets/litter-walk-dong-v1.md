# Dongdong front/rear doorway walking atlas v1

- Generator: built-in image_gen, transparent_background=true.
- Generated file: C:/Users/USER/.codex/generated_images/01a18735-cb01-7411-8d53-8e5f529fa431/exec-f894c3a9-f9c8-4e49-ad44-2e63bd6183e2.png
- Project asset: dist/assets/litter-walk-dong-v1.png
- Metadata: dist/assets/litter-walk-dong-v1.json
- Canvas: 1536 x 1024 RGBA; 4 columns x 2 rows; cells 384 x 512.
- The generated PNG was copied byte for byte, with no image editing, alpha cleanup, cropping, resizing or compositing.
- References: dist/assets/dongdong_walk_000.png and dist/assets/dong-toilet/040.webp. Both were inspected before generation.
- Identity correction: native Dongdong references show an adult tortoiseshell cat. The initial task's white/orange label was corrected by the parent before generation; the rightmost cat in tv-cat-backs.png is tortoiseshell, while the white/orange cat is third.
- Top row: true rear view walking away, four stride phases. Bottom row: true front view walking toward camera, four stride phases.
- Native alpha limitation: the generator left isolated alpha=1/255 speckles in transparent gutters. These are preserved. JSON includes strict alpha>0 bounds, plus practical alpha>1 crops that exclude only this practically invisible residue. Meaningful cat pixels fit within every equal cell.
- Anchor method: alpha-weighted horizontal torso center in the middle35%-60% of the practical crop, relative to crop origin. Ground: bottom of alpha>128 silhouette, relative to crop origin; supporting paws establish ground. Visible height: practical alpha>1 crop height.
- First candidate exec-8ad08b5f-fda3-49f9-8856-e2deb33f148f.png was rejected because the bottom row tail crossed the row boundary. Selected second candidate fits the cell grid.
- No source, test, browser or deployment changes.

## Exact selected prompt

```text
Use case: photorealistic-natural.
Asset type: a production game animation sprite atlas with real transparent alpha, landscape 1536x1024.

Generate one atlas with EXACTLY FOUR EQUAL COLUMNS AND TWO EQUAL ROWS (8 isolated full-body cat sprites). The supplied images are identity references ONLY, not edit targets. Reference 1 dongdong_walk_000.png shows Dongdong's walking body; reference 2 dong-toilet/040.webp shows her face and coat. Match this actual adult shorthaired TORTOISESHELL cat: mottled near-black/dark brown and warm russet orange coat, dark face with asymmetrical ginger patches, greenish amber eyes, natural proportions, slim mature cat, no white socks, no clothing. Do NOT turn her into an orange-and-white cat.

TOP ROW, left to right: 4 sequential slow WALKING AWAY stride phases, true direct REAR view with spine aligned vertically toward image top, no side-facing body, head looking straight ahead so face hidden. Hind legs visibly alternating, one hind paw advances while the other supports, then exchange, natural lifted paws. Include entire tail with modest gentle curve, not blocking legs.
BOTTOM ROW, left to right: 4 sequential slow WALKING TOWARD CAMERA stride phases, true direct FRONT view, spine aligned vertically toward image bottom, no side-facing body. Forelegs visibly alternate forward extension and ground contact, four actual walking moments. Head calm, awake, forward facing.
The phases should form a coherent natural four-beat walking loop in each direction; noticeable limb position differences, not four static copies and not sitting, hopping, gliding, or stepping in place with all paws together.

Camera: same modestly elevated photographic viewpoint looking down roughly 20 degrees, suitable for walking through the front doorway of a floor litter box. Narrow frontal/rear silhouette with foreshortened body, consistent camera and body scale across all eight cells. Orthographic-like long-lens photography, detailed real fur, soft neutral light without a cast shadow.

LAYOUT CONTRACT: invisible 4x2 grid; each cell nominally384x512pixels. Keep each cat comfortably inside its own cell with at least45px genuinely transparent padding on all four sides, ears, paws and tail uncut; align supporting paw ground-contact level near440px within each row. Cat visible height about350px within each cell. Align torso center to each cell center. Separate sprites with large actual transparent gutters. No sprite may touch or overlap any neighboring cell. Exactly eight sprites.
Background: genuinely transparent RGBA, alpha0 around the cats. NO floor, NO ground plane, NO cast/contact shadows, NO colored halo, NO checkerboard drawn into pixels, NO litter tray, NO grid lines, NO frames, NO border, NO labels, NO text or watermark.
CRITICAL CORRECTION: Each of the eight cat cutouts must be substantially SMALLER in its cell: ENTIRE CAT HEIGHT INCLUDING TAIL no more than330 pixels, centered horizontally, whole cutout vertically between90px and430px within its own512px tall row. Even the bottom-row tail tip must be BELOW y602 overall, never intrude into the top row. A wide fully transparent band must cross the entire atlas at row boundary y512; all column boundary gutters are fully transparent. Remove ALL atmospheric haze, vignettes, brown lighting halos and shadow pixels. Alpha is EXACTLY ZERO everywhere except actual cat fur. Studio light affects the cat pixels ONLY. Eight isolated cats floating in a completely empty alpha canvas. Direct front/rear walking remains unchanged.
```
