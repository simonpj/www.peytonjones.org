---
title: "Kinds Are Calling Conventions"
excerpt: "Paul Downen, Zena Ariola, Simon Peyton Jones, Richard Eisenberg. (2020).
<br><br>
Published in <em>International Conference on Functional Programming (ICFP'20)</em> by ACM
<br><br>
[View PDF](../assets/pdfs/kinds-are-calling-conventions.pdf){: .btn .btn--info ..btn--x-large}
[Download BibTex](../assets/bibtex/kinds-are-calling-conventions.bib){: .btn .btn--info ..btn--x-large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /kinds-are-calling-conventions/
tags:
  - publication
---

# Abstract
A language supporting polymorphism is a boon to programmers: they can express complex ideas once and reuse functions in a variety of situations. However, polymorphism is pain for compilers tasked with producing efficient code that manipulates concrete values.

This paper presents a new intermediate language that allows efficient static compilation, while still supporting flexible polymorphism. Specifically, it permits polymorphism over not only the types of values, but also the representation of values, the rarity of machine functions, and the evaluation order of arguments—all three of which are useful in practice. The key insight is to encode information about a value’s calling convention in the _kind_ of its type, rather than in the type itself.
