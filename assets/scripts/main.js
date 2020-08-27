//$(document).ready(function(){ shorthand
$(function () {

    //test script in console
    console.log("script console is working!!!");

    //test script in alert
    //alert("Hello! Script alert is working fine");

    //buttons proper



    //character listing - From heroku lotr API
    $('#char-btn').on('click', function () {
        let char = $('#char-search').val();
        console.log("Character you have searched for: " + char);
        //alert("book-btn2 is working");//test button is working
        $.ajax({
            url: "https://the-one-api.dev/v2/character",
            method: "GET",
            headers: { "Authorization": "Bearer OIxYF3b197kZIyh6LWZx" },
            data: { name: char },
            dataType: "json",
            success: function (data) {
                $('ul').empty();
                let d = data.docs[0];
                // let id = d._id;
                let height = d.height;
                let race = d.race;
                let gender = d.gender;
                let birthDate = d.birth;
                let spouse = d.spouse;
                let deathDate = d.death;
                let realm = d.realm;
                let hairColor = d.hair;
                let name = d.name;
                let wikiUrl = d.wikiUrl;

                $('#char-lst').append(`<ul><b>Name</b>: ${name}</ul>`);
                $('#char-lst').append(`<ul><b>Spouse</b>: ${spouse}</ul>`);
                $('#char-lst').append(`<ul><b>Height</b>: ${height}</ul>`);
                $('#char-lst').append(`<ul><b>Race</b>: ${race}</ul>`);
                $('#char-lst').append(`<ul><b>Gender</b>: ${gender}</ul>`);
                $('#char-lst').append(`<ul><b>Year of birth</b>: ${birthDate}</ul>`);
                $('#char-lst').append(`<ul><b>Year of death</b>: ${deathDate}</ul>`);
                $('#char-lst').append(`<ul><b>Realm</b>: ${realm}</ul>`);
                $('#char-lst').append(`<ul><b>Hair Color</b>: ${hairColor}</ul>`);
                $('#char-lst').append(`<ul><b>Wiki Link</b>: <a href="${wikiUrl}" target="_blank">Click here.</a></ul>`);


                // //using $.each() method
                // let charDetail = data.docs[0];
                // // data = entire JSON, item's first element in array [0].
                // console.log("charDetail retrieved: "+charDetail);
                // $.each(charDetail, function(key, value){
                // console.log(key + ":" + value);
                // $('#char-lst').append(`<b>${key}</b>: ${value}<br>`);
                // });
            },
            error: function (xhr) {
                alert("Error");
            },
        });
    });



    //book listing - from openlibrary API
    $('#book-btn').on('click', function () {
        let bookVal = $('#book-search').val();
        console.log("book value selected: " + bookVal);

        //ajax call for book details

        //restdb.io API using Axios
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
                // console.log(response.data[0].title);
                let title = response.data[0].title;
                let author = response.data[0].author;
                let firstPublish = response.data[0].firstPublish;
                let synopsis = response.data[0].synopsis;
                let description = response.data[0].description;
                $('#book-lst').append(`<ul><b>Title: </b>${title}</ul>`);
                $('#book-lst').append(`<ul><b>Author: </b>${author}</ul>`);
                $('#book-lst').append(`<ul><b>Description: </b>${description}</ul>`);
                $('#book-lst').append(`<ul><b>First published: </b>${firstPublish}</ul>`);
                $('#book-lst').append(`<ul><b>Synopsis: </b>${synopsis}</ul>`);


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        // OpenLibrary API
        // $.ajax({
        //     url: 'https://openlibrary.org/api/books?' + bookVal + "&jscmd=details&format=json",
        //     method: "GET",
        //     data: { "bibkeys": bookVal },
        //     dataType: "json",
        //     success: function (data) {
        //         $('#book-lst').empty();

        //         let title = data[bookVal].details.title;
        //         let subtitle = data[bookVal].details.subtitle;
        //         let author = data[bookVal].details.authors[0].name;
        //         let bookDesc = data[bookVal].details.description;
        //         let copyrightDate = data[bookVal].details.copyright_date;
        //         let series = data[bookVal].details.series;
        //         $('#book-lst').append(`<ul><b>Title: </b>${title},<span style="color:black"><em>${subtitle}</em></span></ul>`);
        //         $('#book-lst').append(`<ul><b>By: </b>${author}</ul>`);
        //         $('#book-lst').append(`<ul>Part of ${series} series.</ul>`);
        //         $('#book-lst').append(`<ul><b>Book summary: </b>${bookDesc}</ul>`);
        //         $('#book-lst').append(`<ul><b>First published: </b>${copyrightDate}</ul>`);

        //         // data = entire JSON, item's first element in array [0].
        //         //console.log("bookDetail retrieved: " + bookDetail)
        //         //$('#book-lst').replaceWith(`<br>${bookDetail}`);
        //     },
        //     error: function (xhr) {
        //         alert("Book Details Retrieve Error");
        //     },

        // });

        //ajax call for book cover
        //let bookCov = bookVal.slice(5);
        console.log('book cover value selected: ' + bookVal)
        $('#book-cover').empty();
        $('#book-cover').append(`<img src="http://covers.openlibrary.org/b/isbn/${bookVal}-M.jpg"/><br>`)
        // $.ajax({
        //     url: 'http://covers.openlibrary.org/b/isbn/' + bookCov + "-L.jpg",
        //     //method: "GET",
        //     //data: {"bibkeys": bookVal},
        //     //dataType: "json",
        //     success: function(data) {
        //         $('#book-cover').empty();
        //         // data = entire JSON, item's first element in array [0].
        //         $('#book-cover').replaceWith(`<div id="book-cov">Book Cover: ${bookCov}</div><br>`);
        //     },
        //     error: function(xhr) {
        //          alert("Book Cover Retrieve Error");
        //     },

        // });
    });



    //film listing - from omdb
    $('#film-btn').on('click', function () {
        let film = $('#film-search').val();
        console.log("Film you have selected: " + film);
        //alert("book-btn2 is working");//test button is working
        $.ajax({
            url: "https://www.omdbapi.com/",
            method: "GET",
            data: { "s": film, "apiKey": "9c84f680" },
            dataType: "json",
            success: function (data) {
                $('ul').empty();
                let charDetail = data.docs[0];
                // data = entire JSON, item's first element in array [0].
                console.log("charDetail retrieved: " + charDetail)

                $.each(charDetail, function (key, value) {
                    console.log(key + ":" + value);
                    $('#char-lst').append(`<b>${key}</b>: ${value}<br>`);
                });
            },
            error: function (xhr) {
                alert("Error");
            },
        });
    });

});