/* APIs to be used:
- MailChimp
- Firebase
- Google Maps (Possibly)
- Google Hangout (Possibly)
*/


$(document).ready(function(){
    $('.modal').modal();

    $('.carousel.carousel-slider').carousel({
        fullWidth: false,
        indicators: true
      });
    

    var emailQueryURL = "http://api.giphy.com/v1/gifs/search?api_key=CeU0Jbw0czD5gfCfxKYQZNqDbTRzgI0G&q=Email&rating=g&limit=50"

    var phoneQueryURL = "http://api.giphy.com/v1/gifs/search?api_key=CeU0Jbw0czD5gfCfxKYQZNqDbTRzgI0G&q=phone&rating=g&limit=50"

    // Ajax call for when user clicks email logo on contact page
    $("#mail-logo").on("click", function(){
        $.ajax({
        method: "GET",
        url: emailQueryURL
    }).then(function(response){
        console.log(response);

        var randomNumber = Math.floor(Math.random() * 25) + 1;

        var gifUrl = response.data[randomNumber].images.original.url;

        var gifImage = $("<img>")

        gifImage.attr("src", gifUrl);
        gifImage.attr("alt", "email image");
        $(gifImage).addClass("giphyImage");

        $("#email-gif").html(gifImage);

        console.log(gifUrl);
    });
    }); //Closing of on-click

    $("#phone-logo").on("click", function(){
        $.ajax({
        method: "GET",
        url: phoneQueryURL
    }).then(function(response){
        console.log(response);

        var randomNumber = Math.floor(Math.random() * 25) + 1;

        var gifUrl = response.data[randomNumber].images.original.url;

        var gifImage = $("<img>")

        gifImage.attr("src", gifUrl);
        gifImage.attr("alt", "email image");
        $(gifImage).addClass("giphyImage");

        $("#phone-gif").html(gifImage);

        console.log(gifUrl);
    });
    }); //Closing of on-click


});
          
