---
title: "Type variables in patterns"
excerpt: "Richard Eisenberg, Joachim Breitner, Simon Peyton Jones <br><br> Published in <em>Proc ACM Haskell Symposium (Haskell '18)</em> by ACM
<br><br>
[View PDF](../assets/pdfs/type-variables.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/type-variables.bib){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /type-variables-in-patterns/
tags:
  - publication
---

# Abstract
For many years, GHC has implemented an extension to Haskell that allows type variables to be bound in type signatures and patterns, and to scope over terms. This extension was never properly specified. We rectify that oversight here. With the formal specification in hand, the otherwise-labyrinthine path toward a design for binding type variables in patterns becomes blindingly clear. We thus extend _ScopedTypeVariables_ to bind type variables explicitly, obviating the _Proxy_ workaround to the dustbin of history.
