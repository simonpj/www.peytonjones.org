---
title: "Elastic Sheet-Defined Functions: Generalising Spreadsheet Functions to Variable-Size Input Arrays"
excerpt: "Matt McCutchen, Judith Borghouts, Andy Gordon, Simon Peyton Jones, Advait Sarkar. (2020).
<br><br>
[View PDF](/assets/elastic-sdfs.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](/assets/bibtex/elastic-sdfs.bib){: .btn .btn--info ..btn--large}
[DOI](https://www.cambridge.org/core/journals/journal-of-functional-programming/article/elastic-sheetdefined-functions-generalising-spreadsheet-functions-to-variablesize-input-arrays/A85E83284ADAFF27B8607BBF20175D7B){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /elastic-sdfs/
tags:
    - publication
---

# Abstract
Sheet-defined functions (SDFs) bring modularity and abstraction to the world of spreadsheets. Alas, end users naturally write SDFs that work over fixed-size arrays, which limits their reusability. To help end user programmers write more reusable SDFs, we describe a principled approach to generalising such functions to become elastic SDFs that work over inputs of arbitrary size. We prove that under natural, checkable conditions, our algorithm returns the principal generalisation of an input SDF. We describe a formal semantics and several efficient implementation strategies for elastic SDFs. A user study with spreadsheet users compares the human experience of programming with elastic SDFs to the alternative of relying on array-processing combinators. Our user study finds that the cognitive load of elastic SDFs is lower than for SDFs with map/reduce array combinators, the closest alternative solution.
