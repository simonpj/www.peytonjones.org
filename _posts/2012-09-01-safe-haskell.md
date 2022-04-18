---
title: "Safe Haskell"
excerpt: "Simon Peyton Jones <br><br> Published in <em>Haskell '12: Proceedings of the Fifth ACM SIGPLAN Symposium on Haskell</em> by ACM
<br><br>
[View PDF](../assets/pdfs/safe-haskell.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/safe-haskell.bib){: .btn .btn--info ..btn--large}"
permalink: /safe-haskell/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
- haskell
---

# Abstract

Though Haskell is predominantly type-safe, implementations contain a few loopholes through which code can bypass typing and module encapsulation. This paper presents Safe Haskell, a language extension that closes these loopholes. Safe Haskell makes it possible to confine and safely execute untrusted, possibly malicious code. By strictly enforcing types, Safe Haskell allows a variety of different policies from API sandboxing to information-flow control to be implemented easily as monads. Safe Haskell is aimed to be as unobtrusive as possible. It enforces properties that programmers tend to meet already by convention. We describe the design of Safe Haskell and an implementation (currently shipping with GHC) that infers safety for code that lies in a safe subset of the language. We use Safe Haskell to implement an online Haskell interpreter that can securely execute arbitrary untrusted code with no overhead. The use of Safe Haskell greatly simplifies this task and allows the use of a large body of existing code and tools.
