---
title: "Guarded impredicative polymorphism"
excerpt: "Alejandro Serrano, Jurriaan Hage, Dimitrios Vytiniotis, Simon Peyton Jones <br><br> Published in <em>Proc ACM SIGPLAN Conference on Programming Languages Design and Implementation (PLDI'18)</em> by ACM
<br><br>
[View PDF](../assets/pdfs/guarded-impredicative/.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/guarded-impredicative.bib){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /guarded-impredicative-polymorphism/
tags:
  - publication
---

# Abstract
The design space for type systems that support impredicative instantiation is extremely complicated, in which one needs to strike a balance between expressiveness, simplicity for both the end programmer and the type system implementor, and how easily the system can be integrated with other advanced type system concepts. In this paper, we propose a new point in the design space, which we call guarded impredicativity. Its key idea is that impredicative instantiation in an application is allowed for type variables that occur under a type constructor.

The resulting type system has a clean declarative specification — making it easy for programmers to predict what will type and what will not — allows for a smooth integration with GHC’s OutsideIn(X) constraint solving framework, while giving up very little in terms of expressiveness compared to systems like HMF, HML, FPH and MLF. We give a sound and complete inference algorithm, and prove a principal type property for our system.

The PDF is for an extended version of the PLDI 2018 paper, including some Appendices.
