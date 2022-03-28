---
title: "Trees that grow"
excerpt: "Richard Eisenberg, Simon Peyton Jones <br><br> Published in <em>ACM Conference on Programming Language Design and Implementation (PLDI'17)</em> by ACM
<br><br>
[View PDF](../assets/pdfs/levity-polymorphism.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/levity-polymorphism.bib){: .btn .btn--info ..btn--large}"
permalink: /levity-polymorphism/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Parametric polymorphism is one of the lynchpins of modern typed programming. A function that can work seamlessly over a variety of types simplifies code, helps to avoid errors introduced through duplication, and is easy to  maintain. However, polymorphism comes at a very real cost, one that each language with support for polymorphism has paid in different ways. This paper describes this cost, proposes a theoretically simple way to reason about the  cost—that kinds, not types, are calling conventions—and details one approach to dealing with polymorphism that works in the context of a language, Haskell, that prizes both efficiency and a principled type system.

This approach, levity polymorphism, allows the user to abstract over calling conventions; we detail and verify restrictions that are necessary in order to compile levity-polymorphic functions. Levity polymorphism has opened up surprising new opportunities for library design in Haskell.
