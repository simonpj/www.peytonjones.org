---
title: "A quick look at impredicativity"
excerpt: "Alejandro Serrano, Jurriaan Hage, Simon Peyton Jones, Dimitrios Vytiniotis _International Conference on Functional Programming (ICFP'20)_ | August 2020"
header:
    overlay_image: /assets/images/spj-stock-header.jpg 
    overlay_filter: 0.5
permalink: /quick-look/
tags: 
  - publication 
---


# Abstract
Type inference for parametric polymorphism is wildly successful, but has always suffered from an embarrassing flaw: polymorphic types are themselves not first class. We present Quick Look, a practical, implemented, and deployable design for impredicative type inference. To demonstrate our claims, we have modified GHC, a production-quality Haskell compiler, to support impredicativity.  The changes required are modest, localised, and are fully compatible with GHC’s myriad other type system extensions.

{% include video id="EPGqzkEZWyw" provider="youtube" %}  
Here is a video of Simon giving a talk on the ideas in the paper

# Downloads
<!-- this H1 (denoted by the single octothorpe before the word 'Downloads') should remain unchanged. --> 
[Publication](/assets/pdf.pdf){: .btn .btn--info ..btn--large}
[BibTex](/assets/bibtex/bibfile.bib){: .btn .btn--info ..btn--large}
<!-- Both "publication" and "Bibtext" should remain unchanged. The links, however, should be adjusted... --> 
