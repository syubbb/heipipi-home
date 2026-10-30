# Black cat random actions

The two source clips uploaded on 2026-10-27 are used as whole-cat animations:
- `gemini_generated_video_5FDBF2C3.mp4`: seated alternating forepaw kneading (replaces the earlier standing clip).
- `gemini_generated_video_089FCA53.mp4`: standing-to-loaf transition.

Loaf frames live in `dist/assets/black-random`; replacement kneading frames live in `dist/assets/black-knead-v2`, sampled at 10 fps with a shared crop and floor anchor per clip. Only holes within the head region are filled during chroma removal, preserving eyes while removing the green gaps between paws. Standing height is normalized to 110 room units for both clips, so the loaf naturally lowers without scaling the animal smaller.

Healthy autonomous choices use the existing varied-choice buckets: 10% kneading and 10% floor loaf. Urgent litter, thirst, energy, hunger, affection and play needs keep precedence. Kneading walks to the existing toast approach point; the paws render over its center. It lasts 12–18 seconds, then returns to normal toast rest for 8–14 seconds, with a 35–55 second cooldown. Floor loaf walks to a random clear location away from food, water, furniture, other cats and urine, lasts 14–24 seconds, and has a 35–55 second cooldown. Its transition plays once, then holds with a subtle breath. A new puddle at its location makes the cat leave.

Both actions use the ordinary interrupt path, so manual movement, play, gathering and lifting cancel the animation and arrival callbacks immediately. No controls or room layout are changed.

Validation: `tests/black-random-actions.cjs` covers actual path arrival, animation frame progression, settled loaf hold, safe destination selection, cancellation and urgent-need priority. Existing broader tests `socks-directions.cjs` and `socks-look-pause.cjs` fail identically at the preceding production commit; the other 26 tests, including the new action test, pass.

Autonomous roaming now ends in the front-facing `look` pose for 2–5 seconds, with the status indicating that the cat is looking toward the viewer. Both optional video activities share the same cooldown range.
