---
title: "Higher-order type-level programming in Haskell"
excerpt: "Csongor Kiss, Susan Eisenbach, Tony Field, Simon Peyton Jones. (2019). 
<br><br>
[Publication](https://www.microsoft.com/en-us/research/uploads/prod/2019/03/unsaturated-type-families-icfp-2019.pdf){: .btn .btn--info ..btn--large}
[BibTex](https://www.microsoft.com/en-us/research/publication/higher-order-type-level-programming-in-haskell/bibtex/){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg 
    overlay_filter: 0.5
permalink: /higher-order-type/
tags: 
  - haskell 
  - publication 
---

# Abstract 
Type family applications in Haskell must be fully saturated. This means that all type-level functions have to be first-order, leading to code that is both messy and longwinded. In this paper we detail an extension to GHC that removes this restriction. We augment Haskell’s existing type arrow, (->), with an  unmatchable arrow, (~>), that supports partial application of type families without compromising soundness. A soundness proof is provided.

We show how the techniques described can lead to substantial code-size reduction (circa 80%) i the type-level logic of commonly-used type-level libraries whilst simultaneously improving code quality and readability.


