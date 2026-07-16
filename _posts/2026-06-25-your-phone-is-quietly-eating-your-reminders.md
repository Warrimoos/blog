---
title: "Your phone is quietly eating your reminders"
subtitle: "Battery savers versus the 8pm tablet, and how we design around the fight"
date: 2026-06-25
categories: [Engineering]
tags: [android, notifications, reliability, treatmypet]
---

Here's something that surprises people: when an app schedules a reminder on your phone, the app doesn't ring the bell. The operating system does. The app hands the phone a note that says "please wake me at 8pm" and then goes to sleep, trusting.

Android, in particular, treats those notes as suggestions.

Modern phones are obsessed with battery life, and the biggest battery win is stopping apps from waking up. So Android ships with Doze mode, and Samsung and friends pile their own battery "optimisers" on top. These systems watch an app that hasn't been opened for a few days and decide, helpfully, that its notifications probably don't matter. Sometimes a reminder arrives twenty minutes late. Sometimes it doesn't arrive at all.

For a social media notification, fine, who cares. For a dog with epilepsy who gets phenobarbital at 8am and 8pm, that's not a delay, that's a missed dose with consequences.

I can't fix Android from a small studio in Port Macquarie. What I can do is design as if the phone is an unreliable colleague, because it is. TreatMyPet2 does three things about it.

First, every time you open the app it quietly re-schedules everything that's coming up. The note the phone might have binned gets rewritten. Opening the app daily, which people who give daily meds tend to do anyway, keeps the schedule fresh.

Second, the Today screen is the source of truth, not the notification. If the reminder never fires, the dose is still sitting there on the list, undone, slightly reproachful. The notification is a courtesy. The list is the record.

Third, for the medications where a miss genuinely matters, the app shows you how to exempt it from battery optimisation, buried where Android hides that switch (a different place on every brand, naturally). There's a short note under More that walks you through it.

None of this is glamorous engineering. There's no clever algorithm, just a refusal to trust the platform further than I can throw it, which given the platform is a server farm in Mountain View, is not far.

If you rely on any app for medication reminders, mine or anyone's, do two things tonight: check the app is allowed to send notifications, and take it off battery optimisation. Your phone will lose three minutes of standby time. Your 8pm tablet will show up on time.

That trade is worth it for most of the humans I know, and all of the dogs.
