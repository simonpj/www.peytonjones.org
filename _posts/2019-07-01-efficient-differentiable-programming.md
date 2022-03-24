---
title: "Efficient differentiable programming in a functional array-processing language"
excerpt: "Amir Shaikhha, Andrew Fitzgibbon, Dimitrios Vytiniotis, Simon Peyton Jones. (2019). 
<br><br>
[Publication](https://www.microsoft.com/en-us/research/uploads/prod/2019/03/unsaturated-type-families-icfp-2019.pdf){: .btn .btn--info ..btn--large}
[BibTex](https://www.microsoft.com/en-us/research/publication/higher-order-type-level-programming-in-haskell/bibtex/){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg 
    overlay_filter: 0.5
permalink: /efficient-differenetiable/
tags:  
  - publication 
---
<div style="text-align: right"><h2><a href ="https://popl22.sigplan.org/"> International Conference on Functional Programming (ICFP'19) <br> Published by ACM</a></h2></div>


# Abstract 
We present a system for the automatic differentiation (AD) of a higher-order functional array-processing language. The core functional language underlying this system simultaneously supports both source-to-source forward-mode AD and global optimisations such as loop transformations. In combination, gradient computation with forward-mode AD can be as efficient as reverse mode, and that the Jacobian matrices required for numerical algorithms such as Gauss-Newton and Levenberg-Marquardt can be efficiently computed.


