---
title: "Theory and practice of demand analysis in Haskell"
excerpt: "Ilya Sergey, Simon Peyton Jones, Dimitrios Vytiniotis <br><br> Unpublished draft <br><br>
[View PDF](../assets/pdfs/theory-and-practice.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/theory-and-practice.bib){: .btn .btn--info ..btn--large}"
permalink: /theory-and-practice/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
Any decent optimising compiler for a lazy language like Haskell must include a strictness analyser. The results of this analysis allow the compiler to use call-by-value instead of call-by-need, and that leads to big performance improvements. It turns out that strictness analysis is an interesting problem from a theoretical point of view, and the 1980’s saw a huge rash of papers on the subject. There were fewer, many, many fewer, papers that described real implementations.

This paper presents the fruits of a decade-long experience with strictness analysis, in the context of the Glasgow Haskell Compiler, an optimising compiler for Haskell. In particular, we recently re-engineered the existing strictness analyser that used forward abstract interpretation, replacing it with a new one that uses backward analysis instead.

This unpublished draft is better explained, and much closer to the actual implementation in GHC, than [our earlier version](https://www.microsoft.com/en-us/research/publication/demand-analysis/).
