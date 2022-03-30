---
title: "Typed reflection in Haskell"
excerpt: "Simon Peyton Jones, Stephanie Weirich, Richard A. Eisenberg, Dimitrios Vytiniotis <br><br> Proc Philip Wadler's 60th birthday Festschrift, Edinburgh, April 2016
<br><br>
[View PDF](../assets/pdfs/typed-reflection.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/typed-reflection.bib){: .btn .btn--info ..btn--large}"
permalink: /typed-reflection/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
The ability to perform type tests at runtime blurs the line between statically-typed and dynamically-checked languages. Recent developments in Haskell’s type system allow even programs that use reflection to themselves be statically typed, using a type-indexed runtime representation of types called ``TypeRep``. As a result we can build dynamic types as an ordinary, statically-typed library, on top of ``TypeRep`` in an open-world context.
