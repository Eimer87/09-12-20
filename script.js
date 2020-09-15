$(document).ready(function () {
    var apiKey = "f30e831d637c145d10b89e90fda4fd01";

    function searchWeather() {
        var queryUrl = "https://api-v3.igdb.com/games/" + apiKey;
        $.ajax({
            type: "GET",
            url: queryUrl
        })
            .then(function (response) {
                console.log(response);
            })
    }

    searchWeather();

});

$.ajax({
    url: "http://localhost:8079/students/add/",
    type: "POST",
    crossDomain: true,
    data: JSON.stringify(somejson),
    dataType: "json",
    success: function (response) {
        var resp = JSON.parse(response)
        alert(resp.status);
    },
    error: function (xhr, status) {
        alert("error");
    }
});














// https://api-v3.igdb.com/games/f30e831d637c145d10b89e90fda4fd01

// https://api-v3.igdb.com/games?q=tetris&appid=f30e831d637c145d10b89e90fda4fd01

// Note: 'where game.platforms = 48 & date > 1538129354' It is possible to use either & (AND) or | (OR) to combine filters to better define the behaviour of your query

