---
title: "Efficient differentiable programming in a functional array-processing language"
excerpt: "Amir Shaikhha, Andrew Fitzgibbon, Dimitrios Vytiniotis, Simon Peyton Jones <br><br> Published in <em>International Conference on Functional Programming (ICFP'19)</em> by ACM
<br><br>
[View PDF](https://www.microsoft.com/en-us/research/uploads/prod/2019/03/unsaturated-type-families-icfp-2019.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](https://www.microsoft.com/en-us/research/publication/higher-order-type-level-programming-in-haskell/bibtex/){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /efficient-differenetiable/
tags:  
  - publication
---

# Abstract
We present a system for the automatic differentiation (AD) of a higher-order functional array-processing language. The core functional language underlying this system simultaneously supports both source-to-source forward-mode AD and global optimisations such as loop transformations. In combination, gradient computation with forward-mode AD can be as efficient as reverse mode, and that the Jacobian matrices required for numerical algorithms such as Gauss-Newton and Levenberg-Marquardt can be efficiently computed.
