---
title: "Designing for someone who forgets the app exists"
subtitle: "Dementia-friendly design decisions from building Treat the Babs"
date: 2026-07-02
categories: [Engineering]
tags: [treat-the-babs, design, accessibility, dementia]
---

Most app design assumes the user remembers your app. Remembers installing it, remembers what the icons mean, remembers where the back button went. Design for someone with early dementia and every one of those assumptions falls over.

Building Treat the Babs has been a course in subtraction. A few of the decisions, and the reasoning:

**Two people, maximum.** The app manages meds for one or two elderly people, and refuses to do more. Partly that's honest scoping (it's for a household, not a nursing home). But mostly it's navigation: with two profiles the switcher is one big button with a name on it. A maze with one junction is barely a maze.

**Four tabs, no drawers.** Today, Meds, Health, More. Nothing hides behind a hamburger menu, because a hidden menu is a menu that doesn't exist. Everything important is one tap from anywhere, and the tab you're on is loudly obvious.

**The list forgives.** Miss a morning dose and plenty of apps go red, as if shame were a clinical intervention. The Babs get a soft "catch up on today" instead. The record stays accurate, the tone stays kind. People already feel bad about forgetting; the software doesn't need to pile on.

**Big text is the default, not a setting.** If large print lives in an accessibility menu, the person who needs it has to find a menu, which is the exact thing they struggle to do. So the whole app is set in large type with strong contrast, tuned until it passed the squint test from across a kitchen.

**Words next to icons, always.** A pill glyph is obvious to you and me. To an 84-year-old it's a mystery bean. Every icon in the app has its name printed underneath, which costs a few pixels and removes a whole category of confusion.

**One cheerful interruption.** When something's due, a little illustrated granny pops up and says "Just a heads up, something's due." My tester feedback on her has ranged from delighted to deeply delighted. She stays.

The trick nobody tells you: this app has two users at once. The Bab, who needs calm and clarity, and the carer, who needs detail, history and the ability to fix a wrongly-entered dose from another room. Most screens are really two designs stacked: simple on the surface, thorough one tap down. Getting that split right is the actual work; the big fonts are just the visible part.

None of this is original. It's mostly what accessibility people have said for decades, taken literally for once. Turns out when you design for someone who forgets the app exists, you accidentally build the version everyone finds easier. My own thumbs are enjoying the big buttons more than I planned to admit.
