---
title: "Improving supercompilation: tag-bags, rollback, speculation, normalisation, and generalisation"
excerpt: "Max Bolingbroke, Simon Peyton Jones <br><br> <em>ICFP</em>
<br><br>
[View PDF](../assets/pdfs/design-space.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/improving-supercompilation.bib){: .btn .btn--info ..btn--large}"
permalink: /improving-supercompilation/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Supercompilation is a technique due to Turchin Supercompilation is a powerful technique for program optimisation and theorem proving. In this paper we describe and evaluate three improvements to the Cambridge Haskell Supercompiler (CHSC). We reduce supercompiled program size by the use of a weak normaliser and aggressive rollback, and we improve the performance of supercompiled programs by heap speculation and generalisation. Our generalisation method is simpler than those in the literature, and is better at generalising computations involving primitive operations such as those on machine integers. We also provide the first comprehensive account of the tag-bag termination mechanism.
