<img src="images/#.png" width="600" style="margin: 0;"> OR <gif demo>
***
# The Lord of the Rings – _One Site to Find Them All_
***

## Overview
This site was conceptualised from the perspective of a _Lord of the Rings_ fan. Users should find it useful for recollecting information on the films, various characters of Middle-earth, and books written by J. R. R. Tolkien et al. This site has been created by a LOTR fan for LOTR fans, both current and hopefully future ones.

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

Process:
initial idea to use 3 apis: lotr heroku, omdb,

random length, issue of hitting max length.
***

## Features
#### Landing Page
This page is designed to look like an entry point from this world into the rich world of Middle-earth. It is left uncluttered and simple, with just a map of Middle-earth and the infamous One Ring encircling the map. Click on "LET'S GO!" to enter the fantasy realm of the Lord of the Rings, beginning with the _Films_ page.

The user may also directly click on the __"Films"__, __"Characters"__ and __"Books"__ buttons on the navbar to directly go to each section.

#### Films Page
The menacing darklord Sauron welcomes the user here. The user may select any of the six movies of the series from the dropdown list and press "GO!".

He or she will be brought to a freshly generated page with information on the selected film. The film's poster and ratings are also displayed. The API used in this section is [OMDb API](http://www.omdbapi.com/).

The background image of the results page depicts the intense battle between Gandalf the Grey and Durin's Bane at the Bridge of Khazad-dûm. Anyone who has watched _The Fellowship of the Ring_ should be able to clearly remember the intensity of this scene.

#### Characters Search Page
Upon reaching this page, the user is met with a scene of the original Fellowship of the Ring on their journey. When the search result page appears, its backdrop shows Gandalf, Bilbo and Thorin and his company of 13 dwarves on their travels.

Upon inputting a character name from the series and clicking "GO!", character bio-data such as *race*, *gender*, *birthdate*, *date of death* are retrieved via the API. An external *Wiki URL* is also provided if the user wishes to read up more on the character.

This is followed with a sample of 3 quotes of the same character from the films. The list of searchable characters are listed [here](https://docs.google.com/spreadsheets/d/1k1FDWrv4nhs1EtJ8tgtxgK5ptsc2GxoAdIpfq1DAHos/edit?usp=sharing). A for-loop was written to randomly select and display three quotes retrieved from the API. A sample of the for loop can be found in the section [below](#Additional-notes-on-development-of-site-Features) on additional development notes.

[Restdb.io API](https://restdb.io/) was utilised for this section.

#### Books Page
The books selection page has a richly coloured background taken from _The Hobbit Trilogy_ films. The user may select any of the books he or she is interested, click "GO!" and the information (_Author, First Published, Description and Synopsis_) on the selected book will be displayed on a fresh page. The dragon Smaug sends his greetings from the background of this page.


### Additional notes on development of site Features

#### Character Search Feature
Intially this developer planned to use the [Lord of the Rings API](https://the-one-api.dev/) for the __character search__ feature, as well as most of the other features on this site. However, midway through the development of this project. The API was updated to a newer version, and previously workable GET requests ceased to function.

A workaround was devised, in which character bio-data and character quotes were exported from the API and uploaded to [restdb.io](https://restdb.io/). Moving forward, GET requests for character search was all directed to the restdb API.

Due to limitation of the free development plan the developer uses on restdb.io, only 2,500 records are allowed. Therefore a secondary database had to be created to accomodate data of both the _character bio_ and _character quotes_.

The developer wrote a code to randomly generate three quotes and display to html. The code block is extracted and appended here:

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
The initial choice to obtain books information was via GET requests from [Open Library Books API](https://openlibrary.org/dev/docs/api/books). However, upon testing, it was discovered that data returned from the API was not consistent. For example, "date-published" was in different paths in the JSON retrieved. Hence it was decided to set up a database on restdb.io, and proceed with the work on implementing this feature.
***

### Future implementations
**1. Changing the background image everytime this site is loaded, or when a button is clicked**
   *- This developer thouroughly enjoyed playing around with JavaScript and playing around with JavaScript, and believes this is definitely doable.*

**2. Implementing fuzzy search (for example [Fuse.js](https://fusejs.io/)) to the character search**
    *- Current search limits to strict matching of the character name casing. For example searching for "gandalf" returns no results. Only "Gandalf" with a capital "G" gives results.*

**3. Returning three totally random quotes when a character is searched**
*- At the moment only three consecutive quotes are returned due to the use of a for loop.*

**4. Adding a "Back" button on the results page for each section.**
*- The user may still click on the "Films", "Characters" or "Books" button on the Navbar to go to any section they want. But this will be a nice touch, especially if the user still wish to remain in the same section.*

**4. Writing a code to break up the long paragraphs in _synopsis_ or _description_ of the books results page.**
*- Some books have long description and synopsis that do not look viewer friendly, espcially on mobile.*

***

## Technologies Used
This project uses JavaScript, HTML and CSS.
VS Code
Bootstrap CDN
jQuery
Popper.js
External images are stored and linked from [Dropbox]().
Google Chrome Developer Tools
Am I Responsive
Screen to Gif
Favicon Generator https://favicon.io/favicon-converter/
[Postman](https://www.postman.com/)
[JSONView](https://github.com/gildas-lormeau/JSONView-for-Chrome)
[JSON Path Finder](https://jsonpathfinder.com/)
restdb
OMDB
heroku app
OpenLibrary


W3C HTML Validation
W3C CSS Validation
ESLint

***

## Testing
### Landing Page
### Issues and Bugs
1. form validation not present. form validation capital letter on restdb
2. Scrollspy: Unable to align the page nicely upon click
3. Update of navbar heading sometimes not accurate, especially when scrolling fast
4. some of the book images appear stretched upon adding
5. blue "LET'S GO!" button
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
Readme reference
Jim Morel ([GitHub profile](https://#))
[Anna Greaves Readme](https://raw.githubusercontent.com/AJGreaves/portrait-artist/master/README.md)

#### Images
__Images:__
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


__Fonts and Icons:__


__Scripts:__
1. Bootstrap 4.0
2. Bootstrap template
3.

__APIs__

#### API
#### Code

#### Care


## Acknowledgements
**Malcolm Yam** for being the ever so encouraging and supportive, "tough-loving guru".
**Arif Rawi** for enthusiastically sharing what he knows (and passionately finding out what he doesn't).
**Collin Wu** for the 100vh inspiration, and the generous suggestions for  improvements and learning.
***
W3C schools

For education purposes only

