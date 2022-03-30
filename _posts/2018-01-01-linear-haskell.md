---
title: "Linear Haskell: practical linearity in a higher-order polymorphic language"
excerpt: "Jean-Philippe Bernardy, Mathieu Boespflug, Ryan R. Newton, Simon Peyton Jones, Arnaud Spiwack <br><br> Published in <em>Principles of Programming Languages 2018 (POPL 2018)</em> by ACM
<br><br>
[View PDF](../assets/pdfs/linear-haskell.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/linear-haskell.bib){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /linear-haskell/
tags:
  - publication
  - haskell
---

# Abstract
Linear type systems have a long and storied history, but not a clear path forward to integrate with existing languages such as OCaml or Haskell. In this paper, we study a linear type system designed with two crucial properties in mind: backward-compatibility and code reuse across linear and non-linear users of a library. Only then can the benefits of linear types permeate conventional functional programming. Rather than bifurcate types into linear and non-linear counterparts, we instead attach linearity to function arrows. Linear functions can receive inputs from linearly-bound values, but can also operate over unrestricted, regular values.

To demonstrate the efficacy of our linear type system – both how easy it can be integrated into an existing language implementation and how streamlined it makes it to write programs with linear types – we implemented our type system in GHC, the leading Haskell compiler, and demonstrate two kinds of applications of linear types: mutable data with pure interfaces; and enforcing protocols in I/O-performing functions.

Here is my talk at Curry On, July 2018
{% include video id="t0mhvd3-60Y" provider="youtube" %}
