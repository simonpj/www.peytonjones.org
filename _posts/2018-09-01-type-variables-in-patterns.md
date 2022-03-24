---
title: "Type variables in patterns"
excerpt: "Richard Eisenberg, Joachim Breitner, Simon Peyton Jones <br><br> Presented at Proc ACM Haskell Symposium (Haskell '18) <br> Published by ACM
<br><br>
[View PDF](https://www.microsoft.com/en-us/research/uploads/prod/2018/06/tyvars-in-pats-haskell18-final.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](https://www.microsoft.com/en-us/research/publication/type-variables-patterns/bibtex/){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg 
    overlay_filter: 0.5
permalink: /type-variables-in-patterns/
tags: 
  - publication 
---

# Abstract
For many years, GHC has implemented an extension to Haskell that allows type variables to be bound in type signatures and patterns, and to scope over terms. This extension was never properly specified. We rectify that oversight here. With the formal specification in hand, the otherwise-labyrinthine path toward a design for binding type variables in patterns becomes blindingly clear. We thus extend ScopedTypeVariables to bind type variables explicitly, obviating the Proxy workaround to the dustbin of history.




