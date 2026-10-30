# Audio assets

`dist/assets/gather-whistle.mp3`: “Referee whistle sound.wav” by Rosa-Orenes256, recorded physical referee whistle. Source: https://freesound.org/people/Rosa-Orenes256/sounds/538422/ . License: CC0 1.0 https://creativecommons.org/publicdomain/zero/1.0/ . Freesound MP3 preview used without pitch/speed changes, played twice with lower playback gain.

Background piano melody and synthesized felt-piano samples are original procedural audio in the application.


## Socks and Dongdong floor video clips (2026-10-25)
User-provided `f4FwO9aGT03TPrzA0wupIIRgMwdCkjf3x6uispagXiU.mp4` (Socks) and `N7Y7dZjw6bN3dpdzIbDmvmHtzQLdYQHYLAT11Kbczew(1).mp4` (Dongdong). The transparent `socks_floor_*` and `dongdong_floor_*` sequences retain the supplied movements. Background segmentation and fixed floor anchors are preprocessing only; the model and original videos are not shipped. The two circular corrugated scratch pads are drawn by the game, following the user's `IMG_1246.jpeg` reference.


## Dongdong floor clip replacement
The user's `gemini_generated_video_AB476F9A.mp4` replaces Dongdong's previous floor movement sequence. `dongdong_floor_000.png` through `dongdong_floor_099.png` are transparent frames from this 10-second clip, aligned to a fixed floor anchor. Socks' floor clip and both walking clips remain unchanged.


Latest update: supplied front portraits replace Socks and Dongdong gathering sprites. Video_20261025_211344_484.mp4 supplies Socks sitting (first segment) and board paw movements (later segment), as confirmed by the user. Video_20261025_211344_473.mp4 was reviewed but not assigned to scratching because it shows rolling. The cancelled combined walk/scratch clip is not used.

Socks walking replacement: gemini_generated_video_9979F2F9.mp4. The clip is normalized to the renderer's right-facing convention; the existing rear-sock color correction remains applied. Gathering portraits, sitting and board clips are unchanged.

Gathering portraits replaced with user supplied 9F45A4FF-AE93-42F0-AEA3-36E3ACB4D435.jpeg (Socks) and 5A5C9BCD-6BD8-450F-AF09-C6489871CAFB.jpeg (Dongdong), seated front views. Other action assets unchanged.

Socks urination animation: user-provided gemini_generated_video_b1b32ab5.mp4, segmented into transparent PNG frames with foreground masks. Only source 4.25–8.875 seconds is used; paw-digging portions before and after are omitted.

Socks walking and urination mattes reprocessed using semantic foreground masks and motion propagation. Green-screen cleanup targets only bright saturated background, preserving dark coat reflections and white paws.

Socks walking sprites and frame metadata restored byte-for-byte to version 43 at user request; urination sprites and behavior remain from version 44.

Home B preview: generated Taiwanese family-apartment room background based on the selected B concept; existing cats, toys, carton, stations and interactions retained. Local preview only, no publication.

Window scenery: user supplied IMG_1295(1).jpeg, integrated unchanged as a clipped continuous window view in assets/window-view.jpeg.

2026-10-26 walking replacements: user supplied j53luVDCWL-3eBURfC4S05Ox8_UaEKO3vIn2OqSoGRY(1).mp4 (Socks) and lK_IVy7nEJ-3v1Fl3jxjObAAcSbJetis_yq44vPFLP0(1).mp4 (Rabbit). Green-screen extraction at 12 fps, 512×288, preserving paws; output assets/walk-v2/. Existing other poses retained.

NPC voice recordings (four distinct clips): Kerzoven, Cat Purr & Meow, CC0, https://opengameart.org/content/cat-purr-meow . ye.wav = cat_mewfood.wav; rabbit.wav = cat_softmew.wav; socks.wav = cat_mewpurr.wav; dongdong.wav = cat_mewpurr2.wav. Gain normalized for consistent playback. Original black-cat recordings retained.

SunCalc v1.9.0 (Vladimir Agafonkin), BSD-2-Clause, https://github.com/mourner/suncalc ; full license in dist/assets/suncalc-LICENSE.txt. Outdoor weather: Open-Meteo (CC BY 4.0), https://open-meteo.com/ ; credited in window environment dialog. Zhuwei Tamsui fixed approximate location 25.135 N,121.46 E.

- `tv-cat-backs.png`: AI-generated rear-view atlas based on the five existing character references, generated for this project on 2026-10-28.

- `console-plant-v1.png`: Generated with the built-in imagegen tool on 2026-10-28 for the desktop TV console. Prompt: isolated compact rounded pothos in a warm-white ceramic pot, based on the small plant right of the reference television; front view slightly above, warm light, transparent background, no furniture or shadow.

2026-10-28 TV replacement: seven user-supplied MOV/MP4 recordings replace the previous TV library. Files are listed with source hashes in dist/assets/tv/manifest.json. Encoded as 480x270 H.264 Baseline, BT.709, 15 fps, silent, complete landscape framing; original uploaded recordings remain untouched. The old encoded clips and posters were removed from the published assets.

- `five-cats-family.jpg`: Latest user-supplied five-cat group photograph (replacement photo 1), placed unchanged in the large wall frame on phone and desktop, 2026-10-28. Full photo is fitted inside the original frame opening. The original black-cat illustration is now shown in the tabletop frame beside the lamp.

- `tv-cat-directions-v1.png`: Built-in imagegen generated five upright rear/diagonal sitting views for each of the five cats, based on the existing rear-view atlas, 2026-10-28. Prompt: 5x5 transparent photorealistic atlas, rows retain each cat identity, five yaw views face diagonally or directly away from the viewer (actual column angles are recorded in the JSON); full body and clean alpha edges. Sprite rectangles and body anchors in the matching JSON.

- `favourite-cat-mat.jpg`: Original 1280x960 user photograph supplied 2026-10-29. Pattern, colours and fabric label rendered from unchanged photo pixels with a contour clip, without generative redraw.
- Cabinet interiors, shelves, independent solid props, crisp frame joinery and decorative art: project-native Canvas geometry. Detail tiles regenerate at the current camera/DPR scale.

- TV memorial reactions and gather chooser camera/TV icons: original project-native Canvas/SVG vectors, no external artwork. Eleven reaction motifs rotate independently per viewer.
- Favourite mat refinement: original photo remains unchanged; Canvas rectifies its perspective, masks the fabric cleanly, excludes the loose photographed label and surrounding floor, and removes the previously painted shadow. Placement is centered on BOX.x.

- `owner-memories-v1.png`: generated with built-in imagegen using the two user-supplied owner portraits as references. Transparent 1086x1448 chibi atlas with 12 portrait/hug/kiss/petting/longing motifs. Original owner photographs are not included in published assets. Source generation prompt: docs/owner-memories-prompt.md. Native black-cat vector expressions are project-authored and have no surrounding badges/frames.

- `mat-sleep-prone-v1.png`: built-in imagegen generated a transparent photographic sleeping cutout of Heipipi from the existing lie sprite and supplied sleepy-face reference. Crop is drawn onto the existing original-photo mat; source generation prompt is docs/mat-prone-sleep-prompt.md.
Front/back litter-door walking atlases: `dist/assets/litter-walk-black-v1.png` and `dist/assets/litter-walk-dong-v1.png`, generated with built-in imagegen from existing user-provided cat references. Original RGBA outputs retained unchanged. Exact prompts, identity references, alpha checks and provenance: `docs/assets/litter-walk-black-v1.md`, `docs/assets/litter-walk-dong-v1.md`. Native original indoor-use animation and all other cat sprites are retained.
