---
title: "Let Should Not Be Generalised"
excerpt: "Dimitrios Vytiniotis, Simon Peyton Jones, Tom Schrijvers <br><br>Published in <em>Proceedings of the 5th ACM SIGPLAN Workshop on Types in Language Design and Implementation</em> by ACM
<br><br>
[View PDF](../assets/pdfs/tldi10-vytiniotis.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/let-should-not-be-generalised.bib){: .btn .btn--info ..btn--large}"
permalink: /let-generalised/
header:
  overlay_image: /assets/images/spj-stock-header.jpg
  overlay_filter: 0.5
tags:
- publication
---

# Abstract
From the dawn of time, all derivatives of the classic Hindley-Milner type system have supported implicit generalisation of local let-bindings. Yet, as we will show, for more sophisticated type systems implicit let-generalisation imposes a disproportionate complexity burden. Moreover, it turns out that the feature is very seldom used, so we propose to eliminate it. The payoff is a substantial simplification, both of the specification of the type system, and of its implementation.

>Copyright © 2007 by the Association for Computing Machinery, Inc. Permission to make digital or hard copies of part or all of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components of this work owned by others than ACM must be honored. Abstracting with credit is permitted. To copy otherwise, to republish, to post on servers, or to redistribute to lists, requires prior specific permission and/or a fee. Request permissions from Publications Dept, ACM Inc., fax +1 (212) 869-0481, or permissions@acm.org. The definitive version of this paper can be found at ACM's Digital Library --http://www.acm.org/dl/.
