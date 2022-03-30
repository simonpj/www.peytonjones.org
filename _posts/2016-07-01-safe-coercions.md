---
title: "Safe zero-cost coercions for Haskell"
excerpt: "Joachim Breitner, Richard Eisenberg, Simon Peyton Jones, Stephanie Weirich <br><br> Published in <em>Journal of Functional Programming</em>
<br><br>
[View PDF](../assets/pdfs/safe-coercions-2016.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/safe-coercions-2016.bib){: .btn .btn--info ..btn--large}"
permalink: /safe-coercions-2016/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
Generative type abstractions – present in Haskell, OCaml, and other languages – are useful concepts to help prevent programmer errors. They serve to create new types that are distinct at compile time but share a run-time representation with some base type. We present a new mechanism that allows for zero-cost conversions between generative type abstractions and their representations, even when such types are deeply nested. We prove type safety in the presence of these conversions and have implemented our work in GHC.

This is a journal version of [our earlier ICFP 2014 paper of the same title](../safe-coercions).
