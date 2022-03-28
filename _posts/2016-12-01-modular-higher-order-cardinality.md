---
title: "Modular, higher-order cardinality analysis in theory and practice"
excerpt: "Ilya Sergey, Dimitrios Vytiniotis, Joachim Breitner, Simon Peyton Jones <br><br> Published in <em>Journal of Functional Programming</em>
<br><br>
[View PDF](../assets/pdfs/modular-higher-order-cardinality-2016.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/modular-higher-order-cardinality-2016.bib){: .btn .btn--info ..btn--large}"
permalink: /modular-higher-order-cardinality-2016/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- TAG 2
---

# Abstract
Since the mid ’80s, compiler writers for functional languages (especially lazy ones) have been writing papers about identifying and exploiting thunks and lambdas that are used only once.  However, it has proved difficult to achieve both power and simplicity in practice.  In this paper we describe a new, modular analysis for a higher-order language, which is both simple and effective. We prove the analysis sound with respect to a standard call-by-need semantics, and present measurements of its use in a full-scale, state-of-the-art optimising compiler. The analysis finds many single-entry thunks and one-shot lambdas and enables a number of
program optimisations.

This paper extends our earlier [conference publication (POPL’14)](../modular-higher-order-cardinality) with proofs, expanded report on evaluation and a detailed examination of the factors causing the loss of precision in the analysis.

To appear in the Journal of Functional Programming
