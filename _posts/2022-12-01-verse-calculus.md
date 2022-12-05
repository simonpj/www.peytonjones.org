<!-- A pubication page is a page for a publication. The page is built to be flexible if a video will be embedded, but does not require a video. -->

<!-- 1: To create a new publication page, create a new markdown file within the _posts folder.

  <!-- Each publication should be titled: YEAR-MONTH-DATE-TITLE.md or 0000-00-00-title.md. There should be a date availible for each publication, although many will not be down to the day. Use "01" for the date in these instances. Example: 2003-01-01-wearing-the-hair-shirt.md -->

  <!-- Make sure to include ".md" in the title to ensure the file is using the markdown format. -->

  <!-- In the markdown file, copy and paste the following metadata: -->

  ---
  title: "The Verse Calculus: a core calculus for functional logic programming"
  excerpt: "Lennart Augustsson, Joachim Breitner, Koen Claessen, Ranjit Jhala,
  Simon Peyton Jones, Olin Shivers, Tim Sweeney, Epic Games <br><br><em>Draft, not a finished work.</em>
  <br><br>
  [View PDF](../assets/pdfs/<filename>.pdf){: .btn .btn--info ..btn--large}
  [Download BibTex](../assets/bibtex/<bibfile>.bib){: .btn .btn--info ..btn--large}"
  permalink: /verse-calculus/
  header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
  tags:
  - publication
  ---

# Abstract
<!-- this H1 (denoted by the single octothorpe before the word 'Abstract') should remain unchanged. -->
  <!-- Note: Make sure to enter at least twice to create seperate lines for the page. -->
  Functional logic languages have a rich literature, but it is tricky
  to give them a satisfying semantics.  In this paper we describe the
  Verse calculus, VC, a new core calculus for functional
  logical programming. Our main contribution is to equip VC with a
  small-step rewrite semantics, so that we can reason
  about a VC program in the same way as one does with lambda
  calculus; that is, by applying successive rewrites to it.
  This semantics elegantly fills the gap between very high level
  ``magical'' semantics, and very low-level operational semantics.

*This unpublished draft describes our current thinking about Verse.   It is very much a work in progress, not a finished product.  The broad outlines of the design are stable.  However, the details of the rewrite rules may well change; we think that the current rules are not  confluent, in tiresome ways.  (If you are knowledgeable about confluence proofs, please talk to us!)*

*We are eager to enagage in a dialogue with the community.  Please do write to us.*

