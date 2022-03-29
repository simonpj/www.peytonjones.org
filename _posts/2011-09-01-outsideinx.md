---
title: "OutsideIn(X): Modular type inference with local assumptions"
excerpt: "Dimitrios Vytiniotis, Simon Peyton Jones, Tom Schrijvers, Martin Sulzmann <br><br> <em> Journal of Functional Programming</em>, Vol 21: pp. 333-412
<br><br>
[View PDF](../assets/pdfs/outsideinx.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/outsideinx.bib){: .btn .btn--info ..btn--large}"
permalink: /outsideinx/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
---

# Abstract

Advanced type system features, such as GADTs, type classes and type families, have proven to be invaluable language extensions for ensuring data invariants and program correctness. Unfortunately, they pose a tough problem for type inference when they are used as local type assumptions. Local type assumptions often result in the lack of principal types and cast the generalisation of local let-bindings prohibitively difficult to implement and specify. User-declared axioms only make this situation worse. In this paper, we explain the problems and-perhaps controversially-argue for abandoning local let-binding generalisation. We give empirical results that local let generalisation is only sporadically used by Haskell programmers. Moving on, we present a novel constraint-based type inference approach for local type assumptions. Our system, called OutsideIn(X), is parameterised over the particular underlying constraint domain X, in the same way as HM(X). This stratification allows us to use a common metatheory and inference algorithm. OutsideIn(X) extends the constraints of X by introducing implication constraints on top. We describe the strategy for solving these implication constraints, which, in turn, relies on a constraint solver for X. We characterise the properties of the constraint solver for X so that the resulting algorithm only accepts programs with principal types, even when the type system specification accepts programs that do not enjoy principal types. Going beyond the general framework, we give a particular constraint solver for X = type classes + GADTs + type families, a non-trivial challenge in its own right. This constraint solver has been implemented and distributed as part of GHC 7.
