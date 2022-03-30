# What

The author profile is located on the lefthand side of the web pages. It includes an image, Simon Peyton Jones, a title, location, and some links to social media profiles (as well as email and GitHub). 

Note: to display the profile on a page, add "author profile: true" to the page metadata (denoted by the set of three hyphns ---). To hide the profile on a page, add "author profile: false" to the page metadata.


# How

To make changes to the author profile, you will have to make changes to the _config.yml file, which is located within the main branch of the webpage. 

Around the 100th line of code (specifically 103 at time of writing), you will find a section titled "site author." This section should look like this:

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

Note: Currently, anything with an octothorpe (or hash symbol) before it is commented out, and therefore, it will not display on the front end. To display one of the icons, you will need to remove the octothorpe/hash.
