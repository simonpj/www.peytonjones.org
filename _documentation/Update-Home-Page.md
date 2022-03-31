# What

Your home or landing page is the first space people see when they come to your website. Currently, your home page includes other pieces of content (such as your author profile and Research Skills pages), but it also links to other resources.

## What This Document Includes

- How to update the home page content
- How to add a new Research Skills page to the home page 


# How 

To update the home page, you will need to open a file within the main website branch titled [**index.md**](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/index.md).

Upon opening the [**index.md**](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/index.md) file, you will see the following front matter.

    ---
    layout: single
    author_profile: true
    title: "Home"
    toc: true
    toc_sticky: true
    classes: ""
    Header:
    overlay_image: /assets/images/spj-stock-header.jpg
    Feature_row:
    - image_path: /assets/images/spj-paper.jpg
    alt: "How to write a great research paper"
    excerpt: "How to write a great research paper"
    url: "/great-research-paper/"
    btn_label: "See Video"
    btn_class: "btn--primary"
    - image_path: /assets/images/spj-talk.jpg
    alt: "How to give a great research talk"
    excerpt: "How to give a great research talk"    
    url: "/great-research-talk/"
    btn_label: "See Video"
    btn_class: "btn--primary"
    - image_path: /assets/images/spj-proposal.jpg
    alt: "How to write a great grant proposal"
    excerpt: "How to write a great grant proposal"
    url: "/great-grant-proposal/"
    btn_label: "Read More"
    btn_class: "btn--primary"
    ---

## Update the Front Matter

Within the file, there will be many comments to help with the process, but you will need to update the front matter to reflect on the contents of your page. On this type of page, you will only need to make changes to the feature row front matter. The process is described below.


### Add a New Research Skills Page

The last piece of the front matter are links to the Research Skills pages. To add another Research Skills page, first review the documentation within the document [Add-New-Research-Skill-Page.md](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/Add-New-Research-Skill-Page.md). 

After you have created your new Research Skills page, you will need to add the page to the *feature row*. For example, if I added a new Research Skills page, I would add the following to my front matter (under Feature_row): 

    - image_path: /assets/images/<new-image>.jpg
    alt: "How to add another Research Skills page"
    excerpt: "How to add another Research Skills page"
    url: "/new-research-skills-page/"
    btn_label: "Read More"
    btn_class: "btn--primary"

Changes to some of the content above would include adding a new image for the page, changing the **alt** and **except**, adding the new **url/permalink**, and if needed, changing the text that appears on the button (**btn_label**) from “Read More” to whatever is most relevant to the page. 

This information will automatically be populated under “Research Skills” through the strings currently underneath the heading. 


## Update the Page

After the front matter is the page content. Changes can be made to this text by making usually text-based changes in the file and using Markdown for formatting. 
