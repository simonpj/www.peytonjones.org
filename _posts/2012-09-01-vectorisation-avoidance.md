---
title: "Vectorisation avoidance"
excerpt: "Gabriele Keller, Manuel Chakravarty, Roman Leshchinskiy, Ben Lippmeier, Simon Peyton Jones <br><br> Published in <em>Haskell Symposium</em> by ACM
<br><br>
[View PDF](../assets/pdfs/vectorisation-avoidance.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/vectorisation-avoidance.bib){: .btn .btn--info ..btn--large}"
permalink: /vectorisation-avoidance/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Flattening nested parallelism is a vectorising code transform that converts irregular nested parallelism into flat data parallelism. Although the result has good asymptotic performance, flattening thoroughly restructures the code. Many intermediate data structures and traversals are introduced, which may or may not be eliminated by subsequent optimisation. We present a novel program analysis to identify parts of the program where flattening would only introduce overhead, without appropriate gain. We present empirical evidence that avoiding vectorisation in these cases leads to more efficient programs than if we had applied vectorisation and then relied on array fusion to eliminate intermediates from the resulting code.
