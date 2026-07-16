---
title: "What the consult room taught me about software"
subtitle: "Ten-minute appointments are a masterclass in interface design, if you squint"
date: 2026-06-23
categories: [Veterinary]
tags: [design, veterinary, treatmypet]
---

Before I wrote apps I took histories. Thousands of them. A history is the structured interview at the start of a consult: what's wrong, since when, eating or not, drinking more or less, any meds on board. Done well it takes four minutes and finds the problem's outline before hands ever touch the patient.

It turns out a decade of that is decent training for building software, in ways I didn't expect.

The first lesson is that people under stress cannot process prose. When an owner is worried about their dog, I don't say "administer one tablet twice daily with food, monitoring for gastrointestinal upset". I say: one tablet, morning and night, with dinner, ring me if he vomits. Same information, shaped for a brain that's busy being scared. TreatMyPet2's dose cards are written the second way. Name, amount, time, "with food" as a plain little flag. Nobody using a meds app at 7am wants sentences.

The second lesson is that checklists beat memory, every time, for everyone. Surgeons figured this out, then pilots, then eventually the rest of us. A consult follows the same loop for a reason: skip the "any other pets at home?" question once and you'll miss the kennel cough context once, and once is enough. The Today screen is that checklist made visible. Not because owners are forgetful, but because everyone is, including the vet who designed it.

The third one took longer to sink in: the order you ask matters more than the questions. In a history you go broad to narrow, easy to hard. Appetite before biopsies. The add-a-pet and add-a-medication flows in the app do the same walk. Name first, because it's easy and it makes the record feel real. The fiddly schedule stuff comes last, once you're invested.

And the last lesson is the one I'd tattoo somewhere if I were the type. At the end of every consult you say the plan back in one sentence, because whatever was said in the middle, the sentence is what survives the car trip home. Software needs the same discipline. After all the wizards and options, the app should be able to say: Bella gets Apoquel at 8 and 8, with food, twelve tablets left. If it can't compress to that, the design isn't finished.

None of this is in a design textbook, or maybe it all is and vet school was just the expensive way to learn it. Either way, when people ask why a vet is writing software, this is most of the answer. The consult room is a usability lab where the test users have claws.
