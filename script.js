$(document).ready(function () {
    var createdisplay = function (data) {
        // Create a new table row element
        var tRow = $("<tr>");

        // Methods run on jQuery selectors return the selector they we run on
        // This is why we can create and save a reference to a td in the same statement we update its text
        var nameTd = $("<td>").text(data.name);
        var playtimeTd = $("<td>").text(data.playtime);
        var ratingTd = $("<td>").text(data.rating);

        // Append the newly created table data to the table row
        tRow.append(nameTd, playtimeTd, ratingTd);
        // Append the table row to the table body
        $("tbody").append(tRow);
    };

    var i = 0;

    var anything = [""];
    var searchGames = function (anything) {

        // constructing a queryURL variable we will use instead of the literal string inside of the ajax method

        var queryURL = "https://api.rawg.io/api/games?search=" + anything;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var searchResults = response.results[i];

            console.log(response.results[i]);
            createdisplay(response.results[i]);

            //OR

            var gameInfo = $("<p>").text(response.results[i].name);
            $(".container").append(gameInfo);

            console.log(response.results[i].id);
        });
    };
    // ---------------------------------------------------------
    // searchGames("portal");
    // searchGames("Halo");
});

https://api.rawg.io/docs/#tag/games 


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