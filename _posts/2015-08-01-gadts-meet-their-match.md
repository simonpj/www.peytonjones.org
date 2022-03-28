---
title: "GADTs meet their match: pattern-matching warnings that account for GADTs, guards, and laziness"
excerpt: "Georgios Karachalias, Tom Schrijvers, Dimitrios Vytiniotis, Simon Peyton Jones <br><br> Published in <em>ACM International Conference on Functional Programming 2015 (ICFP'15)</em>
<br><br>
[View PDF](../assets/pdfs/gadts-meet-their-match.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/gadts-meet-their-match.bib){: .btn .btn--info ..btn--large}"
permalink: /gadts-meet-their-match/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
For ML and Haskell, accurate warnings when a function definition has redundant or missing patterns are mission critical. But today’s compilers generate bogus warnings when the programmer uses guards (even simple ones), GADTs, pattern guards, or view patterns. We give the first algorithm that handles all these cases in a single, uniform framework, together with an implementation in GHC, and evidence of its utility in practice.
