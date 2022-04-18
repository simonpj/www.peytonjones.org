# What

On each page and within each page template lives the page front matter. The front matter impacts formatting of the page, such as the layout, the header, and more. 

## What This Document Includes

- What appear within the front matter
	- Author Profile
	- Buttons
	- Excerpt
	- Header
	- Layout
	- Permalink
	- Tags
	- Title or Page Title
- What this front matter controls
- How to make changes to the front matter
 

# How 

This document provides an overview of each piece of data that may appear in the front matter. These data appear in this document in alphabetical order.


## Author Profile

The *author profile* is the content that displays on the left hand side of the screen: your picture, name, title, and social links are all a part of the profile. If you would like the profile to display, keep the "true". If you would not like the profile to display, change "true" to "false." 

    Note: You can update this the content within the author profile by following the document [Update-Author-Profile.md](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/Update-Author-Profile.md).

Note: We do not recommend changing the author profile to “false” on the home page. 

## Buttons

Buttons to download publication PDFs and Bibtex files live on each publication post. These buttons live in the front matter as the following code:

    [View PDF](../assets/pdfs/<filename>.pdf){: .btn .btn--info ..btn--large}
    [Download BibTex](../assets/bibtex/<bibfile>.bib){: .btn .btn--info ..btn--large}

These buttons should be updated to the correct files by changing the [short link](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/Tips-and-Tricks.md). 

For example, a [short link](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/Tips-and-Tricks.md) is **/assets/bibtext/<bibfile>.bib**. If you Bibtex is correctly uploaded into **assets > bibtex**, you should be able to change the <bibfile> to the correct file name, and when someone clicks on the button, the correct file should download or open for them. PDFs should function the same way. 


## Excerpt

The *excerpt* is a piece of front matter that only lives on publication posts. Currently, to display on the main publications page, the *excerpt* is where all author names should be pasted, followed by two <br>s (for spacing). After the spacing, information about the publication outlet, or presentation venue, should be added.


## Header

The header front matter is the large bar that spans the entire window. No changes will need to be made to the *header*, unless you would like to change the image (by uploading a new image within the **assets** folder and linking the updated image) or change the filter to be lighter or darker. 

Depending on the page, there may be no filter or one set to half opacity. To add a filter to a page without one, add: 

	overlay_filter: 0.5

This code should come after **overlay_image** and it should be indented underneath **header:**.

Without the filter (or the closer the number is to 0), the current image will appear more blue. 


## Layout

A page layout is a theme-related piece of front matter. The layout determines how the page will be generally structured. 

In many of the templates and pages, *layout*, is commented out. On some other pages, the *layout* is set to single. 

The page layout will format automatically, but you can make changes to the layout by following [this documentation [Tips-and-Tricks.md](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/Tips-and-Tricks.md).


## Permalink

The *permalink* is what determines the website page's URL. This naming will be important for updating the navigation on the website. 


## Tags

*Tags* help users find a particular kind of post or a group of similar content.

Each publication should receive the “publication” tag. If a publication is related to Haskell, and you would like it to show up on the [Haskell page](https://christinamayr.github.io/SPJ-Test-Bed/haskell/), please use the tag “haskell”. 

Note: You can see all pages currently tagged [here](https://christinamayr.github.io/SPJ-Test-Bed/tags/).


## Table of Contents (toc)

The *toc* front matter stands for table of contents. Like the *author profile*, if you would like the table of contents to display, the data should be set to "true". If you would not like the table of contents to display, change "true" to "false." 

Related to the  *toc* is  *toc_sticky*. When the  *toc_sticky* is set to “true”, the table of content sticks to its location on the page. In other words, as you scroll, the table of contents remains in the same place on the page no matter how far you scroll up or down. 


## Title or Page Title

### For Pages

Your *page title* will be what appears in the header of the page. The title should match your filename (or your file name should match the page title) as well as the permalink.


### For Publications 

Your *publication title* will be what appears in the header of the page. The title should match your publication title, and your filename and permalink should be a shorthand version of the title. 