---
title: "Desugaring Haskell’s do-notation Into Applicative Operations"
excerpt: "Simon Marlow, Simon Peyton Jones, Edward Kmett, Andrey Mokhov <br><br> Published in <em>Haskell Symposium</em>
<br><br>
[View PDF](../assets/pdfs/desugaring-haskell.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/desugaring-haskell.bib){: .btn .btn--info ..btn--large}"
permalink: /desugaring-haskell/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract
``Monads`` have taken the world by storm, and are supported by ``do``-notation (at least in Haskell). Programmers are increasingly waking up to the usefulness and ubiquity of ``Applicatives``, but they have so far been hampered by the absence of supporting notation. In this paper we show how to re-use the very same ``do``-notation to work for ``Applicatives`` as well, providing efficiency benefits for some types that are both ``Monad`` and ``Applicative``, and syntactic convenience for those that are merely ``Applicative``. The result is fully implemented in GHC, and is in use at Facebook to make it easy to write highly-parallel queries in a distributed system.
