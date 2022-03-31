# What

Publication pages are the individual landing pages that include information about a specific publication, as well as the option to download its assets (such as the PDF, slides, or BibTex file). Currently, our team has added publications through 2010. Publications prior to 2010 link to the Microsoft site.

## What This Document Includes

- How to add a new publication post


# How 

## Create a New File

### Step 1

Copy the template for publications. For more detailed information on templates and how to copy them, review the document [How-to-Use-Templates.md](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/How-to-Use-Templates.md).


### Step 2

After copying the template, navigate to the [**_posts** folder](https://github.com/christinamayr/SPJ-Test-Bed/tree/gh-pages/_posts) within the main branch of the website. **All publications must live within this folder for them to display properly on the publications page.**

When within the **_posts** folder, select **Add File > Create a New File** on the right hand side of the page. Follow the following naming conventions for your publication post: 

- Each publication should be titled: YEAR-MONTH-DATE-TITLE.md or 0000-00-00-title.md.  
- Use "01" for the month and/or day when an exact date is unavailable. 
- Example: 2003-01-01-wearing-the-hair-shirt.md 
- Make sure to include ".md" in the title to ensure the file is using the Markdown format.


### Step 3

After naming the file, paste the template into the code block. You should see the following front matter, followed by space to add the content.

    ---
    title: "PUBLICATION TITLE"
    excerpt: "AUTHOR NAMES <br><br> Published in <em>JOURNAL</em>
    <br><br>
    [View PDF](../assets/pdfs/<filename>.pdf){: .btn .btn--info ..btn--large}
    [Download BibTex](../assets/bibtex/<bibfile>.bib){: .btn .btn--info ..btn--large}"
    permalink: /PERMALINK-HERE/
    Header:
    overlay_image: /assets/images/spj-stock-header.jpg
    overlay_filter: 0.5
    Tags:
    - publication
    - TAG 2
    ---

## Update the Front Matter

Within the file, there will be many comments to help with the process, but you will need to update the front matter to reflect on the contents of your page. On this type of page, you will need to make changes to the following front matter: title, excerpt, buttons, permalink, and tags.  You can find more information about how to make these changes in the [Front Matter documentation (Change-Front-Matter.md)](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/Change-Front-Matter.md).

    Tip: To hide a publication from indexing on the Publications page, add **hidden: true** to the front matter.

### Move Buttons Out of the Header

Note: If you would like to move the buttons out of the header and into the body of the text, copy 
[View PDF](../assets/pdfs/<filename>.pdf){: .btn .btn--info ..btn--large}
[Download BibTex](../assets/bibtex/<bibfile>.bib){: .btn .btn--info ..btn--large}
And move it beneath the front matter (denoted by the three hyphens —-).


## Update the Page

After you have completed the necessary changes to the front matter, begin adding the page content to the file. This may mean copying & pasting content from another web page or document, or drafting it right in the Markdown file. There will be comments in the template to assist with formatting, but here is another resource for formatting in Markdown.

Once you have completed adding the page content, **commit** the file. You may commit the file directly to your website branch, or you can create a branch to complete a pull request and merge. For your page to display on the front end, the changes must be merged on the website branch.


## Add the Page to the Website Navigation

Because publications are considered to be “posts” and not “pages”, you will **not** have to make any changes to the navigation. If the file is named correctly, it should automatically appear on the [Publications page](https://christinamayr.github.io/SPJ-Test-Bed/publications/). 