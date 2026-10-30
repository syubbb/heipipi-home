# Stable gathering detours bugfix plan

> **For agentic workers:** Execute inline with superpowers:executing-plans, then independent final review.

**Goal:** Cats detour around each other when gathering for photography or TV, without old-goal reversals or persistent courtesy loops.

**Spec:** Current user request: during gathering cats get stuck against others and walk back and forth; walk around the blockers instead.

**Baseline:** live116, source709da8976f6b3afcd0683bf2bcb3f27726514690.

## Evidence
- Actual room-engine seed3 photo gathering produces 12 horizontal reversals for Socks. startGather sets gatherSlot but retains stale actor.goal, which shared traffic rerouting reads.
- Actual TV controller plus resolveTraffic/finishLocomotionTick produces 7 reversals for Socks; prior tests excluded shared traffic integration.
- Gather update softens all actor pairs after .35s and ignores traffic-yield ownership; shared traffic can repeatedly replace grouped routes or disturb seated viewers.

## Tasks
- [x] Regression tests: stale goals, full shared-traffic crowded phone/desktop assembly, stable routes and safe detours past seated actors.
- [x] Unify group destination ownership and prevent group members from mutually replacing their commands with yield/roaming goals.
- [x] Retain valid detours until blocked or complete; preserve photo close placement only during the final short alignment.
- [ ] Run focused/full simulations and UI checks, independent review, package and publish same Site/audience.

## Constraints and review focus
- Preserve five unique photo/TV seats, walking gait, urgent care, manual cancellation and real collision navigation.
- No teleporting or whole-route actor collision bypass to solve congestion.
- Photo pose body edges intentionally sit closer than walking collision footprints; final alignment may use short pose-specific clearance, not room-wide pass-through.
- Seated viewers hold their seats; incoming cats must go around them.
- General roaming/facility traffic must retain its existing behavior outside group commands.

## Execution ledger
- Stale photo destination regression RED→GREEN. Group slot owns goal/walkGoal; shared roaming/yield cannot replace assembly commands, seated TV viewers hold position, valid paths persist until blocked/exhausted.
- Photo formation keeps all collision bodies. Within80 units of both slots, center-adjusted footprints use actual pose widths instead of the much wider walking-body clearance; no actor is removed from collision checks. Approach ±31 offset is stable; blocked/no-progress approach falls back to actual-slot routing.
- Socks A* adds turn cost rather than tiny alternating diagonal steps. Grid edges are checked through real swept collision tests. A physically clear diagonal remains permitted even when neighboring axis cells contain curved obstacles; exact segment checks still forbid all actual corner cuts.
- Actual room-engine regression fixtures cover the bowl/cat narrow diagonal, crowded same-side photo approach, old roaming goals, no body bypass, photo near-slot liveness, stable TV route count and seated viewers on both layouts.
- Independent review found inherited soft passes and blocked photo approach seed17. Both accepted and fixed with RED→GREEN tests: assembly-old-passes.cjs and expanded gather-crowded.cjs. Reviewer's in-memory actual-goal fallback completed120 seeded phone/desktop cases. Existing mobile-cat-simulation seed47 exposed axis-cell overrestriction; exact diagonal corridor regression reproduced and fixed it.
- Ruling: photo pose collision proxies retain their center offsets and solid footprint throughout final alignment; room-wide pass-through was removed from assembly behavior. General traffic outside assembly retains its existing courtesy rules.

- Final verification: fresh full suite76/76 passed, including48 seeded actual phone/desktop photo assemblies, unchanged180-second multi-cat simulations at60Hz/20Hz, dining/controls/collision regressions and grouped TV integration. Phone UI with accelerated fixed-step QA harness (same path/physics code) confirmed five-photo arrival then five TV arrival; temporary QA files removed before packaging. Syntax and diff checks pass.
