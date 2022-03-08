---
layout: single
author_profile: true
title: "Simon Peyton Jones"
subtitle: "Senior Principal Researcher" 
header:
  overlay_image: /assets/images/spj-stock-header.jpg
feature_row:
  - image_path: /assets/images/spj-paper.jpg
    alt: "placeholder image 1"
    excerpt: "This is some [sample content](https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/) that goes here with **Markdown** formatting."
  - image_path: /assets/images/spj-talk.jpg
    alt: "placeholder image 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/spj-paper.jpg
    alt: "placeholder image 3" 
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
## Recent Publications
{% for post in site.posts limit: 0 %}
  {% include archive-single.html %}
{% endfor %}
{% include feature_row id="intro" type="center" %}
{% include feature_row %}  

## Resources  
#### Computing at School
- [The Computing at School Working Group](https://www.computingatschool.org.uk/)
- [From Grassroots to Government (Microsoft Research Blog)](https://www.microsoft.com/en-us/research/blog/from-grassroots-to-government/)  

#### Other Information & Links
- [My Win32 Cheat Sheet](https://www.microsoft.com/en-us/research/publication/win-32-cheat-sheet/)
- My GPG key fingerprint is: CABA 2C32 0D13 B715 8611 0390 6B2B 1815 5F25 C538

