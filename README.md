# Hi Simon! Welcome to your website.

Your website is set up within these many different folders on this branch (titled: whatever we title it), each with their own purpose. 

If you are looking to make a change to your website, we recommend visiting the **_documentation** folder first. However, if you just want to an understanding of how the website works, here is an overview of what each folder includes: 


## _data 

This folder includes the navigation (menu), as well as another .yaml file (which is used for formatting). When you create a new page, the navigation may have to be updated. This is a [document](LINK TO DOCUMENT) describing this process in the **_documentation** folder. 


## _documentation

This folder includes the documentation for making updates and changes to the website. Within this folder is a subfolder **_templates**, which provides page templates for your use. You will also find another [README.md file](LINK TO FILE) that details what processes are included in each document. 


## _includes

This folder holds the different “building blocks” of code that the website page layouts use. No changes should need to be made to the files within this folder. 


## _layouts

Related to _includes, these are the different page layouts available. Like _includes, these files should not need to be changed. To change a layout on a specific page, you will alter the metadata of a page file, which will be explained in the documentation.


## _pages

All website pages live within this folder. As you add new pages, you will do so within this folder (**UNLESS** they are publications). 

Within **_documentation > _templates**, there are two types of page templates available: **simple** and **refined.**

- Simple pages are pages that only include text & links. 
- Refined pages are pages that can include text, links, images, videos, and more. 

Within both [the documentation](LINK TO ADD NEW PAGE DOC) and within each template are comments to help you format the pages and include the relevant metadata. 


## _posts

This folder includes all of the publications. Publications are formatted as posts to include metadata such as the date of publication (which helps organize the publications on the front end). 

Within **_documentation > _templates**, there is a template for publication pages. This template includes comments for the metadata, where content should live on the page, and how to add content such as videos or images (as needed). There is also [documentation](ADD LINK) for adding new publications.



## _sass

This is where most of our website *theme* content lives. Like **_includes** and **_layouts**, nothing should be changing here. 


## assets

This final folder holds all of the website assets. These assets include Bibtex files, the website css, images, and publication PDFs. If you are uploading images, Bibtex files, and PDFs on a page, please add them to their respective folder within this folder. You will then include them on the page using a short link.
