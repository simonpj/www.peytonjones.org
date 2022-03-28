---
title: "Backpack: retrofitting Haskell with interfaces"
excerpt: "Scott Kilpatrick, Derek Dreyer, Simon Peyton Jones, Simon Marlow <br><br> Published in <em>POPL '14</em> by ACM
<br><br>
[View PDF](../assets/pdfs/backpack-retrofitting-haskell.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/backpack-retrofitting-haskell.bib){: .btn .btn--info ..btn--large}"
permalink: /backpack-retrofitting-haskell/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
Module systems like that of Haskell permit only a weak form of modularity in which module implementations directly depend on other implementations and must be processed in dependency order. Module systems like that of ML, on the other hand, permit a stronger form of modularity in which explicit interfaces express assumptions about dependencies, and each module can be typechecked and reasoned about independently.

In this paper, we present Backpack, a new language for building separately-typecheckable _packages_ on top of a weak module system like Haskell’s. The design of Backpack is inspired by the MixML module calculus of Rossberg and Dreyer, but differs significantly in detail. Like MixML, Backpack supports explicit interfaces and recursive linking. Unlike MixML, Backpack supports a more flexible _applicative_ semantics of instantiation. Moreover, its design is motivated less by foundational concerns and more by the _practical_ concern of integration into Haskell, which has led us to advocate simplicity — in both the syntax and semantics of Backpack — over raw expressive power. The semantics of Backpack packages is defined by elaboration to sets of Haskell modules and binary interface files, thus showing how Backpack maintains interoperability with Haskell while extending it with separate typechecking. Lastly, although Backpack is geared toward integration into Haskell, its design and semantics are largely agnostic with respect to the details of the underlying core language.
