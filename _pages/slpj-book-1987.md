---
  title: "The implementation of functional programming languages"
  author_profile: true
  permalink: /slpj-book-1987/
  header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
---

**The implementation of functional programming languages**, Simon Peyton Jones, Prentice Hall 1987.

This book is out of print now, but you can read the PDF here
 [View PDF](../assets/pdfs/slpj-book-1987-full.pdf){: .btn .btn--info ..btn--large}

## Errata

(Line references are given counting only inhabited lines.)

* p167, line 12.  After "TVAR tvn'" add ", otherwise"

* p169, line -14.  After "$scomp phi)" add ", otherwise"

* p170, line 5.  After "(phitvn,phit)" add ", otherwise"

* p170, line 13.  After "FAILURE" add ", otherwise"

* p170, line -12. Replace "(unify phitvn phit)" with "(unify phi (phitvn,phit))"

* p170, line -13. Replace "(unify (TVAR tvn) t)" with "(unify phi ((TVAR tvn),t))"

* p172, line -5.  Before "(x <- xs" add "xs |)"

* p172, line -1.  After "(x' $in xs)" add ", otherwise".

* p173, line 11.  After "phi tvn" add ", otherwise"

* p177, line  10. Replace "(tcl es gamma n)" with "(tcl gamma n es)"

* p178, line 19.  After "TVAR tvn" add ", otherwise"

* p180, line -5.  After "(x:acc) xs" add ", otherwise".

* p216, line -4.  (A clarification.) Before "...produce two new..." add "consume one \x-abstraction, and" (Misplaced?)

* p246, line 14.  Example (3): the plus-or-minus symbol should be an underlined "+" (underlining in the same style as in the rest of the examples).

* p268, line -4.  Replace "..passing x into.." with "..passing its argument into..". (Misplaced?)

* p309, Fig 18.9.  (A clarification.)  Add to the title of the figure: "(Note: a copying implementation is depicted, but indirections could be used instead.)"

* p343, HEAD case of Fig 20.3.  At end of line, after "HEAD;", add "EVAL;"
* p343, HEAD case of Fig 20.3.  Replace "RETURN" with "UNWIND".

* p345 Fig 20.4 and p363 Fig 10.15.  (A clarification.)  Add a new note	at the end of the figure: "In the first four cases of RS it is guaranteed that n>0, because the R scheme matches the special cases before calling RS.  Hence no EVAL is required in these rules."

* p364, HEAD case of Fig 20.14.  Replace "RETURN" with "UNWIND"

* p368, line 2.  Replace "which is always an application node." with "which is either an application node or a zero-argument supercombinator."

* p377, Fig 21.5 Modification to the E scheme.  The right hand side should say "ES[[ E1 E2 ]] p (d+1) 0"  That is, replace "d" with "(d+1)".

* p401, line 4.  "NO" should be "N0"  (that's a zero not an oh!). (This is a cosmetic change only)

* p405, line -12. "19!" should be "2 to the 19:th power" and line -10. "O(N!)" should be "O(2 to-the-Nth)".

* p429, line 6.  "grobally" should be "globally"

* p432, line 23.  Omit the words "squares of the"

* p435, line -7.  Line should read "queens 0 = [[]]"


INDEX

* Add an entry for "MKAP n", p344
* Add an entry for "speculative parallelism", p417

