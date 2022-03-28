---
title: "HALO: Haskell to Logic Through Denotational Semantics"
excerpt: "Dimitrios Vytiniotis, Simon Peyton Jones, Koen Claessen, Dan Rosén <br><br> Published in <em>Proceedings of the 40th Annual ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages</em> by ACM
<br><br>
[View PDF](../assets/pdfs/halo-haskell-to-logic.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/halo-haskell-to-logic.bib){: .btn .btn--info ..btn--large}"
permalink: /halo-haskell-to-logic/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---


# Abstract
Even well-typed programs can go wrong in modern functional languages, by encountering a pattern-match failure, or simply returning the wrong answer. An increasingly-popular response is to allow programmers to write contracts that express semantic properties, such as crash-freedom or some useful post-condition. We study the static verification of such contracts. Our main contribution is a novel translation to first-order logic of both Haskell programs, and contracts written in Haskell, all justified by denotational semantics. This translation enables us to prove that functions satisfy their contracts using an off-the-shelf first-order logic theorem prover.
