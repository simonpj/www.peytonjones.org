<!-- A pubication page is a page for a publication. The page is built to be flexible if a video will be embedded, but does not require a video. -->

<!-- 1: To create a new publication page, create a new markdown file within the _posts folder.

  <!-- Each publication should be titled: YEAR-MONTH-DATE-TITLE.md or 0000-00-00-title.md. There should be a date availible for each publication, although many will not be down to the day. Use "01" for the date in these instances. Example: 2003-01-01-wearing-the-hair-shirt.md -->

  <!-- Make sure to include ".md" in the title to ensure the file is using the markdown format. -->

  <!-- In the markdown file, copy and paste the following metadata: -->

  ---
  title: "PUBLICATION TITLE"
  excerpt: "AUTHOR NAMES <br><br> Published in <em>JOURNAL</em>
  <br><br>
  [Publication](/assets/pdf.pdf){: .btn .btn--info ..btn--large}
  [BibTex](/assets/bibtex/bibfile.bib){: .btn .btn--info ..btn--large}"
  permalink: /PERMALINK-HERE/
  header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
  tags:
  - publication
  - TAG 2
  ---
  <!-- To quickly show where Simon is located within the author list, add two atrisks around his name to bold it. Example: Faustyna Krawiec, Neel Krishnaswami,   **Simon Peyton Jones,** Tom Ellis, Andrew Fitzgibbon, Richard Eisenberg -->

  <!-- You can also copy this template and remove all of these comments around the metadata. -->

  <!-- Update the tags with the appropriate tags. The most common tags will be "publication" and "haskell" -->

<!-- 2: Copy the following content after the metadata. -->

<div style="text-align: right"><h2><a href ="link here"> linked text </a></h2></div>

  <!-- If availible, the publication outlet (or venue) should be a link to the publisher's website. If not availible, the link above should be changed to plain text. Example: ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI'21) -->

# Abstract
<!-- this H1 (denoted by the single octothorpe before the word 'Abstract') should remain unchanged. -->
  <!-- Note: Make sure to enter at least twice to create seperate lines for the page. -->
ABSTRACT TEXT GOES HERE


<!-- Remove the following if the publication does not include a video -->
{% include video id="EPGqzkEZWyw" provider="youtube" %}
  <!-- This expression is used to embed a video from Youtube. The video ID in the above example is 'EPGqzkEZWyw'. This ID can be found on Youtube in a few differnet locations: in the video URL (after "watch?v=") or under "share", which creates a link such as "https://youtu.be/EPGqzkEZWyw". In this instance, the video ID is found after the backslash -->
VIDEO DESCRIPTION
  <!-- This is simply a breif description of the video. -->
