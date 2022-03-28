# What

Publication pages are the individual landing pages that include information about a publication, as well as the option to download the PDF of the publication or BibTex. Currently, our team has added publications through... Publications prior to 2000 were bulk added.


# How

To add a new publication page, navigate to the "templates" folder located  within **_documentation > _templates**. Within that folder, there is a template for a publications page, titled **pubs.md**. Using the template ensures all of the correct information, especially metadata, is included in the correct order on the page. 

Tip: You can quick copy the template but clicking **Copy Raw Contents** next to **Edit** on the markdown file. 

After copying the template, navigate to the **_posts** folder within the main branch of the website. All publications must live within this folder for them to display properly on the publications page.

When within the **_posts** folder, select **Add File > Create a New File** on the righthand side of the page. Follow the following naming conventions for your publication post:
- Each publication should be titled: YEAR-MONTH-DATE-TITLE.md or 0000-00-00-title.md.  
    - Use "01" for the month and/or day when an exact date is unavailible. 
    - Example: 2003-01-01-wearing-the-hair-shirt.md 
- Make sure to include ".md" in the title to ensure the file is using the markdown format.

After completing the filename correctly, paste the template into the code box (name!). You should see the following metadata, followed by space to add the content.
    ---
    title: "PUBLICATION TITLE"
    excerpt: "AUTHOR NAMES <br><br> Published in <em>JOURNAL</em>
    <br><br>
    [View PDF](../assets/pdfs/<filename>.pdf){: .btn .btn--info ..btn--large}
    [Download BibTex](../assets/bibtex/<bibfile>.bib){: .btn .btn--info ..btn--large}"
    permalink: /PERMALINK-HERE/
    header:
        overlay_image: /assets/images/spj-stock-header.jpg
        overlay_filter: 0.5
    tags:
    - publication
    - TAG 2
    ---

Within the file, there will be many comments to help with the process. 

So Mally doesn't forget:
- Include how to move buttons out of header
