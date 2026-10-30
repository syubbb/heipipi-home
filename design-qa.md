# Approved layout implementation QA — 2026-10-29

final result: passed

Source visual truth:
- Desktop option 2: C:/Users/USER/.codex/generated_images/01a18289-419b-7e02-a4ac-0d7d4125c4d1/exec-fd4a1384-e732-4b53-9e44-f99b99112751.png (1487 × 1058).
- Final revised phone option 5: C:/Users/USER/.codex/generated_images/01a18289-419b-7e02-a4ac-0d7d4125c4d1/exec-2a65e4f4-d6ce-4cdb-be5d-08fea70f2e94.png (853 × 1844).

Implementation captures:
- C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-desktop-v119.png (1440 × 1024 CSS/pixels).
- C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-phone-v119.png (390 × 844 CSS/pixels).
- C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-window-v119.png.
- C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-litter-v119.png.
- C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-entry-v119.png.

Full-view comparisons were opened as combined browser inputs, not inferred from separate files:
- C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-phone-comparison.png (804 × 900), equal 390px-wide panels preserving both aspect ratios.
- C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-desktop-comparison.png (1440 × 550), equal 714px-wide panels preserving aspect ratio.
- Focused wall/rest/litter comparison: C:/Users/USER/Documents/ChatGPT/new/sites/home-layout-focus-comparison.png (804 × 480), same 390px display width with individually aligned crops.

State and normalization: overview, five cats seated at their randomized TV positions; current runtime weather/night versus illustrative dusk in source. Captures use standard density (1 image pixel per CSS pixel). Source concepts are downscaled proportionally in comparison panels. This is an approved layout/flow implementation, not a redesign of the established toolbar or replacement of original pet imagery. Browser QA uses a temporary accelerated deterministic clock around the actual engine, navigation, traffic and rendering; screenshots are not evidence of natural-speed animation timing. Temporary QA files are removed before packaging.

## Findings
No remaining actionable P0/P1/P2 difference within the approved layout scope.

- Fonts/typography: original Traditional Chinese controls, labels, font stack, weights and hierarchy remain readable. The phone retains the existing taller HUD and two-row toolbar; the concept's shortened header and approximate controls were illustrative. No persistent control is clipped at 390 × 844 or 1440 × 1024.
- Spacing/layout: level wall and floor, TV rear-left, window landing clear, aligned box/mat and toast right, scratch stations and litter separated from dining. Desktop dining front-right; phone dining paired behind viewers and slightly wider as requested. Original scratch-pad and pet sizes retained. Concept route arrows/zone labels are planning annotations and intentionally omitted.
- Colors/tokens: warm cream wall, wood floor, original navy controls and gold active state. Actual weather/night controls window color and lighting; not a fidelity defect. Existing wood-frame depth and native volumetric shelf rendering remain distinct layers.
- Assets/image quality: original seven videos, actual five-cat family photo, black-cat artwork, pink original mat and pet sprites remain; generated concept substitutes are not used. Original floor photograph is reused, while furniture uses the existing scalable native 3D renderer with open shelf depth. New door gait alpha verified against the floor: no visible broad gray halo. Native sprite resolution remains the limit at extreme zoom; arbitrary infinite raster sharpness is not claimed.
- Copy/content: original room title and action labels preserved. No development labels, staging coordinates, route diagrams or internal architecture copy is shipped.

## Interaction and runtime evidence
Phone and desktop groups reach five watchTV states. Existing real-engine seeded tests verify slow locomotion, collision-safe detours and physical yielding. Alternate player action dismisses all group visits. Browser lookout state is at the window glass, leaving the panorama clear. Litter interior and rear approach captures show aligned entry, grounded narrow walking silhouette and correct front-wall occlusion. Doorway/lift/player-yield regressions cover safe exit after interruptions and reservation release. Existing mat/box tests cover prone mat sleep and original paper-box behavior. Console errors checked after TV and litter QA: none observed.

## Comparison history
First combined visual comparison of final geometry: no actionable P0/P1/P2 difference, no visual fix made in response. Functional review separately found three Important issues (ordinary player yield, protected-litter lifting, unreachable photo stage); each reproduced before source fixes. Full-suite performance regression from candidate searches was corrected by a two-search cooldown budget. These functional fixes do not change static scene geometry in the captures.

## Implementation checklist
- Approved responsive room geometry and paired dining implemented.
- Shared geometry drives drawing, obstacles, stations and entry/exit paths.
- Fresh whole-change review completed and material findings addressed with regression coverage.
- Remove temporary QA files, verify suite/syntax/diff, package exact pushed commit and publish via Sites.

Residual limits: physical mobile Safari hardware was not available; phone QA uses Chrome viewport emulation. Weather and randomized pet poses vary in live use.

## v120 right-wall adjustment
User requested moving the TV-side photos and air conditioner onto the empty far-right wall. Both existing frames and original AC crop are now grouped there. Desktop keeps original sizes; phone stacks the frames and proportionally reduces the AC to fit the narrow wall. Phone window shifts 55 world units left with its glass size preserved, and its lookout updates from the shared layout. First phone capture revealed curtain overlap; the final capture confirms clear separation after the window shift. No animal, station or TV geometry was moved.

Browser evidence: C:/Users/USER/Documents/ChatGPT/new/sites/right-wall-desktop-v120.png (1440 × 1024), C:/Users/USER/Documents/ChatGPT/new/sites/right-wall-phone-v120.png (390 × 844). Both original photos remain intact and do not overlap the window, curtains or shelving. Console errors: none. Focused validation: home-layout.cjs, home-routes.cjs and home-stations.cjs passed; room-layout.js syntax and git diff --check passed. Final result for this bounded adjustment: passed.

## v121 sprite bleed and rest nook
TV directional frames included faint preceding-row foot edges above heads. Rendering now caches the main alpha component, ignores weak alpha bridges and retains its one-pixel antialiased fringe. Original atlas remains unchanged. tv-sprite-bleed reproduced detached/weakly-connected strips RED then GREEN while retaining ears/body. Browser phone overview confirms five watchTV actors without the detached head lines; console errors none. Evidence: C:/Users/USER/Documents/ChatGPT/new/sites/rest-tv-phone-v121.png and rest-tv-desktop-v121.png.
Rest nook is aligned at the right, original mat stays centered with the box; toast is to the right and enlarged from130 to164 world units on phone and172 to210 on desktop. Extra forward clearance prevents a cat beside the box from getting trapped; rest-nook-exit reproduced that narrow-gap case RED then GREEN. home-layout, home-routes, home-stations, home-tv-routing (eight seeded gatherings), home-photo-gather, tv-cats, tv-orientation, favourite-mat and manual-mat-sleep passed. Syntax/diff checks passed. Focused validation performed; the unchanged full91-test suite was not repeated. QA helper files removed. Final result for this update: passed.

## v122 practical volumetric TV shelf contents
Replaced generic plant/frame/vase shelf population only for home-open-console with a receiver, remote, upright game console, controller and three stacked disc cases. Each item uses independent projected front/top/side faces, recessed depth, shaded surfaces and contact shadows. Receiver has vents/display/LED; console has a dark central slot; cases have individual spines. Original shelf back, side walls, floor and front rail clip/occlude the objects. No raster shelf interior is used. Other room storage remains unchanged.
room-detail.cjs gained a RED→GREEN check for practical TV contents without plants and separate depth geometry on desktop and phone; cabinet-tv-geometry, home-layout, syntax and diff checks passed. Browser inspection at2x using the actual cabinet renderer showed visible equipment depth and original drawer fronts (C:/Users/USER/Documents/ChatGPT/new/sites/tv-console-depth-v122.png). Initial capture crops the upper cabinet cap, but shelf/equipment faces are visible; repeat capture failed due intermittent Chrome CDP screenshot timeouts. Temporary preview removed; viewport reset. Bounded change validated without rerunning unrelated full simulation suite.

## v123 right-wall normal scale and centered group
Cold-air unit and two original frames are enlarged and positioned from the midpoint between the right curtain edge and shelving, rather than fixed offsets from the screen edge. AC is centered above a balanced pair of frames. Desktop AC190→280, family85→112, black art58→78 world units; phone AC88→162, family66→85, art45→58. Original aspect ratios preserved. Phone window width360→280 retains its height, reserving a usable right wall; shared lookout position follows automatically. Geometry/route/station tests, syntax and diff checks passed. Actual browser captures at390×844 and1440×1024 confirm unclipped frames, clear curtain separation and larger proportions: C:/Users/USER/Documents/ChatGPT/new/sites/right-wall-large-phone-v123.png and right-wall-large-desktop-v123.png. Console errors none. Final result for bounded update: passed.

## v124 AC, inward cushion and litter body scale
AC width280→310 desktop,162→176 phone, keeping centered grouping and original aspect ratio. Toast moved from floor+150 to floor+105, beside the vertical interval between box(front floor+70) and mat(center floor+132). The inaccessible rear cushion recess is excluded from roaming targets; old occupants can recover with the existing free-point mechanism. Updated rest-nook regression verifies the blocked recess and reachable recovered placement. Other station routes remain clear.
Door gait was scaled115/108 while ordinary walking is106.56/100 for black/Dongdong, causing roughly8% shrink at the exit-to-turn switch. Door gait now uses the matching normal body height while retaining floor anchors and all stride phases. litter-body-size regression RED→GREEN. litter-gait, doorway, interruption, home-routes, home-stations, home-layout, favourite-mat and eight seeded home-tv gatherings passed; syntax/diff checks passed. Browser phone inspection at390×844 confirms front-facing exit and inward right cushion/large AC; no console errors. Evidence C:/Users/USER/Documents/ChatGPT/new/sites/rest-size-phone-v124.png. Preview uses accelerated clock and stops at exit transition; natural-speed transition not claimed as video evidence. Temporary QA files removed. Final result for update: passed.

## v125 compact cinema seating
Manual TV gatherings now reserve only the five primary positions: two level front seats and three level rear seats at interleaved x positions. Identities remain randomized. Width reduced290→248 world units; row depth190 replaces uneven155–205 offsets. Phone front row710 leaves body clearance below dining480, and phone formation shifts55 units right to keep the rear-left seat off the scratch-pad approach. Group seat fallback outside the five-position pattern is disabled; pending requests retry primary seats.
Mood icons use32-unit head clearance, keeping owner portraits above ears, with sufficient rear-row height to clear front bodies; TV reactions render after puddle reactions so other effects cannot cover them. Existing frameless artwork and owner reactions preserved.
tv-cinema-layout RED→GREEN checks2+3 staggered rows, compact width, dining/body and rear-reaction clearance. home-tv-routing (eight seeds desktop/phone, primary-slot-only, actual yielding and no body overlap), tv-random-seats, tv-cats, tv-active-yield, tv-personal-reactions, tv-dissolve, home-layout, home-stations and syntax/diff checks passed. Browser390×844 confirms five seated actors in2+3 formation with clear icons: C:/Users/USER/Documents/ChatGPT/new/sites/cinema-phone-v125.png. Console errors none observed. QA accelerated actual engine clock; helpers removed and viewport reset. Final result for update: passed.

## v126 nearer TV and reduced row depth
Front row moved585→510 desktop and710→580 phone; rear offset190→130 (32% shorter). Maintains2+3 staggered rows and randomized primary-seat assignments. Phone dining remains adjacent but moves to the right-side zone (400/550,680 in900-wide phone world), freeing the near-TV positions and reaction icons from bowl overlap. Desktop dining unchanged. Icon artwork and foreground layer remain intact.
Updated tv-cinema-layout reproduced old distant rows RED then GREEN, checking front<=580, row gap<=135, bodies and reaction areas clear dining. home-layout, home-stations, home-routes, tv-personal-reactions, tv-random-seats, tv-active-yield and eight seeded home-tv-routing gatherings passed; syntax/diff checks passed. Actual browser390×844 confirms five settled actors, visibly nearer TV, tighter rows and icons separated from bowls. Evidence C:/Users/USER/Documents/ChatGPT/new/sites/cinema-near-phone-v126.png; console errors none. QA uses accelerated actual engine; temporary files removed and viewport reset. Final result for update: passed.

## v127 bottom-center dining pair
Food/water are symmetrically centered on the room horizontal midpoint on both layouts, y1120 in1220-height world, retaining100 world units to the bottom edge (approximately75 after dish footprint). Adjacent spacing preserved175 desktop/150 phone. Updated approved geometry test reflects explicit new placement: midpoint, bottom access clearance and >200-unit clearance from the litter door instead of former zone-specific450 separation. home-layout, home-stations (actual food/water approach), home-routes, litter-queue, eight seeded home-tv-routing, syntax/diff checks passed. Phone browser confirms actual autonomous eating at new food dish and unclipped bowls with lower approach room, clear litter entrance; console errors none. Evidence C:/Users/USER/Documents/ChatGPT/new/sites/dining-bottom-phone-v127.png. Includes saved v126 nearer cinema seats that had failed publication due hosting errors. QA files removed and viewport reset.

## v128 TV centering and meow label lifetime/anchor
Formation center now uses TV horizontal midpoint constrained by left+220, reserving95+ units for the leftmost viewing/walking cat. Desktop aligns exactly; phone shifts left73 units and stays within the left edge including wide walking sprites. Primary2+3 seats, near-TV depth and randomized assignments remain.
Meow label was also rendered by the persistent askKind=meow fallback after sound completion, and viewport clamping pinned the label away from its cat during camera zoom/pan. Removed that persistent text fallback; labels now use cat world-space head coordinates and the camera's current transform. Audio buffer start supplies actual duration/rate and audio onended clears the corresponding label, with a generation token preventing older sounds from clearing a newer call. Countdown runs before TV/lift/gather ownership returns, with muted/unavailable audio retaining only brief fallback feedback.
meow-label.cjs RED→GREEN verifies no persistent ask text, world coordinates at .5/1/3 camera scales, actual source duration/end hooks, and timer expiration during TV ownership. cat-voices, audio, eight seeded home-tv-routing, tv-cinema-layout, tv-personal-reactions, home-stations, home-layout, syntax and diff checks passed. Updated cinema dining assertion to handle a front row above the bottom bowls as well as below/sideways clearance. Browser QA unavailable: local browser use is disabled in Work settings; no new screenshot or visual-pass claim. Temporary QA files removed. Native deployment result determines publication status.

## v129 — round celestial bodies and portable project ZIP
- Root cause: home-window transform scaled x/y independently, stretching the sky's circle geometry.
- Keep frame and curtain dimensions; cancel the non-uniform transform only inside the glass clip, then draw the exterior with one uniform cover scale centred in the glass.
- RED/GREEN: tests/home-sky-round.cjs reproduces and verifies actual accumulated canvas transforms for both sun and moon at phone/desktop window dimensions.
- Passed home-sky-round, panorama-sky, window-scene, window-proportions, syntax and diff checks.
- Browser verification remains unavailable because local browser use is disabled in Work settings. No visual pass claimed.
- README includes portable Node server instructions and assets/progress limitations for handing the full ZIP to another AI.
