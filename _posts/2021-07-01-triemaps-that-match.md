---
title: "Triemaps that match"
excerpt: "Simon Peyton Jones, Richard Eisenberg, Sebastian Graf <br><br>
In <em>Languages, Compilers, Analysis - From Beautiful Theory to Useful Practice</em>,
Essays Dedicated to Alan Mycroft on the Occasion of His Retirement,
Springer LNCS Vol 15500, pp234-261.
<br><br>
[View PDF](../assets/pdfs/TrieMaps-Nov-24.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/triemaps-that-match.bib){: .btn .btn--info ..btn--large}"
header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
permalink: /triemaps-that-match/
tags:
  - publication
---

# Abstract
The trie data structure is a good choice for finite maps whose keys are data structures (trees) rather than atomic values. But what if we want the keys to be patterns, each of which matches many lookup keys?  Efficient matching of this kind is well studied in the theorem prover community, but much less so in the context of statically typed functional programming. Doing so yields an interesting new viewpoint — and a practically useful design pattern, with good runtime performance.
