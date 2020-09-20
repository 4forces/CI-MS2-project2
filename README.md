# The Lord of the Rings – _One Site to Find Them All_
![Desktop Demo:](https://github.com/4forces/CI-MS2-project2/blob/master/assets/img/preview.gif)
***

## Overview
This site was conceptualised from the perspective of a _Lord of the Rings_ fan. Users should find it useful for recollecting information on the films, various characters of Middle-earth, and books written by J. R. R. Tolkien et al. This site has been created by a LOTR fan for LOTR fans, both current and hopefully future ones.

The live website can be accessed [here](https://4forces.github.io/CI-MS2-project2/).

#### Objective
This site offers itself as a key information center for most if not all things related to the Lord of the Rings. Users will be able to quickly retrieve information with regards to the films, characters and books. It is hoped that any one who visits this site can savour a bit of the grandeur of this aweseome series!
***

## UX and UI
The ideal user for this site will be someone who enjoys the Lord of the Rings very much, and wishes to quickly obtain information about the films, characters or books. Anyone who has a general in the Lord of the Rings series should also be able to appreciate the information this site can provide.
The developer made efforts to source for images that will convey the rich background and storyline of this immensely popular series, especially if one has watched the films.
The site design is clean and simple, and should be straightforward to navigate.

#### User Stories
1. "I want to find some quick information on the Lord of the Rings movies, such as its director, cast, and movie ratings." – _LOTR film buff._
2. "I'm interested to retrieve some key information on the characters. For example race and date-of-birth." _– Someone who wants to know the characters better._
3. "What are some random quotes uttered by the characters in the movies?" _– A curious user._
4. "What are the books related to the LOTRs?" _– LOTR Bookworm._

#### Wireframes
##### Films Page
* [Mockup 1: Desktop](https://www.dropbox.com/s/c3wyedi29cb5ys7/films1.jpeg?dl=0)
* [Mockup 2: Mobile](https://www.dropbox.com/s/1b3zc9zkaqoorha/films3.jpeg?dl=0)
##### Characters Page
* [Mockup 1: Desktop - Version 2](https://www.dropbox.com/s/b8ycogwxzkrev9q/char2.PNG?dl=0)
* [Mockup 2: Desktop - Version 1](https://www.dropbox.com/s/6avbajcvthwso0c/char1.jpg?dl=0)
* [Mockup 3: Mobile - Version 2](https://www.dropbox.com/s/zufl470cn1dixhj/char3b.jpeg?dl=0)
* [Mockup 3: Mobile - Version 1](https://www.dropbox.com/s/b43p4yj3dlpweho/char3a.jpeg?dl=0)
##### Books Page
* [Mockup 1: Desktop - Version 2](https://www.dropbox.com/s/r3mkngfnlxvyxkx/books2.PNG?dl=0)
* [Mockup 2: Desktop - Version 1](https://www.dropbox.com/s/y04pf1m5caghqqw/books1.jpeg?dl=0)
* [Mockup 3: Mobile](https://www.dropbox.com/s/ny27nhw9q2f04r4/books3.jpeg?dl=0)

## Features
#### Landing Page
This page is designed to look like an entry point from this world into the rich world of Middle-earth. It is left uncluttered and simple, with just a map of Middle-earth and the infamous One Ring encircling the map. Click on "LET'S GO!" to enter the fantasy realm of the Lord of the Rings, beginning with the _Films_ page.

The user may also directly click on the __"Films"__, __"Characters"__ and __"Books"__ buttons on the navbar to directly go to each section.

#### Films Page
The menacing darklord Sauron welcomes the user here. The user may select any of the six movies of the series from the dropdown list and press "GO!".

He or she will be brought to a freshly generated page ([screenshot](https://www.dropbox.com/s/adagdfje7tpgi6l/film-results.PNG?dl=0)) with information on the selected film. The film's poster and ratings are also displayed. The API used in this section is [OMDb API](http://www.omdbapi.com/).

The background image of the results page depicts the intense battle between Gandalf the Grey and Durin's Bane at the Bridge of Khazad-dûm. Anyone who has watched _The Fellowship of the Ring_ should be able to clearly remember the intensity of this scene.

#### Characters Search Page
Upon reaching this page, the user is met with a scene of the original Fellowship of the Ring on their journey. When the search result page ([screenshot](https://www.dropbox.com/s/10mla8yjap7s4ed/char-results.PNG?dl=0)) appears, its backdrop shows Gandalf, Bilbo and Thorin and his company of 13 dwarves on their travels.

Upon inputting a character name from the series and clicking "GO!", character bio-data such as *race*, *gender*, *birthdate*, *date of death* are retrieved via the API. An external *Wiki URL* is also provided if the user wishes to read up more on the character.

This is followed with a sample of 3 quotes of the same character from the films. The list of searchable characters are listed [here](https://docs.google.com/spreadsheets/d/1k1FDWrv4nhs1EtJ8tgtxgK5ptsc2GxoAdIpfq1DAHos/edit?usp=sharing). A for-loop was written to randomly select and display three quotes retrieved from the API. A sample of the for loop can be found in the section [below](#Additional-Notes-on-development-of-Site-Features) on additional development notes.

At this point in time only exact character names inputs gives results (no fuzzy search). Refer to Item (2) in the ["Future Implementations"](#Future-Implementations) section for further details.

[Restdb.io API](https://restdb.io/) was utilised for this section.

#### Books Page
The books selection page has a richly coloured background taken from _The Hobbit Trilogy_ films. The user may select any of the books from the dropdown list he or she is interested, click "GO!" and the book information (_Author, First Published, Description and Synopsis_) on the selected book will be generated and displayed on a fresh page ([screenshot](https://www.dropbox.com/s/00ph7uif4619kyj/books-results.PNG?dl=0)). The dragon Smaug sends his greetings from the background of this page.

[Restdb.io API](https://restdb.io/) was also utilised for this section. The book cover is obtained simply via its URL from [Open Library Covers](https://openlibrary.org/dev/docs/api/covers).

##### Other Notable Common features
1. Due to a delay retrieving data from the APIs, and generating a new page, a loader icon will appear after clicking on any of the "GO!" buttons, and disappear once the results page has been generated
2. Previous search result pages are cleared upon clicking any of the "GO!" buttons. This is similar to the "clear-previous-results" function, so as to avoid clutter on the site.

### Additional Notes on development of Site Features

#### Character Search Feature
Intially this developer planned to use the [Lord of the Rings API](https://the-one-api.dev/) for the __character search__ feature, as well as most of the other features on this site. However, midway through the development of this project. The API was updated to a newer version, and previously workable GET requests ceased to function.

A workaround was devised, in which character bio-data and character quotes were exported from the API and uploaded to [restdb.io](https://restdb.io/). Moving forward, GET requests for character search was all directed to the restdb API.

Due to limitation of the free development plan the developer uses on restdb.io, only 2,500 records are allowed. Therefore a secondary database had to be created to accomodate data of BOTH the _character bio_ and _character quotes_.

This developer wrote a code to randomly generate three character quotes and display to html. The code block is appended here:

```javascript
//used in for loop to randomly generate 3 quotes from list of character quotes
let lgth = response.data.length;

// set to (lgth - 3) to avoid randomly selecting the last 3 quotes
let maxLgth = lgth - 3;

//random function to return a random quote (from the list of character quotes)
let randomLgth = Math.floor((Math.random() * maxLgth));
console.log('randomLgth= ' + lgth);

for (let i = randomLgth; i < randomLgth + 3; i++) {
    console.log('i= ' + i);
    let quote = response.data[i].dialog;
    let qMovie = response.data[i].movie;
    $('#quote-lst').append(`<li>"${quote}"</li>`);
    $('#quote-lst').append(`<li><em> - ${qMovie}</em></li><br>`);
```

#### Books Feature
The initial choice to obtain books information was via GET requests from [Open Library Books API](https://openlibrary.org/dev/docs/api/books). However, upon trying out, it was discovered that data returned from the API was not consistent. For example, "date-published" was in different paths in the retrieved JSON data. Hence it was decided to set up a database on restdb.io, so as to be able to proceed with the implementation of this feature.
***

### Future Implementations
**1. Changing the background image everytime this site is loaded, or when a button is clicked**
   *- This developer thouroughly enjoyed playing around with JavaScript and playing around with JavaScript, and believes this is definitely doable.*

**2. Implementing fuzzy search (using [Fuse.js](https://fusejs.io/)) to the character search feature. Current search limits to exact matching of the character name.**
    *(a) For example searching for "gandalf" returns no results. Only "Gandalf" with a capital "G" gives results.*
    *(b) Another example, inputting "Aragorn" gives nothing, as the value in the database is "Aragorn II Elessar".*
    *(c) For item (a), a possible solution is to update all database name entries to upper case (e.g GANDALF). Upon user input in character search bar, pass it through the **String toUpperCase() Method** before passing the value to the API via GET request. In this way the user may key in the name in any case, yet should still return a results.*

**3. Returning three totally random quotes when a character is searched**
*- At the moment only three quotes consecutively listed in the database are returned due to the use of a for loop.*

**4. Adding a "Back" button on the results page for each section.**
*- The user may still click on the "Films", "Characters" or "Books" button on the Navbar to go to any section they want. Though this will be a nice touch, especially if the user still wish to remain in the same section.*

**5. Writing a code to break up the long paragraphs in _synopsis_ or _description_ of the books results page.**
*- Some books have long description and synopsis that do not look super viewer friendly, espcially on mobile.*

**6. Explore a solution to have "height: 100vh" for the Films, _Character Search and Books_ result pages on both HiDPI and mobile screens, yet the result contents do not spill over to the next section.**
*(a) The current workaround is to forego "height: 100vh" for the result page for the above-mentioned sections.*
*(b) Not doing so results either in a messed up display on mobile, or (unsightly) non-full-screen display on HiDPI screens. Again, viewer-unfriendly.*

**7. Work out a solution to handle the display misalignment that occurs in the results page in mobile mode.**
*- This tends to appear when the character search results page is generated. Viewer-unfriendly.*

***

## Technologies Used
* [VS Code](https://code.visualstudio.com/)
* JavaScript, HTML and CSS
* Chrome Developer Tools
* [jQuery](https://jquery.com/)
* [axios](https://github.com/axios/axios) to perform various API requests
* [Bootstrap](https://getbootstrap.com/)
* [OMDb](http://www.omdbapi.com/) API
* [Lord of the Rings](https://the-one-api.dev/) API for the raw data on character bio data and character quotes
* [Open Library Books](https://openlibrary.org/dev/docs/api/books) for the raw data on the books
* [restdb.io](https://restdb.io/) API for storing most of the information databases used in this website
* [Postman](https://www.postman.com/) API testing
* [JSON Path Finder](https://jsonpathfinder.com/) - Very useful to manoeuvre through JSON
* [JSON to CSV](https://www.convertcsv.com/json-to-csv.html) to manipulate and prepare data
* [Favicon Generator](https://favicon.io/favicon-converter/) to create the Favicon for the website
* Adobe Photoshop CS6 for image editing and manipulation
* [Am I Responsive?](http://ami.responsivedesign.is/#) to create the GIF image in this README
* [ScreenToGif](https://www.screentogif.com/) to create the GIF image in this README
* External images for this README are stored and linked from [Dropbox](https://www.dropbox.com).
***

## Testing Steps

Manual testing was done to ascertain the functionality of this site. Other than runnng through [W3C HTML Markup Validator](https://validator.w3.org/), [W3C Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/), no other automated testing was performed.

The manual test steps are as follows:

#### Landing Page and Navbar
**1. Click on "LET'S GO!" button**

Expected result: Page scrolls to Films selection section.

**2. Click on "Films", "Characters" or "Books" on the navbar**

Expected result: Page scrolls to Films the respective sections.

**3. Click on "The Lord of the Rings" on the navbar**

Expected result: Page scrolls back to landing page.

**4. Scroll the page down to "Films", "Characters" and "Books" sections.**

Expected result: The "Films", "Characters" and "Books" on the navbar light up when respective section is in viewport.

#### Films Page
**Select a film and press the "GO!" button**

Expected results:

(a) Glowing spinner appears while retrieving data and generating results page

(b) A new page with the film info is generated

(c) Glowing spinner disappears

(d) View port auto scrolls to the newly generated page


#### Character Search Page
**1. Type in a character name in full and similiar casing as listed in the [list of searchable names](https://docs.google.com/spreadsheets/d/1k1FDWrv4nhs1EtJ8tgtxgK5ptsc2GxoAdIpfq1DAHos/edit?usp=sharing),  and press the "GO!" button**

Expected results:

(a) Glowing spinner appears while retrieving data and generating results page

(b) A new page with the character info and three random consecutive quotes are generated

(c) Glowing spinner disappears

(d) View port auto scrolls to newly generated page


**2. Type in something that is not listed in [list of searchable names](https://docs.google.com/spreadsheets/d/1k1FDWrv4nhs1EtJ8tgtxgK5ptsc2GxoAdIpfq1DAHos/edit?usp=sharing), or leave the search bar blank blank**

Expected results:

(a) Glowing spinner appears while attempting to retrieve data

(b) A browser alert pops up prompting the user to enter the full name with correct casing

(c) Upon clicking "ok" glowing spinner disappears

(d) No data is retrieved, and hence no new page is generated due to errorneous user input

#### Books Page
**Select a book and press the "GO!" button**

Expected results:

(a) Glowing spinner appears while retrieving data and generating results page

(b) A new page with the book info is generated

(c) Glowing spinner disappears

(d) View port auto scrolls to the newly generated page


### Issues and Bugs
1. "Scroll into view" does not align the pages nicely to the top. There is some offset.
2. The glowing of "Films", "Characters" and "Books" on the navbar does not update according to the section displayed, especially when scrolling quickly on mobile.
3. Some of the book cover images appear stretched in HiDPI screen.
4. The "LET'S GO!" button on the landing page appears blue on press and hold.
5. In mobile view, the character searh results page sometimes has misalignment and display issues. It is suspected this happens when the content (for e.g. url) is too long and pushes its \<table> container to the right of the screen.
6. Upon clicking "GO!" on the character search page, the screen scrolls to other pages.

***

## Deployment
This site was largely developed using [VS Code](https://code.visualstudio.com/), and pushed to GitHub from VS Code. [Gitpod](https://gitpod.io/workspaces/) was initially used during the initial stages of development.
The steps used to deploy this project is be divided into two parts:

**(a) Creating the Repository**
1. Login to GitHub.
2. Click on the "+" sign at the top right hand corner of the screen, and select "New repository".
3. Input a unique name under "Repository name", and an optional description of the to-be-created repository.
4. Select the option of making the repository "Public".
5. Check the option "Add a README file".
6. Click on the  "Create Repository" button.
7. User will be brought to the newly created repository page.

**(b) Deploying to GitHub Pages**
1. On the menu-bar, click on "Settings" (Beside the gear icon).
2. Scroll down to "GitHub Pages" section.
3. Under "Source", select "Branch: master".
4. Click "Save", and the website will be deployed.
5. Scroll down to "GitHub Pages" section again, where the deployed link can be retrieved.
6. This project can be accessed at the deployed link [here](https://4forces.github.io/CI-MS2-project2/).
***

## Credits

#### Images

There are numerous awesome looking images on the Lord of the Rings. The beautiful images on this site were inspired and decided upon by sieving through these list of websites:

https://www.gamespot.com/gallery/amazons-lord-of-the-rings-tv-show-everything-we-kn/2900-3493/#6
https://hipwallpaper.com/one-ring-to-rule-them-all-wallpapers/
https://www.artstation.com/artwork/a5P2R
https://www.wallpaperup.com/488965/Lord_of_the_Rings_Heroes_frame_from_the_movie.html
https://wallpaperaccess.com/lotr-movie
https://wall.alphacoders.com/big.php?i=434813
https://wallpapersden.com/lord-of-the-rings-4k-wallpaper/1920x1080/
https://wallpaperset.com/lord-of-the-rings-backgrounds
https://wallpaperset.com/lord-of-the-rings-backgrounds
https://www.syfy.com/syfywire/russian-church-fights-construction-of-a-real-lotr-eye-of-sauron
https://www.wallpapertip.com/wpic/TJRhRi_sauron-the-lord-of-the-rings-by-eduardoleon/
https://shadowofwar.fandom.com/wiki/Mordor?file=Yre1o.jpg
https://wallpapercave.com/w/wp1861654
https://wall.alphacoders.com/tags.php?tid=373

#### Layout
* Landing page look and layout, buttons from [Start Bootstrap](https://startbootstrap.com/themes/creative/)

#### Acknowledgements
**Malcolm Yam** for being the ever so encouraging and supportive, "tough-loving guru".
**Arif Rawi** for enthusiastically sharing what he knows (and passionately finding out what he doesn't).
**Collin Wu** for the 100vh inspiration, and the generous suggestions for  improvements and learning.
**[W3C schools](https://www.w3schools.com/)**. Can't remember how many times I ended up here...

#### Readme References
* Jim Morel for generously sharing on how to write a README. Jim's GitHub page [here](https://github.com/jimlynx)
* A Greaves README sample on [GitHub](https://raw.githubusercontent.com/AJGreaves/portrait-artist/master/README.md)

**For education purposes only.**

