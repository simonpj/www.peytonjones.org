---
title: "Backpack to work: towards practical mixin linking for Haskell"
excerpt: "Simon Peyton Jones, Edward Yang, Scott Kilpatrick, Derek Dreyer <br><br> In submission
<br><br>
[View PDF](../assets/pdfs/backpack-to-work.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/backpack-to-work.bib){: .btn .btn--info ..btn--large}"
permalink: /backpack-to-work/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
In this paper, we describe an evolution of the Backpack mixin package system which respects the division between package manager and compiler in the Haskell ecosystem: Backpack. Programs written in Backpack are processed in two phases: first, a mixin linking phase which computes a “wiring diagram” of components indifferent to the actual Haskell source code, and then a typechecking phase on the output of mixin linking which processes Haskell source. This is not merely a paper design: our architecture was principally motivated by our experiences implementing Backpack in the GHC compiler and the Cabal package system.
