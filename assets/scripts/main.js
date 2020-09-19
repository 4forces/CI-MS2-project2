$(function () {

  //test script in console
  console.log("script console is working!!!");



  // scrollspy
  $('body').scrollspy({ target: '#mainNav' });



  //film listing - from omdb
  $('#film-btn').on('click', function () {
    let filmVal = $('#film-search').val();
    console.log("film selected: " + filmVal);
    $('#f-results-pg').empty();
    $('#c-results-pg').empty();
    $('#b-results-pg').empty();

    $("#f-results-pg").removeClass("filmResultClass");
    $("#c-results-pg").removeClass("charResultClass");
    $("#b-results-pg").removeClass("bookResultClass");

    $('#films-loader').show();

    //axios request for film details
    axios({
      method: 'get',
      url: "https://www.omdbapi.com/",
      params: {
        apikey: "9c84f680",
        i: filmVal,
      }
    })
      .then(function (response) {

        console.log(response.data);
        let poster = response.data.Poster;
        let title = response.data.Title;
        let rated = response.data.Rated;
        let released = response.data.Released;
        let runtime = response.data.Runtime;
        let genre = response.data.Genre;
        let director = response.data.Director;
        let writer = response.data.Writer;
        let actors = response.data.Actors;
        let plot = response.data.Plot;
        let awards = response.data.Awards;

        let awdImdbSrc = response.data.Ratings[0].Source;
        let awdImdbVal = response.data.Ratings[0].Value;
        let awdRtSrc = response.data.Ratings[1].Source;
        let awdRtVal = response.data.Ratings[1].Value;
        let awdMcSrc = response.data.Ratings[2].Source;
        let awdMcVal = response.data.Ratings[2].Value;

        //Generate film results on new page
        $("#f-results-pg").addClass("filmResultClass");


        let movieTemplate = `
                <div class='container' id='film-marker'>
                <div id='title' class='row justify-content-center m-3 text-center'>
                    <h2 class="text-white">${title}<h2>
                </div>

                <div id='movie-details' class='row justify-content-center'>
                    <div class='col-lg-3 justify-content-center d-flex'>
                      <img src="${poster}" class="img-fluid img-thumbnail mb-3 img-thumb">
                    </div>

                    <div class='col-lg-9'>
                      <table class="table text-white">
                      <tbody>
                        <tr>
                          <th scope="row">Director</th>
                          <td> ${director}</td>
                        </tr>
                        <tr>
                          <th scope="row">Writers</th>
                          <td>${writer}</td>
                        </tr>
                        <tr>
                          <th scope="row">Cast</th>
                          <td>${actors}</td>
                        </tr>
                        <tr>
                          <th scope="row">Rated</th>
                          <td>${rated}</td>
                        </tr>
                        <tr>
                          <th scope="row">Runtime</th>
                          <td>${runtime}</td>
                        </tr>
                        <tr>
                          <th scope="row">Released</th>
                          <td>${released}</td>
                        </tr>
                        <tr>
                          <th scope="row">Awards</th>
                          <td>${awards}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class='row justify-content-center my-3'>
                    <div class='text-white'>
                      <h4 class="text-center">Plot</h4>
                      <p class="contbox p-3 mx-3">${plot}</p>
                    </div>
                </div>


                <div class='row justify-content-center'>
                  <div id='title-ratings'>
                    <h4 class="text-center text-white">Ratings</h4>
                    <table class="table text-white">
                      <tbody>
                        <tr>
                          <th scope="row">${awdImdbSrc}</th>
                          <td>${awdImdbVal}</td>
                        </tr>
                        <tr>
                          <th scope="row">${awdRtSrc}</th>
                          <td>${awdRtVal}</td>
                        </tr>
                        <tr>
                          <th scope="row">${awdMcSrc}</th>
                          <td>${awdMcVal}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>`

        $('#f-results-pg').html(movieTemplate);

        $('#films-loader').hide();
        $('#f-results-pg')[0].scrollIntoView();

      })
      .catch(function (error) {
        console.log(error);
      })// end of axios request for film details

  }); //closing for   $('#film-btn').on('click', function () {



  //character bio - From restdb API
  $('#char-btn').on('click', function () {
    let char = $('#char-search').val();
    console.log("Character you have searched for: " + char);

    $('#f-results-pg').empty();
    $('#c-results-pg').empty();
    $('#b-results-pg').empty();

    $("#f-results-pg").removeClass("filmResultClass");
    $("#c-results-pg").removeClass("charResultClass");
    $("#b-results-pg").removeClass("bookResultClass");

    $('#characters-loader').show();


    //axios request to retrieve character bio - restdb database 1
    axios.get(
      "https://lotrings-7150.restdb.io/rest/char-info",
      {
        headers: { 'x-apikey': '5f4733fc3abd4e679e244cbf' },
        params: {
          q: { "Name": char }
        }
      })
      .then(function (response) {
        console.log(response.data[0])
        let race = response.data[0].race;
        let gender = response.data[0].gender;
        let birthDate = response.data[0].birth;
        let deathDate = response.data[0].death;
        let name = response.data[0].Name;
        let url = response.data[0].Url;

        $("#c-results-pg").addClass("charResultClass");

        // Generate character results on new page
        let charTemplate = `
                <div class='container'>

                <div class='row justify-content-center m-3 text-center'>
                  <h2 class="text-white">${name}</h2>
                </div>

                <div class='row justify-content-center'>
                    <div class='col-sm-10'>
                        <table class="table text-white">
                            <tbody>
                                <tr>
                                    <th scope="row">Race</th>
                                    <td>${race}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>${gender}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Date of Birth</th>
                                    <td>${birthDate}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Date of Death</th>
                                    <td>${deathDate}</td>
                                </tr>
                                <tr>
                                    <th scope="row">More Info</th>
                                    <td><a href="${url}" target="_blank">${url}</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class='row justify-content-center m-3 text-center'>
                    <h4 class="text-white">Quotes</h4>
                </div>

                <div class='row justify-content-center'>
                  <div class='col-sm-10'>
                    <table class="table text-white">
                      <tbody>
                        <tr>
                          <td>
                            <ul class="mb-0 list-inline text-white list-contents" id='quote-lst'>
                              <ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                `
        $('#c-results-pg').html(charTemplate);

        // character info part 2 (getQuote) function call
        getQuote();

      })
      .catch(function (error) {
        console.log(error);
      }) //end of axios request part 1 (character bio)



    // Retrieve character Quotes from restdb database 2 - set as a function()
    function getQuote() {
      axios.get(
        "https://lotrp2-7ba7.restdb.io/rest/quote",
        {
          headers: { 'x-apikey': '5f4a6a473abd4e679e244db8' },
          params: {
            q: { "character": char }
          }
        })
        .then(function (response) {

          console.log(response.data);

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
          }

          $('#characters-loader').hide();

          $('#c-results-pg')[0].scrollIntoView();

        })
        .catch(function (error) {
          console.log(error);
        })
    }// end of getQuote() function / end of character quotes axios request

  }); // end of $('#char-btn').on('click', function () {



  //book details - from restdb database 3
  $('#book-btn').on('click', function () {
    let bookVal = $('#book-search').val();
    console.log("book value selected: " + bookVal);

    $('#f-results-pg').empty();
    $('#c-results-pg').empty();
    $('#b-results-pg').empty();

    $("#f-results-pg").removeClass("filmResultClass");
    $("#c-results-pg").removeClass("charResultClass");
    $("#b-results-pg").removeClass("bookResultClass");

    $('#books-loader').show();

    console.log('book cover value selected: ' + bookVal)

    //axios request for book details to restdb
    axios({
      method: 'get',
      url: "https://lotrings-7150.restdb.io/rest/book-info",
      headers: { 'x-apikey': '5f4733fc3abd4e679e244cbf' },
      params: {
        q: { "isbn10": bookVal }
      }
    })
      .then(function (response) {
        let title = response.data[0].title;
        let author = response.data[0].author;
        let firstPublish = response.data[0].firstPublish;
        let synopsis = response.data[0].synopsis;
        let description = response.data[0].description;

        // Generate Books results page
        $("#b-results-pg").addClass("bookResultClass");


        let bookTemplate = `
                <div class='container' id='book-marker'>
                  <div class='row justify-content-center m-3 text-center'>
                      <h2 class="text-white">${title}<h2>
                  </div>

                  <!-- Books covers are retrieved from OpenLibrary -->
                  <div class='row justify-content-center'>
                    <div class='col-lg-3 justify-content-center d-flex'>
                      <img src="http://covers.openlibrary.org/b/isbn/${bookVal}-M.jpg" class="img-fluid img-thumbnail mb-3 img-thumb">
                    </div>

                    <div class='col-lg-9'>
                      <table class="table text-white">
                        <tbody>
                          <tr>
                            <th scope="row">Author</th>
                            <td>${author}</td>
                          </tr>
                          <tr>
                            <th scope="row">First Published</th>
                            <td>${firstPublish}</td>
                          </tr>
                          <tr>
                            <th scope="row">Description</th>
                            <td>${description}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div class='row justify-content-center m-3'>
                      <h4 class="text-white text-center mb-4">Synopsis</h4>
                        <div class='text-white'>
                          <p class="p-3 contbox">${synopsis}</p>
                        </div>
                    </div>
                </div>
              </div>`

        $('#b-results-pg').html(bookTemplate);


        $('#books-loader').hide();
        $('#book-marker')[0].scrollIntoView();

      })
      .catch(function (error) {
        console.log(error);
      }) // end of axios request for book details

  }); // end of $('#book-btn').on('click', function () {

}); // end of $(function () {


