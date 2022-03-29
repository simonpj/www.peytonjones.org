---
title: "Equality proofs and deferred type errors"
excerpt: "Dimitrios Vytiniotis, Simon Peyton Jones, Jose Pedro Magalhaes <br><br> Published in <em>International Conference on Functional Programming (ICFP'12)</em> by ACM
<br><br>
[View PDF](../assets/pdfs/equality-proofs-and-deferred-type-errors.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/equality-proofs-and-deferred-type-errors.bib){: .btn .btn--info ..btn--large}"
permalink: /equality-proofs/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

The Glasgow Haskell Compiler is an optimizing compiler that expresses and manipulates first-class equality proofs in its intermediate language. We describe a simple, elegant technique that exploits these equality proofs to support deferred type errors. The technique requires us to treat equality proofs as possibly-divergent terms; we show how to do so without losing either soundness or the zero-overhead cost model that the programmer expects.
