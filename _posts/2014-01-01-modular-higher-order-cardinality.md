---
title: "Modular, Higher-order Cardinality Analysis in Theory and Practice"
excerpt: "Ilya Sergey, Dimitrios Vytiniotis, Simon Peyton Jones <br><br> Published in <em>Proceedings of the 41st ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages</em> by ACM
<br><br>
[View PDF](../assets/pdfs/modular-higher-order-cardinality.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/modular-higher-order-cardinality.bib){: .btn .btn--info ..btn--large}"
permalink: /modular-higher-order-cardinality/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
---

# Abstract
Since the mid ’80s, compiler writers for functional languages (especially lazy ones) have been writing papers about identifying and exploiting thunks and lambdas that are used only once. However it has proved difficult to achieve both power and simplicity in practice. We describe a new, modular analysis for a higher-order language, which is both simple and effective, and present measurements of its use in a full-scale, state of the art optimising compiler. The analysis finds many single-entry thunks and one-shot lambdas and enables a number of program optimisations.

The [extended version](https://www.microsoft.com/en-us/research/uploads/prod/2016/07/cardinality-extended.pdf) has a technical appendix.

(This paper represents a completely new, and much simpler, attack on the problem, compared to our earlier work on usage polymorphism.)
