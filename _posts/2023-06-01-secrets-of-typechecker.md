---
title: "Secrets of the GHC Typechecker in 100 Type Declarations"
excerpt: "Simon Peyton Jones"<br><br>
Video of talk at the GHC Contributors Workshop, June 2023
<br><br>
[Video](https://www.youtube.com/watch?v=kyI9fjtgN7w){: .btn .btn--info ..btn--large}
[Slides](https://haskell.foundation/assets/other/Simon%20Peyton%20Jones%20-%202023-06-08%20-%20Type%20inference%20in%20GHC%20Jun%2023.pdf){: .btn .btn--info ..btn--large}
permalink: /secrets-of-typechecker/
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
tags:
  - publication
---

# Abstract
<!-- this H1 (denoted by the single octothorpe before the word 'Abstract') should remain unchanged. -->
  <!-- Note: Make sure to enter at least twice to create seperate lines for the page. -->

Haskell is a big language, so GHC's type inference engine is also big: it
consists of 50,000 lines of Haskell, and another 42,000 lines of comments.

In this talk I give an overview of how it works, including
* A sketch of how Trees That Grow is applied to GHC
* How *elaboration* works: as well as checking for type-correctness, the type inference engine
  must produces an elaborated program, with type and dictionary abstractions and applications.
* The idea of separating *generating constraints* from *solving constraints*, including
  the key idea of *implication constraints*.
* How *level numbers* work.

This talk is part of the [2023 GHC Contributors Workshop](https://haskell.foundation/events/2023-ghc-development-workshop.html).
That link takes you to a page that has videos of all the other talks -- highly recommended.

{% include video id="kyI9fjtgN7w" provider="youtube" %}
