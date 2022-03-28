---
title: "Injective type families for Haskell"
excerpt: "Jan Stolarek, Richard Eisenberg, Simon Peyton Jones <br><br> Published in <em>ACM Haskell Symposium 2015</em> by ACM
<br><br>
[View PDF](../assets/pdfs/injective-type-families.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/injective-type-families.bib){: .btn .btn--info ..btn--large}"
permalink: /injective-type-families/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
Haskell, as implemented by the Glasgow Haskell Compiler (GHC), allows expressive type-level programming. The most popular type-level programming extension is ``TypeFamilies``, which allows users to write functions on types. Yet, using type functions can cripple type inference in certain situations. In particular, lack of injectivity in type functions means that GHC can never infer an instantiation of a type variable appearing only under type functions. In this paper, we describe a small modification to GHC that allows type functions to be annotated as injective. GHC naturally must check validity of the injectivity annotations. The algorithm to do so is surprisingly subtle. We prove soundness for a simplification of our algorithm, and state and prove a completeness property, though the algorithm is not fully complete. As much of our reasoning surrounds functions defined by a simple pattern-matching structure, we believe our results extend beyond just Haskell. We have implemented our solution on a branch of GHC and plan to make it available to regular users with the next stable release of the compiler.
