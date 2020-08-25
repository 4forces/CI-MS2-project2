//$(document).ready(function(){ shorthand
$(function(){

    //test script in console
    console.log("script console is working!!!");

    //test script in alert
    //alert("Hello! Script alert is working fine");

    //buttons proper
    //character listing - From heroku lotr API
    $('#char-btn').on('click', function() {
        let char = $('#char-search').val();
        console.log("Character you have searched for: "+char);
        //alert("book-btn2 is working");//test button is working
        $.ajax({
            url:"https://the-one-api.herokuapp.com/v1/character",
            method: "GET",
            headers: {"Authorization": "Bearer OIxYF3b197kZIyh6LWZx"},
            data: {name: char},
            dataType: "json",
            success: function(data) {
                $('ul').empty();
                let d = data.docs[0]
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
            error: function(xhr) {
                alert("Error");
            },
        });
    });

    //book listing - from openlibrary API
    $('#book-btn').on('click', function() {
        let bookVal = $('#book-search').val();
        console.log("book value selected: "+bookVal);
        //ajax call for book details
        $.ajax({
            url: 'https://openlibrary.org/api/books?' + bookVal + "&jscmd=details&format=json",
            method: "GET",
            data: {"bibkeys": bookVal},
            dataType: "json",
            success: function(data) {
                $('#book-lst').empty();
                let bookDetail = data;
                // data = entire JSON, item's first element in array [0].
                console.log("bookDetail retrieved: "+bookDetail)
                $('#book-lst').replaceWith(`<br>${bookDetail}`);
            },
            error: function(xhr) {
                 alert("Book Details Retrieve Error");
            },

        });
        //ajax call for book cover
        let bookCov = bookVal.slice(5);
        console.log('book cover value selected: '+bookCov)
        $('#book-cover').empty();
        $('#book-cover').append(`<img src="http://covers.openlibrary.org/b/isbn/${bookCov}-L.jpg"/><br>`)
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

    //omdb
    $('#film-btn').on('click', function() {
        let film = $('#film-search').val();
        console.log("Film you have selected: "+film);
        //alert("book-btn2 is working");//test button is working
        $.ajax({
            url:"https://www.omdbapi.com/",
            method: "GET",
            data: {"s": film, "apiKey": "9c84f680" },
            dataType: "json",
            success: function(data) {
                $('ul').empty();
                let charDetail = data.docs[0];
                // data = entire JSON, item's first element in array [0].
                console.log("charDetail retrieved: "+charDetail)

                $.each(charDetail, function(key, value){
                console.log(key + ":" + value);
                $('#char-lst').append(`<b>${key}</b>: ${value}<br>`);
                });
            },
            error: function(xhr) {
                alert("Error");
            },
        });
    });

});