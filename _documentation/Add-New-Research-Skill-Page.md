# What

Research skills pages include "How to Write a Great Research Talk..." <add other pages here.> These pages include a table of contents, and use either the simple or refined page template. 


# How

## Copying the page template

To add a new research skills page, navigate to the "templates" folder located  within **_documentation > _templates**. Within that folder, there is a template for the two types of pages. 

The first is a **simple page**. A **simple page** template is used for new website pages that only include written content (text) and links to other webpages. This template can be easily formatted in Markdown.

The second is a **refined page**. A **refined page** template is used for new website pages that includes both this text and these links, but also can include things such as images or videos.

Determine which template you will need for the new page. Using these templates ensures all of the correct information, especially metadata, is included in the correct order on the page. Copy the template.

    Tip: You can quick copy the template but clicking **Copy Raw Contents** next to **Edit** on the markdown file. 

After copying the template, navigate to the **_pages** folder within the main branch of the website. 

When within the **_pages** folder, select **Add File > Create a New File** on the righthand side of the page. Follow the following naming conventions for your publication post:
- Each page should be titled appropriately  
- Make sure to include ".md" in the title to ensure the file is using the markdown format.

After naming the file, paste the template into the code box (name!). You should see the following metadata, followed by space to add the content.
    ---
    <!--# layout -->
    title: "PAGE TITLE HERE"
    author_profile: true
    permalink: /link-here/
    header:
        overlay_image: /assets/images/spj-stock-header.jpg 
        overlay_filter: 0.5
    ---


## Updating the metadata

Within the file, there will be many comments to help with the process, but you will need to update the metadata to reflect on the contents of your paper.

As you will see above, the first piece of the metadata (layout) is commented out. The page layout will format automatically, but you can make changes to the layout by following this documentation...

The second piece is the page title. Your page title will be what appears in the header of the page. The title should match your filename (or your filename should match the page title) as well as the permalink.

The author profile is the content that displays on the lefthand side of the screen: your picture, name, title, and social links are all apart of the profile. If you would like the profile to display, keep the "true". If you would not like the profile to display, change "true" to "false." 

The permalink is what determines the website pages URL. This naming will be important for updating the navigation on the website. 

Finally, no changes will need to be made to the header, unless you would like to change the image (by uploading a new image within the "assets" folder and linking the updated image) or change the filter to be lighter or darker. Currently, the filter is set to half opacity. Without the filter (or the closer the number is to 0), the image will appear more blue. 


## Updating the page

After you have completed the necessary changes to the metadata, begin adding the page content to the file. This may mean copying & pasting content from another webpage or document, or drafting it right in the markdown file. There will be comments in the template to assist with formatting, but here is another resource for formatting in Markdown.

Once you have completed adding the page content, commit the file. You may commit the file directly to your website branch, or you can create a branch to complete a pull request and merge. 


## Adding the page to the website navigation

Once your page is "published" (meaning merged into the website branch), you will need to add it to the website navigation for users to be able to navigate to the page. Please follow the steps outlines in the Navigatation documentation (site-navigation.md).

