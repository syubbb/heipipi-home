# Room interaction repairs

Goal: restore four-pane window sunlight, keep cats moving in a crowded room, keep NPC resting away from bowls, roam throughout the visible room, shift litter right, and support pinch/trackpad zoom.

Architecture: preserve the buildless canvas game. Route around actors first, retain black-cat priority, and allow a temporary pair-specific crossing only after a blocked interval; furniture remains solid. Use the existing depth renderer. Add manual camera mode with bounded zoom and pan.

- [x] Reproduce missing pinch zoom and missing window shadow, bowl-side resting and crowded deadlocks in regression checks.
- [x] Restore a single four-pane sunlight patch and move litter from x500 to x520 (16px edge clearance).
- [x] Replace food-biased/fixed NPC destinations with room-wide visited zones; disallow rest near either bowl, also after feeding or yielding.
- [x] Add proactive rerouting and bounded pair-specific crossing, then test stationary eaters, head-on walkers, and crowded scenes.
- [x] Add two-pointer pinch/pan and wheel zoom, prevent synthetic taps after gestures, preserve explicit overview/close buttons.
- [x] Run browser actions, mobile viewports, autonomy and crowded movement checks. Review the diff; package and publish preserving public access.

Validation: real canvas pointer events, sunlight pixel samples, deterministic actor simulations, existing action-completion QA. Crossing is intentionally allowed by the request, so collision assertions accept only pairs explicitly in crossing mode; furniture/bounds remain enforced.

Results: room-interaction-qa (10 checks), behavior-qa (all commands and interruption recovery, phone widths 360/390/430), and six-minute autonomous plus seven-cat traffic simulation passed. Independent review found no important defect; the minor third-touch rebase case was reproduced and fixed with a regression check. Also fixed exiting an already overlapping bowl clearance area, rather than allowing paths into furniture.
