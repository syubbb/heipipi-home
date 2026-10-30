# Together television implementation plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task by task.

**Goal:** Expand 集合 into 拍照 and 看電視, with five close staggered viewers and warm memorial reactions.

**Architecture:** Keep existing gather photography, collision navigation, directional cat atlas and video player. Add a small accessible chooser and a vector reaction renderer; TV controller owns reserved seats, pending busy viewers and reaction timing.

**Tech Stack:** Existing buildless JavaScript, HTML/CSS and Canvas2D.

**Spec:** User request in this conversation: two choices above 集合; photo uses existing gather; all cats watch by the TV; two in front and three behind; black cat joyful/likes, companions black-cat icons, hearts, fascination, missing, memories and affection.

## Constraints and rulings
- Preserve phone/desktop rendering, upright actual TV-facing directions and real paths.
- Use drawn vector icons with distinct timed phases; avoid bitmap blur and default emoji differences.
- Ruling: 2 front/3 back, half-column stagger, 110 world-unit spacing; reserve nearby fallback seats only if an obstruction prevents a primary seat.
- Ruling: busy cats finish safe facility departure before joining; urgent needs remain higher priority. Queue manual requests, cancel upon a new manual command.
- Ruling: use the existing modules and no new dependencies; implement inline under the detailed user specification.

## Tasks
- [x] Add failing tests for staggered seats, group queue/cancellation, deterministic varied memorial reactions and menu interactions.
- [x] Implement chooser with two named buttons, outside/Escape close, focus return and above-trigger responsive positioning.
- [x] Implement compact TV seats, queued busy viewers and group holding; preserve navigation/urgent-care safety.
- [x] Implement 10 vector reaction variants and independent timing, drawn above viewers after depth sorting.
- [ ] Run focused/full regressions, phone/desktop browser QA and final review; publish same site and audience.

## Review focus
- Photograph must run only after picking 拍照, and keep its existing behavior.
- Opening the chooser must not interrupt play; other buttons, outside clicks and Escape close it.
- Cats in litter/box or with urgent needs must leave safely; pending callbacks cannot resurrect canceled viewing.
- Staggered seats must be reachable in both real room layouts and clear the TV/scratch pads.
- TV reactions must survive early-return sprite drawing and not duplicate normal mood icons.

## Execution ledger
- Baseline live v114, source a1f0028a6f3e20e56b1c955d6d39df56df65ac38.

- Core menu and two/three arrangement tests observed RED before implementation, then GREEN.
- Final independent reviewer found care erasing queued returns, seated time consuming traffic-yield travel budget, and keyboard outside actions leaving chooser open. Fixed with tv-group-care.cjs, tv-group-yield.cjs and gather-menu.cjs RED→GREEN. tv-toolbar.cjs also RED→GREEN verifies newer individual actions are highlighted correctly.
- Ruling: other cats may keep watching when the user interacts with black cat; only black cat's group membership controls its toolbar highlight.
- Ruling: periodic NPC facility deadlines may wait during a manual TV group; active care finishes safely, and real black-cat urgent needs keep priority. Automatic care pauses retain the queued group return; explicit commands cancel it.
- User follow-up: remove grey mat surround, level its edges and center it on the box. FAVOURITE_MAT.x now derives from BOX.x; sleeping target already derives from mat. Rectify original photo pixels to a clean fabric-only mask; omit extra shadow and photographed surrounding floor/loose label. Original JPEG is unchanged.
- Mat cleaning/centering tests observed RED→GREEN. Whole-pixel rectification rows prevent fine horizontal alpha seams found in close-up visual QA.

- Final verification: full suite 66/66 passed; syntax and diff checks pass. Phone 390x844 chooser/placement and desktop 1440x900 staging inspected, enlarged mat checkerboard and all eleven vector motifs inspected. Packaging/publishing follows these verified checks.
