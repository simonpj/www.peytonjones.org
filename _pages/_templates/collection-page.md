<!-- a collection page is a page that culminates different articles within a folder and creates a link list. --> 

<!-- 1: to create a new collection page, create a new markdown file under _pages. In the markdown file, copy and paste the following metadata: -->

  ---
  title: TITLE HERE
  layout: collection
  permalink: /link-here/
  collection: GOES HERE
  ---

  <!-- You can also copy this template and remove all of these comments around the metadata. --> 

  <!-- To break down each piece of the metadata, anything within the two sets of '---' at the top of a page is considered page metadata.
  "Title:" refers to the title of your collection. Please title your collection appropriately and descriptively.
  "Layout:" refers to the type of layout on the page. This should always be followed with 'collection' for a collection page.
  "Permalink:" refers to the URL of your collection page. 
  "Collection" refers to the title of your collection. We recommend titleing this consistently with your 'title'. --> 
  
  <!-- Commit the markdown file. -->

<!-- 2: Create a collection folder. This folder should be created on the main branch for the website. We recommend titling the folder "_TITLEofCOLLECTION". Commit the folder. -->

<!-- 3: After creating this new markdown file / page, as well as your collection folder, you will have to make some changes to your websites config file. These changes ensure your collection is populating with the correct content. --> 
  
  <!-- The config file is located under the main branch of the repository. Open the file, and click "edit." -->
  
  <!-- Within the config file, there is a section of #collections. Under this, you should see two collections already created: publications and Haskell. -->
  
  <!-- To add another collection, copy the following and paste it underneath the Haskell collection:

     COLLECTION TITLE:
          output: true
          permalink: /COLLECTION-TITLE/:path/

  Change "collection-name" in the above code to the appropriate titling for your collection. --> 
  
  <!-- Right below this area in the config file, you will see # Defaults. Under this heading, you will have to add more code. You should see a subheading for the other created collections, such as #_publications and #_haskell. -->
  
  <!-- Copy & paste the following code after #_haskell (or the most recently added collection) and before #_pages:
      
     # _COLLECTION NAME
     - scope:
        path: ""
        type: COLLECTION TITLE
      values:
        layout: single
        author_profile: true
        classes: wide
        share: false

    After adding this code and making the necessary changes, commit the config file. --> 

  <!-- 4: Add the collection page to the navigation. --> 

