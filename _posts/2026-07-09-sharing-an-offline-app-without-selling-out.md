---
title: "Sharing an offline app without selling out"
subtitle: "Adding household sync to a local-first app, reluctantly and carefully"
date: 2026-07-09
categories: [Engineering]
tags: [local-first, firebase, sync, privacy]
---

I've spent two posts on this blog bragging that our apps don't need the internet. So naturally, the most requested feature for TreatMyPet2 is sync.

The request is completely fair. Two humans share one dog. If Sarah gives the morning insulin and marks it done on her phone, Tom's phone should know, or Tom gives it again. "Double-dosed the diabetic cat because the app was too private" is not the failure story I want told about my software.

The lazy fix is the industry default: make everyone create an account, move the data to a server, and the phones become windows onto my database. Sync solved. Also everything I claimed to stand for, gone. Your pet's records would now live on my infrastructure, my bill, my breach when it happens.

So household sharing in TreatMyPet2 (and family sharing in Treat the Babs) is being built the stubborn way instead.

The app stays local-first. Not signed in, it's exactly what it always was: everything on the phone, nothing anywhere else. Sharing is a switch you flip, and flipping it means signing in with Google or Apple and inviting specific people. From then on the invited phones exchange updates through Firebase, and only with each other. Switch it off and you're back to a fully offline app. The default state is, and stays, private.

The engineering is mostly about conflicts, because two phones will absolutely edit the same thing while one of them is in a dead spot at the beach. The merge rules are deliberately boring: newest edit wins per record, deletions carry tombstones so they don't resurrect, and dose logs are append-only so nothing ever "un-gives" a tablet. Roughly:

```
merge(local, remote):
  keep whichever record was edited latest
  a deletion beats an older edit
  dose logs: union of both, never overwrite
```

Boring rules are testable rules. The merge engine has a proper unit test suite and gets fed the ugliest scenarios I can think of, because the whole feature only earns its place if Sarah and Tom can trust the tick marks more than they trust each other's memory.

Is this more work than a normal backend? Enormously. There are days I stare at the sync tests and think about how nice it must be to just have a server and an excuse. Then I remember the point: the family's data belongs to the family. When the feature ships, it'll ship with that intact.
