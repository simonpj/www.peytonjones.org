# What

- site navigation helps users move aroudn the website. 
- menu located on top of the page

# How

- site navigation  can be access in _data folder within navigation.yml file.
- the file will include the following:

main:
  - title: "Publications"
    url: /publications/
  - title: "Research Skills"
    sublinks:
      - title: How to write a great research paper
        url: /great-research-paper/
      - title: How to give a great research talk
        url: /great-research-talk/
      - title: How to write a great grant proposal
        url: /great-grant-proposal/
  - title: "Haskell"
    url: /haskell/
  - title: "About"
    sublinks:
      - title: Bio & Pictures
        url: /bio-and-pictures/
      - title: Awards & Honours
        url: /awards/


To add another page to the menu, you will need to include:
- Title: "title"
    url: URL Here

You can also create drop down menus by addng a sublinks code.

DROP DOWN BUTTON EXAMPLE
  # - title: Support
  #   sublinks:
  #     - title: FAQ
  #       url: /faq/
  #     - title: Documentation
  #       url: /Documentation/
  #     - title: Customer Support
  #       url: /Support/