---
title: "The app I had to build twice"
subtitle: "TreatMyPet2 exists because TreatMyPet taught me some expensive lessons"
date: 2026-06-21
categories: [Engineering]
tags: [treatmypet, rebuilds, mobile-development]
---

There's a "2" in TreatMyPet2 and I get asked about it. Not by many people, admittedly. But enough.

The short answer: the first TreatMyPet grew rings like a tree. It started as a medication reminder, then it got a health diary, then a seizure log, then insurance details, then vet visit notes, then a first-aid library, then calculators. Each addition made sense on its own. A client would mention something in a consult, I'd think "the app should do that", and three weekends later it did.

The result worked. It also had the floor plan of a house that's been renovated by four different owners. The navigation had corridors that went nowhere. Settings lived in two places. The code underneath was worse, because every feature had been bolted onto whatever was already there, and some of those bolts were load-bearing.

So late last year I did the thing you're never supposed to do: I started again.

Not from zero, to be fair. I'd built a small first-aid app earlier and its bones were good. Boring storage, dead-simple screens, native reminders that actually fired. TreatMyPet2 is built on that skeleton, and this time every feature had to argue its way in.

Some numbers that came out of those arguments. Five pets, maximum. If you have six pets you are running a shelter and you deserve proper software, not my app. One Today screen that answers the only question that matters at 7am, which is "who gets what, and have they had it". Refill tracking made the cut because running out of a heart tablet on a Sunday is a genuinely bad time. A carbon tracker made the cut because I find it interesting, and it's my app.

The seizure diary stayed. The health charts stayed. The first-aid guides stayed, because the whole point of them is that they work in a paddock with no reception.

What didn't survive was harder to spot: about thirty small screens, toggles and "flexible options" that let you configure your way into a mess. Nobody asked where they went.

If you're sitting on a version one that fights you every time you touch it, I can report from the other side that the rewrite is not always a trap. Sometimes it's just the renovation the house needed. You do have to be honest about which walls were actually holding the roof up.

[TreatMyPet2](https://warrimoo.net/apps/treatmypet.html) is in development now, Android first. The name keeps the "2" as a small monument to the lesson.
