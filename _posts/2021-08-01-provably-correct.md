---
title: "Provably Correct, Asymptotically Efficient, Higher-Order Reverse-Mode Automatic Differentiation"
excerpt: "Faustyna Krawiec, Neel Krishnaswami, Simon Peyton Jones, Tom Ellis, Andrew Fitzgibbon, Richard Eisenberg. (2021). _[POPL 2022.](https://popl22.sigplan.org)_"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /provably-correct/
tags: 
  - publication 
---
<!-- this H1 (denoted by the single octothorpe before the word 'Downloads') should remain unchanged. --> 
[Publication](/assets/pdfs/higher-order-ad.pdf){: .btn .btn--info ..btn--x-large}
[BibTex](/assets/bibtex/provably-correct.bib){: .btn .btn--info ..btn--x-large}
<!-- Both "publication" and "Bibtext" should remain unchanged. The links, however, should be adjusted... -->

# Abstract

In this paper, we give a simple and efficient implementation of reverse-mode automatic differentiation, which both extends easily to higher-order functions, and has run time and memory consumption linear in the run time of the original program. In addition to a formal description of the translation, we also describe an implementation of this algorithm, and prove its correctness by means of a logical relations argument.

{% include video id="EPGqzkEZWyw" provider="youtube" %}

This keynote by Simon Peyton Jones was recorded at Haskell eXchange 2021 on 16 November 2021: Automatic differentiation is all the rage these days, largely because it is a key enabler for machine learning. But reverse-mode AD (the important kind) is a bit mind bending, and becomes much more so if you want reverse-mode AD for higher order programs (i.e. the kind we love). In this talk Simon Peyton Jones explains what AD is, and how we can do it for higher order programs, using a series of simple steps that take us a simple-and-obviously-correct version to a weird-but-very-efficient one. At the end of the road we’ll find the Kmett/Pearlmuttter/Siskind ‘ad’ library in Hackage… but hopefully we’ll see it with new eyes.


