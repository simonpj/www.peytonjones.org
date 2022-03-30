---
title: "Evidence normalization in System FC"
excerpt: "Dimitrios Vytiniotis, Simon Peyton Jones <br><br> Published in <em>24th International Conference on Rewriting Techniques and Applications (RTA'13)</em> by LIPICS, Schloss Dagstuhl
<br><br>
[View PDF](../assets/pdfs/evidence-normalization.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/evidence-normalization.bib){: .btn .btn--info ..btn--large}"
permalink: /evidence-normalization/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
System FC is an explicitly typed language that serves as the target language for Haskell source programs. System FC is based on System F with the addition of erasable but explicit type equality proof witnesses. Equality proof witnesses are generated from type inference performed on source Haskell programs. Such witnesses may be very large objects, which causes performance degradation in later stages of compilation, and makes it hard to debug the results of type inference and subsequent program transformations. In this paper we present an equality proof simplification algorithm, implemented in GHC, which greatly reduces the size of the target System FC programs.
