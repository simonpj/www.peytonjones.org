---
  title: "Hashing Modulo Alpha-Equivalence"
  excerpt: "Krzysztof Maziarz, Tom Ellis, Alan Lawrence, Andrew Fitzgibbon, Simon Peyton Jones <br><br> Published in <em>ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI'21)</em>
  <br><br>
  [View PDF](../assets/pdfs/hashing-modulo-alpha.pdf){: .btn .btn--info ..btn--large}
  [Download BibTex](../assets/bibtex/hashing-modulo-alpha.bib){: .btn .btn--info ..btn--large}
  permalink: /hashing-modulo-alpha/
  header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
  tags:
  - publication
---


# Abstract
In many applications one wants to identify identical subtrees of a program syntax tree.  This identification should ideally be robust to alpha-renaming of the program, but no existing technique has been shown to achieve this with good efficiency (better than O(n^2) in expression size). We present a new, asymptotically efficient way to hash modulo alpha-equivalence. A key insight of our method is to use a weak (commutative) hash combiner at exactly one point in the construction, which admits an algorithm with O(n*(log n)^2) time complexity. We prove that the use of the commutative combiner nevertheless yields a strong hash with low collision probability.
