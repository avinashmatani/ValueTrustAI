---
title: "How we think about AI projects"
date: "2026-08-16"
description: "Most AI projects don't fail because the technology isn't ready. They fail because the problem isn't well-defined. Here's how we approach it differently."
---

Most AI projects don't fail because the technology isn't ready. They fail because the problem isn't well-defined, the data isn't clean, or the success criteria were never agreed on. After delivering AI across dozens of organisations, we've developed a clear point of view on what separates projects that ship from projects that stall.

## Start with the problem, not the model

The single biggest mistake we see is organisations beginning with a technology choice — "we want to build a chatbot" or "we want to use GPT-4" — rather than a business problem. The question we always ask first is: what decision or action do you want AI to improve, and how will you know if it has? That question sounds simple. Getting a clear, agreed answer usually takes two or three conversations.

Once the problem is well-defined, the right technology often becomes obvious. Sometimes that's a large language model. Sometimes it's a much simpler classifier trained on your own data. Sometimes the answer is that AI isn't the right tool at all — and that's a conversation worth having before you've spent three months building something.

## Prototype fast, but prototype the right thing

We build prototypes quickly — typically within two to four weeks. But the prototype we build is always scoped to the riskiest assumption in the project, not the easiest thing to demo. If the core risk is whether your data is clean enough to get reliable outputs, we build a data pipeline prototype. If it's whether users will trust and adopt the tool, we build a front-end prototype and put it in front of real users. Speed matters, but only if you're validating the thing most likely to kill the project.

## Production is where the real work starts

Most AI proofs of concept look impressive. Far fewer make it to production in a form that's reliable, maintainable, and actually used. The gap is almost always the same things: insufficient testing, no monitoring, no fallback behaviour when the model is wrong, and no plan for what happens when the underlying model or API changes. We design for production from day one — because a prototype that can't become a product isn't worth building.
