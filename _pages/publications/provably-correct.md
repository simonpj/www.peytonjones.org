---
layout: single
classes: wide
collection: publication
title: "Provably Correct, Asymptotically Efficient, Higher-Order Reverse-Mode Automatic Differentiation"
author_profile: true
permalink: /provably-correct/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
feature_row:
  - image_path: /assets/images/thumb-video-provably-correct.jpg 
    alt: "Watch the video about this paper"
    excerpt: "This keynote by Simon Peyton Jones was recorded at Haskell eXchange 2021 on 16 November 2021 (video)" 
    url: "https://www.youtube.com/watch?v=EPGqzkEZWyw"
    btn_label: "Watch"
    btn_class: "btn--primary"
  - image_path: /assets/images/download_file.png 
    alt: "Download this publication"
    url: /assets/pdfs/higher-order-ad.pdf 
    btn_label: "Download Publication"
    btn_class: "btn--info"
              ".btn--large"
  - image_path: /assets/images/bib.png
    alt: "Download BibTex file"
    url: /assets/bibtex/provably-correct.bib
    btn_label: "Download BibTex"
    btn_class: "btn--primary"
---

Faustyna Krawiec, Neel Krishnaswami, Simon Peyton Jones, Tom Ellis, Andrew Fitzgibbon, Richard Eisenberg
_[POPL 2022](https://popl22.sigplan.org)_ | August 2021

In this paper, we give a simple and efficient implementation of reverse-mode automatic differentiation, which both extends easily to higher-order functions, and has run time and memory consumption linear in the run time of the original program. In addition to a formal description of the translation, we also describe an implementation of this algorithm, and prove its correctness by means of a logical relations argument.

{% include feature_row id="downloads" type="right" %}
{% include feature_row %}  
