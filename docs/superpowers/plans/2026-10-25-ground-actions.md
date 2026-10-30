# Ground actions and temporary puddles implementation plan

Goal: Add the supplied floor movements to Socks and Dongdong, and occasional Socks marking with a five-second obstacle that every cat avoids.
Architecture: Keep the existing canvas actors and traffic priority. Decode and segment the supplied video into transparent frames, add a floor-rest state, and share one ellipse-obstacle predicate between all route planning, steps, and drops. No changes to other cats' poses or the fixed room.

- [x] Extract both videos and inspect transparent clips, anchor to the floor at the walking scale without shape distortion.
- [x] Add regression tests for both floor clips and transitions, five-second lifetime, all actors rerouting, pass-through overrides, and safe drops.
- [x] Implement occasional rest and Socks marking (roughly once every 60–110 seconds), cancelable by gathering, lifting and yielding. Mark only empty floor away from bowls, litter and gathering row; create the puddle behind Socks without placing any actor inside it.
- [x] Render puddles below room objects/cats and ensure dynamic obstacles are checked on both endpoints and swept movement. Clear them after exactly five simulation seconds.
- [x] Run the complete existing test set, new real route simulations, inspect browser preview, then package and publish through Sites.


Additional requests: all five cats display a disgust reaction when passing urine; new companions use the existing mood icons; two round corrugated pads sit in the visible upper-right floor and use separate reservations. Reservations release on yielding, gathering and lifting. Regression coverage includes stepping away after pad release, swept puddle collision, real lift/drop over urine, randomized five-cat gathering, and floor-rest cancellation.
