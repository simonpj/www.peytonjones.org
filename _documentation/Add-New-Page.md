# What

Website pages hold different forms of content. On your website, pages include content such as the Research talks and videos, as well as landing pages for posts, in the case of the Haskell page. 

While there are currently no plans to add new pages to the website, if there eventually becomes a need to add more content, here are some instructions on how to create a new page.

## What This Document Includes

- How to add a new page


# How 

## Create a New File

### Step 1

Determine which template you will need for the new page. Using these templates ensures all of the correct information, especially front matter, is included in the correct order on the page. 

Copy the template for the appropriate page. For more detailed information on templates and how to copy them, review the document [How-to-Use-Templates.md](LINK).


### Step 2

When within the **_pages** folder, select **Add File > Create a New File** on the right hand side of the page. Follow the following naming conventions for your publication post: 

- Each page should be titled appropriately 
- Make sure to include ".md" in the title to ensure the file is using the markdown format. 


### Step 3

After naming the file, paste the template into the code box (name!). You should see the following front matter, followed by space to add the content.

    ---
    <!--# layout -- >
    title: "PAGE TITLE HERE"
    author_profile: true
    permalink: /link-here/
    header:
            overlay_image: /assets/images/spj-stock-header.jpg 
            overlay_filter: 0.5
    ---

## Update the Front Matter

Within the file, there will be many comments to help with the process, but you will need to update the front matter to reflect on the contents of your page. On this type of page, you will need to make changes to the following front matter: <which front matter you will have to update>. You can find more information about how to make these changes in [Change-Front-Matter.md](LINK).


## Update the Page

After you have completed the necessary changes to the front matter, begin adding the page content to the file. This may mean copying & pasting content from another web page or document, or drafting it right in the Markdown file. There will be comments in the template to assist with formatting, but here is another resource for formatting in Markdown.

Once you have completed adding the page content, **commit** the file. You may commit the file directly to your website (gh-pages) branch, or you can create a branch to complete a pull request and merge. For your page to display on the front end, the changes must be merged on the website branch.


## Add the Page to the Website Navigation

Once your page is "published" (merged), you will need to add it to the website navigation for users to be able to see and get to the page. 

Follow the steps outlined in the [Navigation documentation (site-navigation.md)](https://github.com/christinamayr/SPJ-Test-Bed/blob/gh-pages/_documentation/site-navigation.md).
