---
title: "Join points in practice"
excerpt: "Simon Peyton Jones
<br><br>
Keynote talk, Haskell Symposium, October 2025
<br><br>
[Slides](../assets/ppts/join-points-haskell-symposium-2025.pptx){: .btn .btn--info ..btn--large}"
permalink: /join-points-hs/
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
tags:
  - publication
---

# Abstract
<!-- this H1 (denoted by the single octothorpe before the word 'Abstract') should remain unchanged. -->
  <!-- Note: Make sure to enter at least twice to create seperate lines for the page. -->

Eight years ago [Compiling without continuations](https://simon.peytonjones.org/compiling-without-continuations/) introduced the idea of
so-called *join points* as a powerful optimisation tool in a functional
language compiler. Since then join points have become more and more
deeply entwined in GHC’s optimisation passes; for example they are
treated specially by the Simplifier and its Occurrence Analyser, and a
dedicated pass called Exitification makes a join-point-specific
transformation

With the perspective of this experience, I am convinced that any
serious functional compiler should use join points (or something
equivalent): it’s a powerful and re-usable idea. Yet beyond the
initial paper, none of what we have learned has appeared in print. In
this talk I will share the lessons of the last eight years of using
join points in practice in GHC.

