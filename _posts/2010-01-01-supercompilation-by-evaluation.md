---
title: "Supercompilation by evaluation"
excerpt: "Max Bolingbroke, Simon Peyton Jones <br><br> Haskell Symposium
<br><br>
[View PDF](../assets/pdfs/supercompilation-by-evaluation.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/supercompilation-by-evaluation.bib){: .btn .btn--info ..btn--large}"
permalink: /PERMALINK-HERE/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Supercompilation is a technique due to Turchin which allows for the construction of program optimisers that are both simple and extremely powerful. Supercompilation is capable of achieving transformations such as deforestation, function specialisation and constructor specialisation. Inspired by Mitchell’s promising results (ICFP’10), we show how the call-by-need supercompilation algorithm can be recast to be based explicitly on an evaluator, and in the process extend it to deal with recursive let-expressions.
