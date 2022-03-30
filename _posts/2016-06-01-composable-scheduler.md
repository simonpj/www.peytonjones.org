---
title: "Composable Scheduler Activations for Haskell"
excerpt: "KC Sivaramakrishnan, Tim Harris, Simon Marlow, Simon Peyton Jones <br><br> Published in <em>Journal of Functional Programming</em>
<br><br>
[View PDF](../assets/pdfs/composable-scheduler.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/composable-scheduler.bib){: .btn .btn--info ..btn--large}"
permalink: /composable-scheduler/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
The runtime for a modern, concurrent, garbage collected language like Haskell is like an operating system: sophisticated, complex, performant, but alas very hard to change. If more of the runtime system were in Haskell it would become far more modular and malleable. In this paper we describe a new concurrency design that allows the scheduler for concurrent and parallel programs to be written in Haskell. In particular, this substrate allows new primitives to be constructed _modularly_, obviating the need to re-engineer or reason about the interactions with GHC’s existing concurrency support.

* [Earlier conference version](../assets/pdfs/composable-scheduler-earlier.pdf), rejected by the 2013 Haskell Symposium.
* [Code on GitHub](https://github.com/ghc/ghc/tree/ghc-lwc2)
