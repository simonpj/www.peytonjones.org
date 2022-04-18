---
title: "Work Efficient Higher-Order Vectorisation"
excerpt: "Ben Lippmeier, Manuel Chakravarty, Gabriele Keller, Roman Leshchinskiy, Simon Peyton Jones <br><br> Published in <em>ICFP'12</em> by ACM
<br><br>
[View PDF](../assets/pdfs/work-efficient-higher-order-vectorisation.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/work-efficient-higher-order-vectorisation.bib){: .btn .btn--info ..btn--large}"
permalink: /higher-order-vectorisation/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Existing approaches to higher-order vectorisation, also known as flattening nested data parallelism, do not preserve the asymptotic work complexity of the source program. Straightforward examples, such as sparse matrix-vector multiplication, can suffer a severe blow-up in both time and space, which limits the practicality of this method. We discuss why this problem arises, identify the mis-handling of index space transforms as the root cause, and present a solution using a refined representation of nested arrays. We have implemented this solution in Data Parallel Haskell (DPH) and present benchmarks showing that realistic programs, which used to suffer the blow-up, now have the correct asymptotic work complexity. In some cases, the asymptotic complexity of the vectorised program is even better than the original.
