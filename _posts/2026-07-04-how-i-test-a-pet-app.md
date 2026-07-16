---
title: "How I test a pet app"
subtitle: "Unit tests for the calendar maths, a demo family named Bella and Milo, and one very patient labrador"
date: 2026-07-04
categories: [Engineering]
tags: [testing, quality, treatmypet]
---

Medication software has a low tolerance for "mostly works". A social app that glitches loses a like. A meds app that glitches double-doses a cat. So testing is where an unreasonable share of TreatMyPet2's build time goes, and the approach has three layers of decreasing dignity.

The bottom layer is unit tests, and nearly all of them point at one file: the schedule engine. Dose scheduling looks trivial and is a bog of edge cases. Every N hours across a day boundary. Weekly on Tuesdays and Saturdays when the week starts mid-course. Monthly on the 31st in a month with 30 days. A course that ends today at the exact minute of the last dose. Daylight saving, twice a year, in both directions. Each of those has bitten me once and now lives in the test suite so it can never bite quietly again. Same treatment for the sync merge rules: the test files feed the engine deliberately horrible scenarios, two phones editing the same dose offline, a deletion racing an edit, and check nobody's tablet resurrects.

The middle layer is the demo family. Start the dev build with a flag and the app fills with sample data: Bella the labrador with her Apoquel and a suspicious weight trend, Milo the cat with his monthly spot-on. They exist so I can look at any screen, instantly, in a realistic state, without typing a test pet for the ninth time that day. Bella's refill count is deliberately set low so the refill warning is always on show. She has been four tablets from disaster for months now. She's coping well.

The top layer, scientifically the weakest and practically the most useful, is running the real app on my actual phone for my actual household. Dogfooding, in the rare case where the word is literal. The 8pm reminder fires while I'm cooking; do I mark it done with wet hands, one thumb, without looking? The refill alert appears; do I act on it or think "later" and forget, and if I forget, whose fault is that, mine or the design's? (The design's. It's always the design's.)

An embarrassing amount of the app has been redesigned because of that top layer. The tick buttons grew twice. The skip flow lost a confirmation step. The Today screen learned to put overdue items first because I kept scrolling past them.

The test pyramid people would say I have it upside down. Maybe. But the unit tests catch the lies in my logic, and the labrador catches the lies in my design, and the app needs both kinds of honesty.
