---
title: "Regular, shape-polymorphic, parallel arrays in Haskell"
excerpt: "Gabriele Keller, Manuel Chakravarty, Roman Leshchinskiy, Simon Peyton Jones <br><br> To appear at <em>ICFP'10</em>
<br><br>
[View PDF](../assets/pdfs/parallel-arrays-in-haskell.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/parallel-arrays-in-haskell.bib){: .btn .btn--info ..btn--large}"
permalink: /parallel-arrays/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

We present a novel approach to regular, multi-dimensional arrays in Haskell. The main highlights of our approach are that it (1) is purely functional, (2) supports reuse through shape polymorphism, (3) avoids unnecessary intermediate structures rather than relying on subsequent loop fusion, and (4) supports transparent parallelisation. We show how to embed two forms of shape polymorphism into Haskell’s type system using type classes and type families. In particular, we discuss the generalisation of regular array transformations to arrays of higher rank, and introduce a type-safe specification of array slices. We discuss the runtime performance of our approach for three standard array algorithms. We achieve absolute performance comparable to handwritten C code. At the same time, our implementation scales well up to 8 processor cores.

* [Online tutorial about Repa](https://wiki.haskell.org/Numeric_Haskell:_A_Repa_Tutorial)
