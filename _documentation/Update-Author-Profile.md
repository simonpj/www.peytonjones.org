# What

The author profile is located on the left hand side of the web pages. It includes an image, your name (Simon Peyton Jones), a title, location, and some links to social media profiles (as well as email and GitHub). 

    Note: to display the profile on a page, add "author profile: true" to the page metadata (denoted by the set of three hyphens ---). To hide the profile on a page, add "author profile: false" to the page metadata.

## What This Document Includes

- Where to find & update the file that contains the content for your author profile
- How to change your title & location
- How to change your social media and contact links


# How 

## Find & Update the Config File

To make changes to the author profile, you will have to make changes to the [_config.yml](LINK) file, which is located within the main branch of the webpage. 

Open the [_config.yml](LINK) file. Around the 100th line of code (specifically 103 at time of writing), you will find a section titled "site author." This section should look like this:

# Site Author
author:
name             : "Simon Peyton Jones"
avatar           : "/assets/images/spj-avatar.jpg"
bio              : "Tagline text"
location         : "Cambridge, England"
email            : simon.peytonjones@gmail.com
links:
    - label: "simon.peytonjones@gmail.com"
    icon: "fas fa-fw fa-envelope-square"
    # url: "mailto:simon.peytonjones@gmail.com"
    - label: "Website"
    icon: "fas fa-fw fa-link"
    # url: "https://your-website.com"
    - label: "Twitter"
    icon: "fab fa-fw fa-twitter-square"
    url: "https://twitter.com/simonpj0"
    - label: "Facebook"
    icon: "fab fa-fw fa-facebook-square"
    # url: "https://facebook.com/"
    - label: "GitHub"
    icon: "fab fa-fw fa-github"
    url: "https://github.com/simonpj"
    - label: "Instagram"
    icon: "fab fa-fw fa-instagram"
    # url: "https://instagram.com/"
    - label: "LinkedIn"
    icon: "fab fa-fw fa-linkedin"
    url: "https://www.linkedin.com/in/simonpj/"
Within this section, you can make changes to the spelling of your name, your avatar, your location, and the links to email you or view one of your social networking sites.


## Change Your Title and Location

To make changes to the author profile within the [_config.yml](LINK) file, you will need to change out some of the content currently within quotes. For example, to change your name from “Simon Peyton Jones” to “Simon P. Jones”, you will have to change the content after **name:** within the quotation marks.


## Change Your Author Image

To change your author image, you will first need to upload the image by uploading a new image within **assets > images**. Once the image is uploaded, you will link the updated image using a [short link](link) within the quotes to the right of **avatar:**.

Tip: We recommend uploading a square image in which you are at the center of. 


## Change Your Social Links

To update any social or contact links, you will (again) need to change out some of the content currently within quotes or directly after the colons. For example, to change your email from “simon.peytonjones@gmail.com” to “spj@gmail.com”, you will have to change the content after **email:**.

Note: Currently, anything with an octothorpe (or hash symbol) before it is commented out, and therefore, it will not display on the front end. To display one of the icons, and a link to your respective account, you will need to remove the octothorpe/hash and update the **url:**