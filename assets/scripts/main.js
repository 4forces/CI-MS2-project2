//$(document).ready(function(){ shorthand
$(function () {

    //test script in console
    console.log("script console is working!!!");

    //character listing - From restdb API
    $('#char-btn').on('click', function () {
        let char = $('#char-search').val();
        console.log("Character you have searched for: " + char);
        // $('#char-lst').empty();
        // $('#quote-title').empty();
        // $('#quote-lst').empty();
        $('h5').empty();
        $('.list-contents').empty();
        $('#book-cover').empty();


        //alert("book-btn2 is working");//test button is working

        //axios call
        axios({
            method: 'get',
            url: "https://lotrings-7150.restdb.io/rest/char-info",
            headers: {'x-apikey': '5f4733fc3abd4e679e244cbf'},
            params: {
                q: { "Name": char }
            }
        })
            .then(function (response) {
                // handle success
                // let d = data.docs[0];
                console.log(response.data[0].data)
                let race = response.data[0].race;
                let gender = response.data[0].gender;
                let birthDate = response.data[0].birth;
                let deathDate = response.data[0].death;
                let name = response.data[0].Name;
                let url = response.data[0].Url;

                $('#char-lst').append(`<li><b>Name</b>: ${name}</li>`);
                $('#char-lst').append(`<li><b>Race</b>: ${race}</li>`);
                $('#char-lst').append(`<li><b>Gender</b>: ${gender}</li>`);
                $('#char-lst').append(`<li><b>Date of birth</b>: ${birthDate}</li>`);
                $('#char-lst').append(`<li><b>Date of death</b>: ${deathDate}</li>`);
                $('#char-lst').append(`<li><b>More info</b>: <a href="${url}" target="_blank">${url}</a></li>`);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });


    // Character Quotes -restdb API
    $('#char-btn').on('click', function () {
        let char = $('#char-search').val();
        //alert("book-btn2 is working");//test button is working
        //axios call
        axios({
            method: 'get',
            url: "https://lotrp2-7ba7.restdb.io/rest/quote",
            headers: {'x-apikey': '5f4a6a473abd4e679e244db8'},
            params: {
                q: { "character": char }
            }
        })
            .then(function (response) {
                // handle success
                $('#quote-title').append("Quotes from the movies");
                $('#quote-explain').append("");
                console.log(response.data)

                let lgth = response.data.length;

                let randomLgth = Math.floor((Math.random() * lgth));
                console.log('randomLgth= ' + lgth);

                for(let i = randomLgth; i < randomLgth + 3; i++) {
                    console.log('i= '+ i);
                    let quote = response.data[i].dialog;
                    let qMovie = response.data[i].movie;
                    $('#quote-lst').append(`<li><b>Dialog: </b>${quote}</li>`);
                    $('#quote-lst').append(`<li><b>Movie: </b>${qMovie}</li><br>`);
                    }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });

    //book listing - from restdb.io API using Axios
    $('#book-btn').on('click', function () {
        let bookVal = $('#book-search').val();
        console.log("book value selected: " + bookVal);
        // $("#book-lst").empty();
        // $('#book-cover').empty();
        $('h5').empty();
        $('.list-contents').empty();
        $('#book-cover').empty();
        //Book cover from OpenLibrary
        console.log('book cover value selected: ' + bookVal)
        $('#book-cover').append(`<img src="http://covers.openlibrary.org/b/isbn/${bookVal}-M.jpg"/><br>`)

        //axios call for book details
        axios({
            method: 'get',
            url: "https://lotrings-7150.restdb.io/rest/book-info",
            headers: {'x-apikey': '5f4733fc3abd4e679e244cbf'},
            params: {
                q: { "isbn10": bookVal }
            }
        })
            .then(function (response) {
                // handle success
                let title = response.data[0].title;
                let author = response.data[0].author;
                let firstPublish = response.data[0].firstPublish;
                let synopsis = response.data[0].synopsis;
                let description = response.data[0].description;
                $('#book-lst').append(`<li><b>Title: </b>${title}</li>`);
                $('#book-lst').append(`<li><b>Author: </b>${author}</li>`);
                $('#book-lst').append(`<li><b>Description: </b>${description}</li>`);
                $('#book-lst').append(`<li><b>First published: </b>${firstPublish}</li>`);
                $('#book-lst').append(`<li><b>Synopsis: </b>${synopsis}</li>`);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    });



    //film listing - from omdb
    $('#film-btn').on('click', function () {
        let filmVal = $('#film-search').val();
        console.log("film selected: " + filmVal);
        // $("#film-lst").empty();
        // $('#filmRating-lst').empty()
        $('h5').empty();
        $('.list-contents').empty();
        $('#book-cover').empty();

        //axios call for book details
        axios({
            method: 'get',
            url: "http://www.omdbapi.com/",
            params: {
                apikey: "9c84f680",
                i: filmVal,
            }
        })
            .then(function (response) {
                // handle success
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

                let awdImdbSrc= response.data.Ratings[0].Source;
                let awdImdbVal= response.data.Ratings[0].Value;
                let awdRtSrc= response.data.Ratings[1].Source;
                let awdRtVal = response.data.Ratings[1].Value;
                let awdMcSrc= response.data.Ratings[2].Source;
                let awdMcVal = response.data.Ratings[2].Value;

                $('#film-lst').append(`<img src="${poster}"></img>`);
                $('#film-lst').append(`<li><b>Title:</b> ${title}</li>`);
                $('#film-lst').append(`<li><b>Rated:</b> ${rated}</li>`);
                $('#film-lst').append(`<li><b>Released:</b> ${released}</li>`);
                $('#film-lst').append(`<li><b>Runtime:</b> ${runtime}</li>`);
                $('#film-lst').append(`<li><b>Genre:</b> ${genre}</li>`);
                $('#film-lst').append(`<li><b>Director:</b> ${director}</li>`);
                $('#film-lst').append(`<li><b>Writer:</b> ${writer}</li>`);
                $('#film-lst').append(`<li><b>Cast:</b> ${actors}</li>`);
                $('#film-lst').append(`<li><b>Plot:</b> ${plot}</li>`);
                $('#film-lst').append(`<li><b>Awards:</b> ${awards}</li>`);

                console.log(`${awdImdbSrc}:${awdImdbVal}`);
                $('#rating-title').append("Ratings");
                $('#filmRating-lst').append(`<li><b>${awdImdbSrc}:</b> ${awdImdbVal}</li>`);
                $('#filmRating-lst').append(`<li><b>${awdRtSrc}:</b> ${awdRtVal}</li>`);
                $('#filmRating-lst').append(`<li><b>${awdMcSrc}:</b> ${awdMcVal}</li>`);


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    });

    // film method 2 modal test
    $('#myModal').on('show.bs.modal', function (e) {
        let button = $(e.relatedTarget);
        let filmVal = button.attr('data-id');
        console.log("film selected by modal method: " + filmVal);
        // $("#film-lst").empty();
        // $('#filmRating-lst').empty()
        $('h5').empty();
        $('.list-contents').empty();
        $('#book-cover').empty();

        //axios call for book details
        axios({
            method: 'get',
            url: "http://www.omdbapi.com/",
            params: {
                apikey: "9c84f680",
                i: filmVal,
            }
        })
            .then(function (response) {
                // handle success
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

                let awdImdbSrc= response.data.Ratings[0].Source;
                let awdImdbVal= response.data.Ratings[0].Value;
                let awdRtSrc= response.data.Ratings[1].Source;
                let awdRtVal = response.data.Ratings[1].Value;
                let awdMcSrc= response.data.Ratings[2].Source;
                let awdMcVal = response.data.Ratings[2].Value;

                $('#film-lst2').append(`<img src="${poster}"></img>`);
                $('#film-lst2').append(`<li><b>Title:</b> ${title}</li>`);
                $('#film-lst2').append(`<li><b>Rated:</b> ${rated}</li>`);
                $('#film-lst2').append(`<li><b>Released:</b> ${released}</li>`);
                $('#film-lst2').append(`<li><b>Runtime:</b> ${runtime}</li>`);
                $('#film-lst2').append(`<li><b>Genre:</b> ${genre}</li>`);
                $('#film-lst2').append(`<li><b>Director:</b> ${director}</li>`);
                $('#film-lst2').append(`<li><b>Writer:</b> ${writer}</li>`);
                $('#film-lst2').append(`<li><b>Cast:</b> ${actors}</li>`);
                $('#film-lst2').append(`<li><b>Plot:</b> ${plot}</li>`);
                $('#film-lst2').append(`<li><b>Awards:</b> ${awards}</li>`);

                console.log(`${awdImdbSrc}:${awdImdbVal}`);
                $('#rating-title2').append("Ratings");
                $('#filmRating-lst2').append(`<li><b>${awdImdbSrc}:</b> ${awdImdbVal}</li>`);
                $('#filmRating-lst2').append(`<li><b>${awdRtSrc}:</b> ${awdRtVal}</li>`);
                $('#filmRating-lst2').append(`<li><b>${awdMcSrc}:</b> ${awdMcVal}</li>`);


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });


});