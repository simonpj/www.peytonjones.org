---
title: "Generative type abstraction and type-level computation"
excerpt: "Stephanie Weirich , Dimitrios Vytiniotis, Simon Peyton Jones, Steve Zdancewic <br><br> Published in <em> Proceedings of the 38th annual ACM SIGPLAN-SIGACT symposium on Principles of programming languages </em> by ACM SIGPLAN<br><br>
[View PDF](../assets/pdfs/popl163af-weirich.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/generative-type-abstraction.bib){: .btn .btn--info ..btn--large}"
permalink: /generative-type-abstraction/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Modular languages support generative type abstraction, ensuring that an abstract type is distinct from its representation, except inside the implementation where the two are synonymous. We show that this well-established feature is in tension with the non-parametric features of newer type systems, such as indexed type families and GADTs. In this paper we solve the problem by using kinds to distinguish between parametric and non-parametric contexts. The result is directly applicable to Haskell, which is rapidly developing support for type-level computation, but the same issues should arise whenever generativity and non-parametric features are combined.
