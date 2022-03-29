---
title: "Using Destination-Passing Style to Compile a Functional Language into Efficient Low-Level Code"
excerpt: "Amir Shaikhha, Andrew Fitzgibbon, Simon Peyton Jones, Dimitrios Vytiniotis <br><br> Published in <em>Workshop on Functional High-Performance Computing</em> by ACM
<br><br>
[View PDF](../assets/pdfs/destination-passing-style.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/destination-passing-style.bib){: .btn .btn--info ..btn--large}"
permalink: /destination-passing-style/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
We show how to compile high-level functional array-processing programs, drawn from image processing and machine learning, into C code that runs as fast as hand-written C.  The key idea is to transform the program to _destination passing style_, which in turn enables a highly-efficient stack-like memory allocation discipline.
