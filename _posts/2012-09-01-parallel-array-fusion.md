---
title: "Guiding parallel array fusion with index types"
excerpt: "Ben Lippmeier, Manuel Chakravarty, Gabriele Keller, Simon Peyton Jones <br><br> Published in <em>Haskell Symposium, Copenhagen</em> by ACM
<br><br>
[View PDF](../assets/pdfs/guiding-parallel-array-fusion-with-index-types.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/guiding-parallel-array-fusion-with-index-types.bib){: .btn .btn--info ..btn--large}"
permalink: /parallel-array-fusion/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

We present a refined approach to parallel array fusion that uses indexed types to specify the internal representation of each array. Our approach aids the client programmer in reasoning about the performance of their program in terms of the source code. It also makes the intermediate code easier to transform at compile-time, resulting in faster compilation and more reliable runtimes. We demonstrate how our new approach improves both the clarity and performance of several end-user written programs, including a fluid flow solver and an interpolator for volumetric data.
