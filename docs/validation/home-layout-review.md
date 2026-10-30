# Home layout whole-change review

Reviewed 2026-10-29 against baseline `f9dc35c810a60e2ecae0d69fa43f1a0100d76122`, supplied diff `home-layout-review.diff`, approved spec, implementation plan, and validation ledger. Findings describe the reviewed snapshot before the implementer applies fixes. Review only; no implementation files edited.

Result: **0 Critical, 3 Important, 1 Minor**. The two confirmed litter deadlocks should be fixed before publishing. The gathering regression should also be resolved and verified with the existing tests.

## Important — ordinary black cat never executes a doorway yield

Location: `dist/room.js:1634`, `dist/room.js:1642`; missing integration in `updateCat` at `dist/room.js:1442`.

Door priority now allows `requestNpcYield` to target the ordinary black cat. It sets `trafficYield` and `state='yield'`, but `updateCat` has neither a call to `updateTrafficYield` nor a yield switch case. Only TV visits and facility care execute that command. An ordinary idle black cat blocking the landing freezes and prevents Dongdong from completing the direct exit, retaining the reservation indefinitely.

Reproduction with actual engine functions, both layouts: let Dongdong reach litter `use`; place idle black cat at `litterPortal().approach`; call `cancelFacility(Dongdong)` and tick `resolveTraffic`, `advanceFacility(Dongdong)` and actual `updateCat` for 40 seconds. Phone: black remains `(627,1138)`, state `yield`, displacement 0; Dongdong remains `(627,1110.5)`, phase `exitDoor`, reservation held. Desktop reproduces at x approximately -615. Add player yield execution before ordinary behavior while retaining TV/lift ownership guards.

## Important — lifting an interior user leaves an impossible protected exit

Location: changed cancellation contract at `dist/room.js:320`, called without respecting its result at `dist/room.js:2293`; direct aperture constraint at `dist/room.js:216`.

`cancelFacility` now returns false and retains care during a protected exit. `beginLift` still proceeds immediately after calling it, clears `inside`, and permits dragging. After dropping away from the litter center, the retained `exitDoor` uses direct movement which rejects every step outside the aperture, so it cannot recover or release its reservation. This also violates the approved requirement that an interruption inside first exits safely.

Reproduction, both layouts: let black cat reach litter `use`; call actual `beginLift`; drag to main aisle x, y800; call actual `endLift`; tick `resolveTraffic` and `advanceFacility` for 40 seconds. Phone remains `(315,800)` and desktop `(212,800)`, `exitDoor`, no movement after drop, reservation held. Defer the lift until doorway egress or otherwise honor the protected-exit result consistently for black and Dongdong.

## Important — permanent gathering stage can be unreachable

Location: `dist/room.js:2414`–`dist/room.js:2421`.

The new approach selects the first unblocked endpoint without checking whether its path is reachable, then caches it for the whole gathering. The available 90/150/210 offsets also remain outside the 80-unit near-slot footprint rule, which can prevent Socks from approaching a completed tight row. Existing `gather-tight-corner.cjs`, `gather-detours.cjs`, and `mobile-cat-simulation.cjs` expose regressions.

Concrete reproduction: seed3, seated row and Socks at `(205.1403,472.9315)` from `gather-tight-corner.cjs`. Its slot is `(303.0656,447)` and cached stage `(303.0656,357)`; all upper routes are empty, while lower `(303.0656,478)` is reachable in one edge. A VM-only experiment choosing genuinely reachable stages and permitting 31/60 offsets for legacy geometry passes tight-corner and the six new-layout photo gatherings plus opposed-arrival regression. Legacy detours then completes in 17.5 seconds, though the old cardinal reversal-count assertion still reports five Socks bends against four allowed. Preserve the approved layout lanes and verify progress and bounded navigation work, rather than accepting an unreachable permanent stage.

## Minor — desktop waiting bay mirrors the approved upper-left position

Location: `dist/room.js:194`–`dist/room.js:196`.

The approved spec says the next litter user waits beside the upper-left of the tray. Desktop sets `side=1`, putting `wait.x=LIT.x+180` on the upper-right; phone uses the upper-left. This is a spec discrepancy, even though the current bay is clear of the exit in the tested two-user flow. Resolve the intended desktop position explicitly in the implementation/spec. Simply negating the side is insufficient because the tray is near the left room edge.

## Validation and limits

Passed as supplied: `litter-doorway`, `litter-interrupt`, `litter-queue`, `home-stations`, `home-routes`, `home-tv-routing`, `home-photo-gather`. Additional actual-planner checks passed all rabbit/Socks/Dongdong routes from lookout to each scratch pad separately while the alternate pad was reserved; every returned edge passed `yeCanStep`.

The occupied-box phone/desktop resize regression passed. TV tests exercise recovery from a temporary yield and eight seeded gatherings without body crossings. No additional actionable issue found in those examined paths. No repository standards files were found by the review's filename search; no style-only smell is promoted to a blocker.

Declined to judge: pixel fidelity to the approved desktop/phone images and photographic identity/animation quality of the generated gait atlases, because this review used source and engine-level behavior rather than a fresh screenshot or video comparison. Publication behavior, public audience, and archive packaging are outside this review; no deployment performed. Live helper files `_qa-room.*` are untracked and were not treated as production changes.

VM-only gathering candidate experiment final result: mobile-cat-simulation passes all three seeds (3,47,137), each180 simulated seconds, two gatherings and five lifts; navigation searches1143/1151/866, max roaming stillness at most1.1 seconds. This is candidate evidence, not a claim that source fixes are already implemented.
