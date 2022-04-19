# What

Research Skills pages include “How to Write a Great Research Paper,” "How to Give a Great Research Talk," and “How to Write a Great Grant Proposal.” These pages include a table of contents, and use either the simple or refined page template.

## What This Document Includes

- How to add a new Research Skills page


# How 

## Create a New File 

### Step 1

To add a new page, first copy the template for the appropriate page. For more detailed information on templates and how to copy them, review the document [How-to-Use-Templates.md](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_documentation/How-to-Use-Templates.md).


### Step 2

Navigate to the **_pages** folder, then select **Add File > Create a New File** on the right hand side of the page. Follow the following naming conventions for your publication post: 

- Each page should be titled appropriately 
- Make sure to include ".md" in the title to ensure the file is using the Markdown format. 


### Step 3

After naming the file, paste the template into the code block. You should see the following front matter, followed by space to add the content.
    ---
    <!--# layout -- >
    title: "PAGE TITLE HERE"
    author_profile: true
    permalink: /link-here/
    toc: true 
    toc_sticky: true
    classes: “”
    header:
            overlay_image: /assets/images/spj-stock-header.jpg 
            overlay_filter: 0.5
    ---

## Update the Front Matter

Within the file, there will be many comments to help with the process, but you will need to update the front matter to reflect on the contents of your page. On this type of page, you will need to make changes to the following front matter: title and permalink. You can find more information about how to make these changes in the [Front Matter documentation (Change-Front-Matter.md)](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_documentation/Change-Front-Matter.md).


## Update the Page

After you have completed the necessary changes to the front matter, begin adding the page content to the file. This may mean copying & pasting content from another web page or document, or drafting it right in the Markdown file. There will be comments in the template to assist with formatting, but here is another resource for formatting in Markdown.

Once you have completed adding the page content, **commit** the file. You may commit the file directly to your website branch, or you can create a branch to complete a pull request and merge. For your page to display on the front end, the changes must be merged on the website branch.


## Add the Page to the Website Navigation

Once your page is "published" (meaning merged into the website branch), you will need to add it to the website navigation for users to be able to navigate to the page. Please follow the steps outlined in the [Navigation documentation (site-navigation.md)](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_documentation/Update-Site-Navigation.md).


## Add the Page to the Home Page

Currently the other Research Skills pages display on the homepage. To see how to add a new Research Skill page to the home page, review the documentation around [updating the home page (Update-Home-Page.md)](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_documentation/Update-Home-Page.md). 
