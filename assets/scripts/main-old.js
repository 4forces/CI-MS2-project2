//$(document).ready(function(){ shorthand
$(function(){

    //test script in console
    console.log("script console is working");

    //test script in alert
    alert("Hello! Script alert is working fine");

    //test button is working
    $('#test-btn').on('click', function() {
        alert("Hello! submit button is working fine");
        $("#hdr").replaceWith("you have been replaced");
        $("#hds").append(" append");
        $('body').css("background-color", "grey");
    });

    //buttons proper
    $('#char-btn').on('click', function() {
        let char = $('#char-search').val();
        console.log(film);
        alert(`quote-btn is working. You have inputed ${char}.`);

    });


    $('#quote-btn').on('click', function() {
        let quote = $('#quote-search').val();
        console.log(film);
        alert(`quote-btn is working. You have inputed ${quote}.`);
    });

    $('#film-btn').on('click', function() {
        let film = $('#film-search').val();
        console.log(film);
        alert("film-btn is working");
        $.ajax({
            url:"https://the-one-api.herokuapp.com/v1/book",
            headers: `Authorization: Bearers ${OIxYF3b197kZIyh6LWZx}`
            method: "GET",
            dataType: "json",
            contentType: "string",
            data: "bk1"
        });
    });

    $('#book-btn1').on('click', function() {
        let bk1 = $('#book-search').val();
        console.log(bk1);
        alert("book-btn1 is working");
    });

    $('#book-btn2').on('click', function() {
        let bk2 = $('#myBookList').val();
        console.log(bk2);
        alert(`book-btn2 is working. You have selected Book "${bk2}"`);
    });

    //ajax/axios request function starts here



});