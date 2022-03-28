---
title: "Safe, zero-cost coercions for Haskell"
excerpt: "Joachin Breitner, Richard Eisenberg, Simon Peyton Jones, Stephanie Weirich <br><br> Published in <em>ICFP 2014</em>
<br><br>
[View PDF](../assets/pdfs/safe-coercions.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/safe-coercions.bib){: .btn .btn--info ..btn--large}"
permalink: /safe-coercions/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
---

# Abstract
Generative type abstractions — present in Haskell, OCaml, and other languages — are useful concepts to help prevent programmer errors. They serve to create new types that are distinct at compile time but share a run-time representation with some base type. We present a new mechanism that allows for zero-cost conversions between generative type abstractions and their representations, even when such types are deeply nested. We prove type safety in the presence of these conversions and have implemented our work into GHC.
* [Extended version with proofs](https://www.microsoft.com/en-us/research/uploads/prod/2016/07/coercible-ext.pdf)
