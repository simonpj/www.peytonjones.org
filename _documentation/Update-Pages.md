# What

This document provides an overview of how to make changes on pages already created. While some of the edits are relatively easy (such as updating the text content), others are more difficult (adding new images to a gallery).

## What This Document Includes

- How to update text content on a page
- How to add images to a gallery
- How to embed other content (such as videos) for a publication post


# How 

## Update Text Content

To update the text on a page, you will have to find and open the page file on GitHub. After opening the file (which should be a Markdown file), you will find the text you would like to change. Then, simply, you can make the change in the file. 

    Tip: Here is a helpful website for [Markdown syntax & formatting](https://www.markdownguide.org/basic-syntax/).

After making the necessary changes, commit the file. 


## Add Images to Gallery

Currently, the only gallery on your website are for the speaking images on the [Bio & Pictures](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_pages/bio-and-pictures.md) page. To add more images here, please follow these steps.


### Step 1
Open the [**Bio & Pictures**](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_pages/bio-and-pictures.md) file. When in the file, scroll down to the Pictures heading. Add a new sub-heading (at heading level two) by copying and pasting:

    <a name="high-res-2019"></a> 
    ## High Resolution, 2019 
    {% include gallery id="gallery-high-2019" %}

This should come before the last sub-heading, which at the time of writing is “High Resolution 2019.” Update the “a name”, the heading (denoted by the two hash signs) and the “gallery id”. 

Just above the galleries is a set of links that allow a user to easily navigate to the images they would like. Add another link to your new gallery by copying and pasting:

* [High Resolution, 2019](#high-res-2019)

Just above the line. “High Resolution, 2019” is the title of the link. “#high-res-2019” should be changed to match the “a name” you set below. This ensures that when a user clicks the link, they are taken to the correct place on the page.


### Step 2

You will put the gallery images within the front matter of the page. Upon scrolling to the top of the file, you will see other galleries after “header:” Copy the following code and paste it above the most recent gallery (at the time of writing that “gallery-high-2019”) and after “header:”

    gallery-id-here: 
        - url: /assets/images/<folder>/<image-name1.jpeg>
        image_path: /assets/images/<folder>/<image-name1.jpeg> 
        alt: "Image Name 1" title: "Image Name 1" 
        - url: /assets/images/<folder>/<image-name1.jpeg>
        image_path: /assets/images/<folder>/<image-name1.jpeg> 
        alt: "Image Name 1" title: "Image Name 1" 
        - url: /assets/images/<folder>/<image-name1.jpeg>
        image_path: /assets/images/<folder>/<image-name1.jpeg> 
        alt: "Image Name 1" title: "Image Name 1" 
        - url: /assets/images/<folder>/<image-name1.jpeg>
        image_path: /assets/images/<folder>/<image-name1.jpeg> 
        alt: "Image Name 1" title: "Image Name 1"


The “gallery-id-here” should be changed to the same “gallery id” that you used in Step 1. For the images that follow, you will need to update:

- The  [short links](https://github.com/simonpj/www.peytonjones.org/blob/gh-pages/_documentation/Tips-and-Tricks.md) (URL, should be same as file path)
- The file path
- The alternative text (which is what people see when they hover their mouse over the image)
- The title

The above “template” can be copied for as many images as you would like. You may also remove extra images if you have less than four.


### Step 3

Once you are done adding images, commit the changes to the page.


## Embed New Content for Publication Post

Content can easily be added to publications as you create more videos or other resources in which you would like to link to.


### Adding a Link to a GitHub Repository

We suggest, if you would like to add a link to a GitHub Repository, to do so using Markdown hyperlinks. Hyperlinks can be created using [ brackets around words you would like to link ] (LINK HERE) followed by a set of parentheses. 

For example, if we wanted to create a link on the “Triemaps That Match” publication page to the respective repository, we would suggest adding something like:

[View the Github Repo here.](https://github.com/simonpj/triemap-paper)

Once you are finished, commit the changes to file.


### Adding an Embedded Video

If you have created a video and would like to add that to a publication page, you will need to copy the following:

    {% include video id="EPGqzkEZWyw" provider="youtube" %}

Note: We suggest pasting this after the Abstract of the work. We also suggest providing a short description of what the video includes.

This expression is used to embed a video from Youtube. The video ID in the above example is 'EPGqzkEZWyw'. This ID can be found on Youtube in a few different locations: 

- In the video URL (after "watch?v=") 
- Under "share", which creates a link such as "https://youtu.be/EPGqzkEZWyw"
- In this instance, the video ID is found after the backslash.

To update this expression, change the video ID to the video ID of the correct video.

Once you are finished, commit the changes to file.
