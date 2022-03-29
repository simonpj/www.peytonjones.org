---
title: "Type inference as constraint solving: how GHC’s type inference engine actually works"
excerpt: "Simon Peyton Jones <br><br> Keynote talk for Zurihac
<br><br>
[View Slides](../assets/ppts/type-inference.pptx){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/type-inference.bib){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /type-inference/
tags:  
  - publication
  - haskell
  - keynote
---

# Abstract
The Haskell compiler GHC includes a type inference engine for a rather sophisticated type system.  You might worry that a complicated type system leads to a very complicated type inference engine.   You’d be right, but we have learned a lot about how to structure type inference so that the complexity does not get out of control.

In this talk, given at [Zurihac 2019](https://zfoh.ch/zurihac2019/), I explain how GHC’s type inference engine actually works by first generating constraints and then solving them.

Here are
- [Video of my talk at ZuriHac 2019](https://www.youtube.com/watch?v=x3evzO8O9e8), sadly missing the end part of the talk
- [Video of the same talk at Lambdale 2019](https://www.youtube.com/watch?v=-TJGhGa04F8) (in a pub!)
- [Slides from the talk](https://www.microsoft.com/en-us/research/uploads/prod/2019/08/Type-inference-as-constraint-solving-Jun-19.pptx)
