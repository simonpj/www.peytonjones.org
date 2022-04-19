# What

Website navigation helps users move around the website and find information. The navigation is considered to be the menu, which is located on the top of the page.

## What This Document Includes

- How to update the website navigation (menu)


# How 

To update the website navigation, you will need to open a file within the **_data** folder. Within the **_data** folder is a file titled [**navigation.yml**](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_data/navigation.yml). 

Upon opening the file, you should see the following:

  Main:
  - title: "Publications"
    url: /publications/
  - title: "Research Skills"
  Sublinks:
  - title: How to write a great research paper
    url: /great-research-paper/
  - title: How to give a great research talk
    url: /great-research-talk/
  - title: How to write a great grant proposal
    url: /great-grant-proposal/
  - title: "Haskell"
    url: /haskell/
  - title: "About"
  Sublinks:
  - title: Bio & Pictures
              url: /bio-and-pictures/
          - title: Awards & Honours
              url: /awards/

This is the current navigation or menu for your website.

To add another page to the menu, you will need to include:

  - Title: "title"
    url: URL Here

This information includes the page title (“title”) as well as the page’s URL or permalink, which was set within the page’s front matter. 

  Note: Above, the URLs are all [short links](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_documentation/Tips-and-Tricks.md). When adding a new page, we recommend using a [short link](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_documentation/Tips-and-Tricks.md) with the page’s established permalink.

However, if you want to add a new sub-page to the menu, the process is slightly different. For example, if I wanted to add a new sub-page to the “Research Skills” menu item, my code would look like this: 

  - title: "Research Skills"
  Sublinks:
  - title: How to write a great research paper
    url: /great-research-paper/
  - title: How to give a great research talk
    url: /great-research-talk/
  - title: How to write a great grant proposal
    url: /great-grant-proposal/
  - title: NEW RESEARCH SKILLS PAGE
    Url: /new-research-skills-page/


If you wanted to create a new menu item with only sub-pages, your code will need to include **sublinks:**. For example, if I wanted to create a new menu item with only sub-pages, my code would look like this:

  - title: "New Menu Item Title"
  Sublinks:
  - title: Title of sub-page 1
    url: /sub-page-1/
  - title: Title of sub-page 2
    url: /sub-page-2/

  Note: If you are creating a group of subpages, the main menu item (e.g. “Research Skills”) cannot be an independent landing page. In other words, you cannot create a “Research Skills” page and have the link activated when someone clicks on “Research Skills” in the menu.
