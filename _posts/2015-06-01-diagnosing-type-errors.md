---
title: "Diagnosing type errors with class"
excerpt: "Danfeng Zhang, Andrew C Myers, Dimitrios Vytiniotis, Simon Peyton Jones <br><br> Published in <em>Programming Languages Design and Implementation (PLDI'15)</em> by ACN
<br><br> PLDI Distinguished Paper Award <br><br>
[View PDF](../assets/pdfs/diagnosing-type-errors.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/diagnosing-type-errors.bib){: .btn .btn--info ..btn--large}"
permalink: /diagnosing-type-errors/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
Type inference engines often give terrible error messages, and the more sophisticated the type system the worse the problem. We show that even with the highly expressive type system implemented by the Glasgow Haskell Compiler (GHC)—including type classes, GADTs, and type families—it is possible to identify the _most likely source_ of the type error, rather than the _first source_ that the inference engine trips over. To determine which are the likely error sources, we apply a simple Bayesian model to a graph representation of the typing constraints; the satisfiability or unsatisfiability of paths within the graph provides evidence for or against possible explanations. While we build on prior work on error diagnosis for simpler type systems, inference in the richer type system of Haskell requires extending the graph with new nodes. The augmentation of the graph creates challenges both for Bayesian reasoning and for ensuring termination. Using a large corpus of Haskell programs, we show that this error localization technique is practical and significantly improves accuracy over the state of the art.

[ShErrLoc web site](http://www.cs.cornell.edu/Projects/sherrloc)
