---
  title: "Lower your guards: a compositional pattern-match coverage checker"
  excerpt: "Simon Peyton Jones, Sebastian Graf, Ryan Scott <br><br> Published in <em>International Conference on Functional Programming (ICFP'20)</em>
  <br><br>
  [View PDF](../assets/pdfs/lower-your-guards.pdf){: .btn .btn--info ..btn--large}
  [Download BibTex](../assets/bibtex/lower-your-guards.bib){: .btn .btn--info ..btn--large}"
  permalink: /lower-your-guards/
  header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
  tags:
  - publication
  - haskell
---

# Abstract
One of a compiler’s roles is to warn if a function defined by pattern matching does not cover its inputs—that is, if there are missing or redundant patterns. Generating such warnings accurately is difficult for modern languages due to the myriad of interacting language features when pattern matching. This is especially true in Haskell, a language with a complicated pattern language that is made even more complex by extensions offered by the Glasgow Haskell Compiler (GHC). Although GHC has spent a significant amount of effort towards improving its pattern-match coverage warnings, there are still several cases where it reports inaccurate warnings.

We introduce a coverage checking algorithm called Lower Your Guards, which boils down the complexities of pattern matching into guard trees.  While the source language may have many exotic forms of patterns, guard trees only have three different constructs, which vastly simplifies the coverage checking process. Our algorithm is modular, allowing for new forms of source-language patterns to be handled with little changes to the overall structure of the algorithm. We have implemented the algorithm in GHC and demonstrate places where it performs better than GHC’s current coverage checker, both in accuracy and performance.

Here is [a video of Simon giving a talk about this work at Code Mesh 2019](https://www.youtube.com/watch?v=SWO5OzSxD6Y)
