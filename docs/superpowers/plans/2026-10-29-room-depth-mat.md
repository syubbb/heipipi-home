# Room depth, facility layout and favourite mat implementation plan

> Execute inline using superpowers:executing-plans. Keep existing Sites identity and publish when verified.

**Goal:** Crisp furniture and frames with separately modelled cabinet interiors, slightly lower care stations, no tabletop TV plant, and an exact-photo favourite mat with autonomous naps.

**Architecture:** Retain room navigation ownership and existing furniture footprints. A focused RoomDetail Canvas module models shelf cavities and separate solid objects, rendering at camera/DPR resolution. Reuse the original mat pixels with a clipped source contour, and share a single mat placement between drawing and sleep arrival.

**Tech:** Existing buildless JS/Canvas and deterministic Node VM room tests.

## Constraints and rulings
- Preserve cats, TV playlist, room footprint, audience and live URL.
- Move bowls/litter down 30 world units and scratch pads down 28 units; all contacts and routes derive from those anchors.
- Remove only the small plant on the desktop TV console; keep the standing floor plant.
- Use photo 2 without repainting its pattern; mat near x=145,y=395 (below the box, above/left of toast), in both layouts.
- Cabinet books, vases, plants, frames and lamps are individual geometry with back/side/top surfaces and occlusion; a flat front image is insufficient.
- Cache detail only at actual render scale; refresh when zoom/DPR changes. Finite source photos retain their native resolution; do not promise unlimited bitmap detail.

## Tasks
- [x] Shift facility anchors and regression-test entry/use/exit and simultaneous reservations.
- [x] Add exact-photo mat rendering and a cancellable, cooldown-limited autonomous sleep visit after real path arrival; urgent needs retain priority.
- [x] Model recessed cabinet bays and independent props, vector joinery, frames and decorative art; render on phone and desktop at the current scale.
- [x] Remove the desktop TV pot, verify closeups/occlusion and all furniture bounds.
- [x] Run full tests and seeded multi-cat simulations, visually inspect both layouts, review changes, package and publish.

## Review focus
- Stations near the lower boundary must retain safe exit space.
- NPCs can detour around an asleep black cat on the mat.
- Manual click, lift, gather and urgent care cancel pending mat callbacks.
- Cabinet props stay inside their bays and behind front shelf lips/glass.
- Zoom must invalidate cached detail and preserve clean joins without seam expansion.

## Execution ledger
- Source baseline: cf36eb1442ca556f217c3f7a10091845e5976234 (live v113).
- Ruling: TV first-row y450 replaces410 so moved pads do not consume a seat and force a third row beside litter. Existing full-room navigation tests pass in both layouts.
- Ruling: test tangent/crossing fixtures move with relocated obstacles; original assertions still check exact swept clearance and concurrent arrival.
- Favourite-mat test observed red before implementation; station and 3D model tests observed red before implementation.
- Final independent review identified travel urgency, baked phone ghosts and standing plant order. All three fixed; reviewer rechecked mat/detail tests and confirmed resolution.

- Final verification: 60 deterministic test files passed. Phone 390x844 and desktop1440x900 visual QA, close-up cabinet bays/joins, original mat photo hash and live autonomous mat sleep observed.
