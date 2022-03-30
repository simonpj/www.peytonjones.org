---
title: "A Monad for Deterministic Parallelism"
excerpt: "Simon Peyton Jones <br><br> Published in <em> Haskell '11: Proceedings of the Fourth ACM SIGPLAN Symposium on Haskell </em> by ACM <br><br>
[View PDF](../assets/pdfs/monad-par.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/deterministic-parallelism.bib){: .btn .btn--info ..btn--large}"
permalink: /deterministic-parallelism/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

We present a new programming model for deterministic parallel computation in a pure functional language. The model is monadic and has explicit granularity, but allows dynamic construction of dataflow networks that are scheduled at runtime, while remaining deterministic and pure. The implementation is based on monadic concurrency, which has until now only been used to simulate concurrency in functional languages, rather than to provide parallelism. We present the API with its semantics, and argue that parallel execution is deterministic. Furthermore, we present a complete work-stealing scheduler implemented as a Haskell library, and we show that it performs at least as well as the existing parallel programming models in Haskell.
