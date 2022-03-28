---
title: "Trees that grow"
excerpt: "Shayan Najd, Simon Peyton Jones <br><br> Published in <em>Journal of Universal Computer Science (JUCS) </em>, Vol 23: pp. 47-62
<br><br>
[View PDF](../assets/pdfs/trees-that-grow.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/trees-that-grow.bib){: .btn .btn--info ..btn--large}"
permalink: /trees-that-grow/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

We study the notion of extensibility in functional data types, as a new approach to the problem of decorating abstract syntax trees with additional information. We observed the need for such extensibility while redesigning the data types representing Haskell abstract syntax inside Glasgow Haskell Compiler (GHC).

Specifically, we describe a programming idiom that exploits type-level functions to allow a particular form of extensibility. The approach scales to support existentials and generalised algebraic data types, and we can use pattern synonyms to make it quite convenient in practice.
