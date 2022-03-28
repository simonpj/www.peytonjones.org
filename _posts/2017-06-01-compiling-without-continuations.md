---
title: "Compiling without continuations"
excerpt: "Luke Maurer, Zena Ariola, Paul Downen, Simon Peyton Jones <br><br> Published in <em>ACM Conference on Programming Languages Design and Implementation (PLDI'17)</em> by ACM
<br><br>
[View PDF](../assets/pdfs/compiling-without-continuations.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/compiling-without-continuations.bib){: .btn .btn--info ..btn--large}"
permalink: /compiling-without-continuations/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Many fields of study in compilers give rise to the concept of  a _join point_ — a place where different execution paths come together.   While they have often been treated by representing them as functions or  continuations, we believe it is time to study them in their own right. We show  that adding them to a direct-style functional intermediate language allows new optimizations to be performed, including a functional version of  loop-invariant code motion. Finally, we report on recent work on the Glasgow  Haskell Compiler which added join points to the Core language.
