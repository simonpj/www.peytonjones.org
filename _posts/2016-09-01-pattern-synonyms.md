---
title: "Pattern Synonyms"
excerpt: "Matthew Pickering, Gerg˝o Érdi, Simon Peyton Jones, Richard A. Eisenberg <br><br> Published in <em>Haskell'16 </em>
<br><br>
[View PDF](../assets/pdfs/pattern-synonyms.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/pattern-synonyms.bib){: .btn .btn--info ..btn--large}"
permalink: /pattern-synonyms/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
Pattern matching has proven to be a convenient, expressive way of inspecting data. Yet this language feature, in its traditional form, is limited: patterns must be data constructors of concrete data types.
No computation or abstraction is allowed. The data type in question must be concrete, with no ability to enforce any invariants. Any change in this data type requires all clients to update their code. This paper introduces pattern synonyms, which allow programmers to abstract over patterns, painting over all the shortcomings listed above. Pattern synonyms are assigned types, enabling a compiler to check the validity of a synonym independent of its definition. These types are intricate; detailing how to assign a type to a pattern synonym is a key contribution of this work. We have implemented pattern synonyms in the Glasgow Haskell Compiler, where they have enjoyed immediate popularity, but we believe this feature could easily be exported to other languages that support pattern matching.
