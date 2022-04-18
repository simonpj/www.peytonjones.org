---
title: "Higher-order type-level programming in Haskell"
excerpt: "Csongor Kiss, Susan Eisenbach, Tony Field, Simon Peyton Jones
<br><br>
Published in <em>International Conference on Functional Programming (ICFP'19)</em> by ACM <br><br>
[View PDF](..assets/pdfs/higher-order-type.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/higher-order-type.bib){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /higher-order-type/
tags:
  - haskell 
  - publication
---

# Abstract
Type family applications in Haskell must be fully saturated. This means that all type-level functions have to be first-order, leading to code that is both messy and longwinded. In this paper we detail an extension to GHC that removes this restriction. We augment Haskell’s existing type arrow, (->), with an  _unmatchable arrow_, (~>), that supports partial application of type families without compromising soundness. A soundness proof is provided.

We show how the techniques described can lead to substantial code-size reduction (circa 80%) i the type-level logic of commonly-used type-level libraries whilst simultaneously improving code quality and readability.
