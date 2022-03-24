---
layout: single
author_profile: true
title: "Simon Peyton Jones"
toc: true
toc_sticky: true
classes: ""
header:
  overlay_image: /assets/images/spj-stock-header.jpg
feature_row:
  - image_path: /assets/images/spj-paper.jpg
    alt: "placeholder image 1"
    excerpt: "How to write a great research paper"
    url: "/great-research-paper/"
    btn_label: "See Video"
    btn_class: "btn--primary"
  - image_path: /assets/images/spj-talk.jpg
    excerpt: "How to give a great research talk"    
    url: "#test-link"
    btn_label: "See Video"
    btn_class: "btn--primary"
  - image_path: /assets/images/spj-proposal.jpg
    alt: "placeholder image 3"
    excerpt: "How to write a great grant proposal"
    url: "/great-grant-proposal/"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

# Hello

I’m a researcher at Microsoft Research in Cambridge, England. I started here in Sept 1998. I’m also an Honorary Professor of the [Computing Science Department](http://www.dcs.gla.ac.uk/) at [Glasgow University](http://www.gla.ac.uk/), where I was a professor during 1990-1998.

I’m interested in the design, implementation, and application of lazy functional languages. In practical terms, that means I spend a most of my time on the design and implementation of [the language Haskell](http://www.haskell.org/). In particular, much of my work is focused around [the Glasgow Haskell Compiler](http://haskell.org/ghc), and its ramifications.

I am chair of [Computing at School](http://www.computingatschool.org.uk/), the group at the epicentre of the reform of the national curriculum for Computing in England.  Computer science is now a foundational subject, alongside maths and natural science, that [every child learns from primary school onwards](http://community.computingatschool.org.uk/resources/3084).

I am married to Dorothy, a priest in the Church of England. We have six children.


# Research Skills

{% for post in site.posts limit: 0 %}
  {% include archive-single.html %}
{% endfor %}

{% include feature_row id="intro" type="center" %}
{% include feature_row %}  

# Resources

##### Computing at School
- [The Computing at School Working Group](https://www.computingatschool.org.uk/)
- [From Grassroots to Government (Microsoft Research Blog)](https://www.microsoft.com/en-us/research/blog/from-grassroots-to-government/)

##### Other Information & Links
- [My Win32 Cheat Sheet](https://www.microsoft.com/en-us/research/publication/win-32-cheat-sheet/)
- My GPG key fingerprint is: CABA 2C32 0D13 B715 8611 0390 6B2B 1815 5F25 C538
