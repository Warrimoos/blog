---
title: "Why We Build Offline-First Apps"
subtitle: "In a world obsessed with cloud connectivity, here's why we go the other way"
date: 2026-06-18
categories: [Engineering]
tags: [offline-first, privacy, mobile-development, treatmypet]
---

Every app wants to be connected. Every service wants your data in their cloud. Every onboarding flow starts with "create an account."

At Warrimoo, we build offline-first. Here's why, and what we've learned from the experience.

## The case for offline-first

When we started building [TreatMyPet](https://warrimoo.net/apps/treatmypet.html), we made a deliberate choice: the app would work entirely on-device, with no account required, no cloud sync, and no data leaving the user's phone.

This wasn't a technical limitation — it was a design philosophy driven by three beliefs:

### 1. Privacy by architecture, not policy

A privacy policy is a promise. An offline-first architecture is a guarantee.

When your pet's health data never leaves your device, there's nothing to breach, nothing to sell, and nothing to subpoena. You don't need to trust us with your data because we never have it in the first place.

### 2. Reliability in the real world

Pet emergencies don't wait for good reception. You might need your pet's medication history at a rural vet clinic, in a car on the way to the emergency hospital, or at a property with no mobile coverage.

Offline-first means the app works everywhere, every time, instantly. No loading spinners, no "connection lost" banners, no degraded experience.

### 3. Respect for the user

Not every app needs an account. Not every feature needs analytics. Not every interaction needs to be tracked, measured, and optimised.

Sometimes the most respectful thing you can do for your users is to simply give them a tool that works and then get out of the way.

## The trade-offs

Let's be honest about what you give up:

**No cross-device sync** — your data lives on one device. We mitigate this with local backup and export features, but it's a genuine limitation.

**No collaborative features** — without a server, there's no way for two users to share data in real-time. For a personal pet care app this is fine; for other products it might be a dealbreaker.

**No server-side intelligence** — we can't run analytics, personalise recommendations, or improve the product based on aggregate usage data. We have to get the product right through design and user feedback, not A/B testing.

**Recovery is harder** — if you lose your phone without a backup, your data is gone. Cloud-synced apps have an advantage here.

## What we've learned

Building offline-first forces you to think differently about data architecture. A few lessons:

**Design your data model carefully** — you can't easily migrate schemas when the database lives on millions of individual devices. Get it right early, and design for forwards compatibility.

**Give users control over their data** — export, backup, and import aren't afterthoughts. They're core features. Your users should always be able to get their data out in a useful format.

**Performance is a feature** — when everything is local, the app can be genuinely instant. No network latency, no loading states, no optimistic UI tricks. This sets a user expectation that you need to maintain.

**Test on real devices** — simulators don't tell you what a three-year-old phone with 2GB of RAM and a fragmented filesystem will do with your local database.

## Is offline-first right for your app?

It depends on your product and your values. But I'd encourage more developers to at least consider it. The cloud-first default isn't always the right choice, and the trade-offs of offline-first are often less severe than people assume.

Your users will appreciate an app that just works — no account, no internet, no excuses.
