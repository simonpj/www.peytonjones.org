---
title: "Provably Correct, Asymptotically Efficient, Higher-Order Reverse-Mode Automatic Differentiation"
permalink: /provably-correct/
excerpt: "In this paper, we give a simple and efficient implementation of reverse-mode automatic differentiation, which both extends easily to higher-order functions, and has run time and memory consumption linear in the run time of the original program..."
header:
  overlay_image: /assets/images/spj-stock-header.jpg 
  overlay_filter: 0.5
  actions:
    - label: "Download Publication"
      url: "/assets/pdfs/higher-order-ad.pdf"
 actions:
    - label: "Download BibTex"
      url: "/assets/bibtex/provably-correct.bib"
---
Faustyna Krawiec, Neel Krishnaswami, Simon Peyton Jones, Tom Ellis, Andrew Fitzgibbon, Richard Eisenberg
_[POPL 2022](https://popl22.sigplan.org)_ | August 2021

{% include video id="EPGqzkEZWyw" provider="youtube" %}

This keynote by Simon Peyton Jones was recorded at Haskell eXchange 2021 on 16 November 2021: Automatic differentiation is all the rage these days, largely because it is a key enabler for machine learning. But reverse-mode AD (the important kind) is a bit mind bending, and becomes much more so if you want reverse-mode AD for higher order programs (i.e. the kind we love). In this talk Simon Peyton Jones explains what AD is, and how we can do it for higher order programs, using a series of simple steps that take us a simple-and-obviously-correct version to a weird-but-very-efficient one. At the end of the road we’ll find the Kmett/Pearlmuttter/Siskind ‘ad’ library in Hackage… but hopefully we’ll see it with new eyes.

## Downloads

[Publication](/assets/pdfs/higher-order-ad.pdf){: .btn .btn--info ..btn--large}
[BibTex](/assets/bibtex/provably-correct.bib){: .btn .btn--info ..btn--large}
