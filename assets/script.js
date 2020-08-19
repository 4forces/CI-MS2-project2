$(function(){

    console.log("bye");
    alert("Hello! I am working fine");

    $('#submit-btn').on('click', function() {
        alert("Hello! submit button is working fine");
        $("#hdr").replaceWith("you have been replaced");
        $("#hds").append(" append");
        $('body').css("background-color", "grey");
    });
});