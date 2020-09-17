$(document).ready(function () {
    var displayGames = $("api-result")

    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added",
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    //         "x-rapidapi-key": "0a549e6324mshe13a8958db253e6p1afae2jsnf6a1f9cb6e11"
    //     }
    // }

    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });

    function searchGames() {
        var queryUrl = "https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added"
        $.ajax({
            type: "GET",
            url: queryUrl
        })
            .then(function (response) {
                console.log(response);
                var games = "Game List " + displayGames;
                var results = results.Array;
                displayGames.append(games + results);
            })
    };

    searchGames();
})

// RAWG APIs:
// https://rawg-video-games-database.p.rapidapi.com/platforms Use to search by platform
// https://rawg-video-games-database.p.rapidapi.com/games  Use to search by game name



// Need:
// 2 Serverside APIs 
// 3rd Party framework
