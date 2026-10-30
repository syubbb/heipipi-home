# Home layout, traffic and litter access implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Implement approved desktop option 2 and revised phone option 5, slightly widen dining, fix TV group behavior and single-door litter movement, then publish.
**Architecture:** RoomLayout owns responsive world geometry shared by drawing and physics. Retain original cat/photo/video/mat sprites and native volumetric cabinet renderer. Integrate one doorway into existing facility reservations; TV controller owns randomized seat assignment and group dissolution.
**Tech Stack:** Buildless browser JavaScript, Canvas 2D, Node vm behavior tests, Sites hosting.
**Spec:** docs/superpowers/specs/2026-10-29-home-layout.md

## Global Constraints
- Desktop selected original left-side-living-room option 2. Phone uses final approved preview exec-2a65e4f4-d6ce-4cdb-be5d-08fea70f2e94.png.
- No lower-left bookcase; level rectangular room; clear center/right window lookout. Box flush and square to back wall, original black-cat rug centered before box; toast aligned nearby.
- Food/water remain adjacent; widen their spacing modestly; separate litter from dining. Scratch pads have independent approach and bypass. Main routes allow two cats to pass.
- TV viewers use randomized seats, slow real walking, solid bodies and active yielding. Another player action dissolves the remaining TV group.
- Litter has one front door, enters and exits through it, no side wall crossing, no teleport or premature reservation release. Waiting is off the exit/main route.
- Preserve public audience, current memories, toolbar and camera behavior. User explicitly authorized deployment.

## Review Focus
- Resizing while a cat occupies a station must not leave obsolete path coordinates or trapped actors.
- A viewer temporarily yielding must recover its TV target without restarting through a blocker.
- A player interruption inside litter must egress through the doorway before new movement.
- A second litter user must not preempt/teleport the occupant or stand in doorway.
- Phone width and longest walking sprite must retain clear independent paths to both scratch pads and lookout.

### Task 1: Responsive room geometry and appearance
Files: create dist/room-layout.js, tests/home-layout.cjs; modify dist/index.html, dist/room.js, tests/room-engine.cjs.
Interfaces: RoomLayout.create({desktop,left,width}) -> floor, floorBottom, box, mat, toast, bowl, water, litter, scratch, window, television, tvSeats, furniture, obstacles. applyHomeLayout() mutates existing shared station objects.
- [x] Write geometry/clearance and screen orientation tests; run RED.
- [x] Add plan module; use existing floor image and volumetric joinery/cabinet models with square projection, matching source photo/video.
- [x] Wire responsive world bounds, scene rendering, station geometry, lookout, toys and camera; run geometry + actual route checks GREEN.
- [x] Save task evidence in progress ledger.

### Task 2: TV random seating, group cancellation and yielding
Files: dist/tv-cats.js, dist/room.js, tests/tv-random-seats.cjs, tests/tv-dissolve.cjs, tests/tv-active-yield.cjs.
Interfaces: geometry().seats optionally supplies layout positions; cancelAll clears pending/visits; interrupt dissolves group; requestNpcYield and resolveTraffic consider group actors.
- [x] Reproduce fixed seat order, stranded remaining viewers and group-yield exclusion with failing behavior tests.
- [x] Randomize reservation order, cancel group on alternate player command, allow actual walk-aside movement with solid-body rerouting and restored targets.
- [x] Run new tests and existing TV/detour/native-gait coverage GREEN.

### Task 3: Single doorway litter facility
Files: dist/room.js; tests/litter-doorway.cjs, tests/litter-queue.cjs.
Interfaces: litterPortal() returns entry, inside, clear, wait and aperture; facility reservation held through clear.
- [x] Write failing tests recording complete entry/use/exit and queued use/cancellation; forbid crossing side/back rectangles or teleport.
- [x] Replace side entry/different exit hop with aligned walking through one threshold, safe interior turn and correct front-wall draw order.
- [x] Queue off-route, reserve through landing clearance, handle interruption through same exit.
- [x] Run new and existing facility tests GREEN.

### Task 4: Integrated validation and publish
Files: design-qa.md, docs/validation/home-layout.md.
- [x] Run full suite and syntax/diff checks; inspect outputs.
- [x] Capture phone and desktop in browser; compare approved visual with render, test gather/cancel/lookout/box/mat/litter, fix observed issues.
- [x] Fresh-context whole-change review; fix material findings with reproduction tests.
- [ ] Package exact pushed commit with Site helper, save archive-backed version and deploy returned version, confirm succeeded.
