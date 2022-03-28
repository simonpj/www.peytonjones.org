---
title: "Multicore Garbage Collection with Local Heaps"
excerpt: "Simon Peyton Jones <br><br> Published in <em> ISMM '11: Proceedings of the 10th International Symposium on Memory Management </em> by ACM <br><br>
[View PDF](../assets/pdfs/local-gc.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/multicore-garbage-collection.bib){: .btn .btn--info ..btn--large}"
permalink: /multicore-garbage/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

In a parallel, shared-memory, language with a garbage collected heap, it is desirable for each processor to perform minor garbage collections independently. Although obvious, it is difficult to make this idea pay off in practice, especially in languages where mutation is common. We present several techniques that substantially improve the state of the art. We describe these techniques in the context of a full-scale implementation of Haskell, and demonstrate that our local-heap collector substantially improves scaling, peak performance, and robustness.
