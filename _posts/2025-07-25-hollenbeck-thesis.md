---
title: "Inlining in the Glasgow Haskell Compiler: empirical investigation and improvement"
excerpt: "Celeste Hollenbeck
<br><br>
PhD thesis, Edinburgh University, July 2025.
<br><br>
[View PDF](../assets/pdfs/hollenbeck-thesis-2025.pdf){: .btn .btn--info ..btn--large}"
permalink: /hollenbeck-inlining/
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
tags:
  - publication
---

# Abstract
<!-- this H1 (denoted by the single octothorpe before the word 'Abstract') should remain unchanged. -->
  <!-- Note: Make sure to enter at least twice to create seperate lines for the page. -->

Inlining has been claimed to be the single most important optimization in
Haskell, and also the optimization receiving the most attention. It is also
considered one of the hardest optimizations to get right. If done poorly, it may
cause code bloat, cache misses, and register spilling; yet if done well, it can
provide orders of magnitude better performance in terms of run time and code
size.

Despite its importance, the Glasgow Haskell Compiler’s inliner has not undergone
significant change in decades. This thesis explores the decision space of GHC’s
inliner; presents potential approaches to re-imagining the inliner, along with
data and discussion for why they do not work; and additionally provides a
conceptually simple analysis which guides inlining decisions at the function
declaration site by advising the placement of compiler pragmas in source
code. The decision space exploration conducts an empirical investigation of the
search space of GHC’s inlining decisions as it pertains to the randomization of
the magic numbers—or handcoded constant integers—in the inlining heuristic.

We demonstrate that randomizing the magic numbers produces some speedup over
default GHC about half of the time, showing ample room for improvement. Then
using iterative search, we produce four configurations into which we can cluster
Haskell packages to produce a 26% mean speedup over 10 benchmark
packages. Following search space exploration, we investigate three machine
learning models to predict inlining decisions: a genetic algorithm and neural
networks from within the middle of the compiler, and graph neural networks to
place pragmas at the source-code level. Our investigation reveals that although
we can train the models with a high degree of accuracy, their predictions still
fail to produce significant performance results when used in practice.

Finally, we devise a technique to place pragmas along hot call-chains—or
complete, overapproximated chains of functions connected to profiled hot
spots—which yields a 10% runtime speedup when combined with existing
developer-placed pragmas, and 9% speedup without existing pragmas. This approach
uses packages’ abstract syntax trees to approximate control flow in quadratic
time, whereas a conventional context-insensitive flow analysis would be cubic.

<em>Note: I'm posting Celeste's thesis here because I worked with her while
she was a PhD student, although I was not her advisor.  Plus, it directly focuses on
an important and under-studied aspect of GHC!</em>
