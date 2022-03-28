---
title: "Refinement Types for Haskell"
excerpt: "Niki Vazou, Eric L. Seidel, Ranjit Jhala, Dimitrios Vytiniotis, Simon Peyton Jones <br><br> Published in <em>Proceedings of the 19th ACM SIGPLAN International Conference on Functional Programming</em> by ACM
<br><br>
[View PDF](../assets/pdfs/refinement-types-for-haskell.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/refinement-types-for-haskell.bib){: .btn .btn--info ..btn--large}"
permalink: /refinement-types-for-haskell/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
SMT-based checking of refinement types for call-by-value languages is a well-studied subject. Unfortunately, the classical translation of refinement types to verification conditions is unsound under lazy evaluation. When checking an expression, such systems implicitly assume that all the free variables in the expression are bound to values. This property is trivially guaranteed by eager, but does not hold under lazy, evaluation. Thus, to be sound and precise, a refinement type system for Haskell and the corresponding verification conditions must take into account which subset of binders actually reduces to values. We present a stratified type system that labels binders as potentially diverging or not, and that (circularly) uses refinement types to verify the labeling. We have implemented our system in LIQUIDHASKELL and present an experimental evaluation of our approach on more than 10,000 lines of widely used Haskell libraries. We show that LIQUIDHASKELL is able to prove 96% of all recursive functions terminating, while requiring a modest 1.7 lines of termination-annotations per 100 lines of code.
