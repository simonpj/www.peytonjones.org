<!-- A pubication page with a video is exactly as it sounds: it is a page, for a publication, in which there is also a related video for. --> 

<!-- 1: To create a new publication page (with video), create a new markdown file within the _pubications folder. Make sure to include ".md" in the title to ensure the file is using the markdown format. -->

  <!-- In the markdown file, copy and paste the following metadata: -->

  ---
  title: "PUBLICATION TITLE"
  excerpt: "ONE SENTENCE EXCERPT"
  header:
    overlay_image: /assets/images/spj-stock-header.jpg 
    overlay_filter: 0.5
  permalink: /PERMALINK-HERE/
  ---
  
   <!-- You can also copy this template and remove all of these comments around the metadata. --> 

<!-- 2: Copy the following content after the metadata. -->

# Abstract 
<!-- this H1 (denoted by the single octothorpe before the word 'Abstract') should remain unchanged. --> 
  <!-- Note: Make sure to enter at least twice to create seperate lines for the page. --> 
ABSTRACT TEXT GOES HERE


LIST OF THE AUTHORS
  <!-- To quickly show where Simon is located within the author list, add two atrisks around his name to bold it. Example: Faustyna Krawiec, Neel Krishnaswami,   **Simon Peyton Jones,** Tom Ellis, Andrew Fitzgibbon, Richard Eisenberg -->
  <!-- After listing the authors, the next line of text should be the pubication outlet and the date of publication. -->
[PUBLICATION NAME](http://LINK TO PUBLICATION HERE.com) | MONTH YEAR
  <!-- If availible, the publication outlet (or venue) should be a link to the publisher's website. If not availible, the link above should be changed to plain text. Example: ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI'21) | June 2021 --> 


{% include video id="EPGqzkEZWyw" provider="youtube" %}
  <!-- This expression is used to embed a video from Youtube. The video ID in the above example is 'EPGqzkEZWyw'. This ID can be found on Youtube in a few differnet locations: in the video URL (after "watch?v=") or under "share", which creates a link such as "https://youtu.be/EPGqzkEZWyw". In this instance, the video ID is found after the backslash --> 
VIDEO DESCRIPTION
  <!-- This is simply a breif description of the video. --> 


# Downloads
<!-- this H1 (denoted by the single octothorpe before the word 'Downloads') should remain unchanged. --> 
[Publication](/assets/pdf.pdf){: .btn .btn--info ..btn--large}
[BibTex](/assets/bibtex/bibfile.bib){: .btn .btn--info ..btn--large}
<!-- Both "publication" and "Bibtext" should remain unchanged. The links, however, should be adjusted... --> 
