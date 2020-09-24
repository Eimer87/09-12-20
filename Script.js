var inputEl = document.querySelector("#game-input");

var i = 0;
// var anything = "";



$(document).ready(function () {

    $('.sidenav').sidenav();



    var createdisplay = function (data) {

        $(".1").html("<img id='resultImage' src=" + data.background_image + ">");
        $(".2").html("<h4>").text("Name: " + data.name);
        $(".3").html("<h4>").text("Metacritic: " + data.metacritic);
        $(".4").html("<h4>").text("Released: " + data.released);
        $(".5").html("<h4>").text("Score: " + data.score);

        genreNames = "";
        var GenresList = data.genres;
        for (; i < GenresList.length; i++) {
            genreNames += GenresList[i].name + ", ";
            console.log(GenresList[i].name);

        };
        $(".6").html("<h4>").text(genreNames);

    };


    var searchGames = function (event) {

        event.preventDefault();
        // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
 
    if ( inputEl.value.trim() === "") {
        return;
    }
    
        var queryURL = "https://api.rawg.io/api/games?search=" + inputEl.value;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var Results = response.results[i];
            console.log(Results);

            createdisplay(Results);

        });

        $(".row").removeClass("hide");

    }

    // ---------------------------------------------------------
    // searchGames("portal");  <=== comment line 60 when testing to see how display works with this line 57.
    searchGames; 
    
   


    // $(document).on("click", ".btn", searchGames);  //<=== this and line 60 do the same thing.
    $(".btn").on("click", searchGames);//<=== comment line 57 when testing to see how the search works with this line 60.

});









//https://api.rawg.io/docs/#tag/games 


// var tag = document.createElement('script');

//     tag.src = "https://youtu.be/tjji8NEW9lo";
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     var player;
//     function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//             height: '390',
//             width: '640',
//             videoId: 'M7lc1UVf-VE',
//             events: {
//                 'onReady': onPlayerReady,
//                 'onStateChange': onPlayerStateChange
//             }
//         });
//     }
//     function onPlayerReady(event) {
//         event.target.playVideo();
//     }
//     var done = false;
//     function onPlayerStateChange(event) {
//         if (event.data == YT.PlayerState.PLAYING && !done) {
//             setTimeout(stopVideo, 6000);
//             done = true;
//         }
//     }
//     function stopVideo() {
//         player.stopVideo();
//     }      YOUTUBE PLAYER <-----------------