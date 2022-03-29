---
title: "Non-recursive Make Considered Harmful"
excerpt: "Andrey Mokhov, Neil Mitchell, Simon Peyton Jones, Simon Marlow <br><br> Published in <em>Proceedings of the 9th International Symposium on Haskell</em>
<br><br>
[View PDF](../assets/pdfs/non-recursive-make.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/non-recursive-make.bib){: .btn .btn--info ..btn--large}"
permalink: /non-recursive-make/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
Most build systems start small and simple, but over time grow into hairy monsters that few dare to touch. As we demonstrate in this paper, there are a few issues that cause build systems major scalability challenges, and many pervasively used build systems (e.g. Make) do not scale well.

This paper presents a solution to the challenges we identify. We use functional programming to design abstractions for build systems, and implement them on top of the Shake library, which allows us to describe build rules and dependencies. To substantiate our claims, we engineer a new build system for the Glasgow Haskell Compiler. The result is more scalable, faster, and spectacularly more maintainable than its Make-based predecessor.
