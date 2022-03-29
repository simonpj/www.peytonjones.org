---
title: "Efficient Parallel Stencil Convolution in Haskell"
excerpt: "Simon Peyton Jones, Ben Lippmeier, Gabriele Keller <br><br> Submitted to <em>ICFP 2011</em>
<br><br>
[View PDF](../assets/pdfs/stencil.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/stencil-convolution.bib){: .btn .btn--info ..btn--large}"
permalink: /stencil-convolution/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Stencil convolution is a fundamental building block of many scientific and image processing algorithms. We present a declarative approach to writing such convolutions in Haskell that is both efficient at runtime and implicitly parallel. To achieve this we extend our prior work on the Repa array library with two new features: partitioned and cursored arrays. Combined with careful management of the interaction between GHC and its back-end code generator LLVM, we achieve performance comparable to the standard OpenCV library.
