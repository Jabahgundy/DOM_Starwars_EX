'use strict'

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOMLoaded")

    fetch("https://swapi.dev/api/films/",)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("films", data);
            buildContentCallback(data);

        })
        .catch(function (error) {
            console.error('ERROR', error);
            return error;


        })

    function buildContentCallback(data) {
        console.log("You've Selected the Darckside", data.results);

        var Films = data.results;
        var listOfFilms = document.querySelector('#movie')
        console.log("Films", Films)

        Films.forEach(film => {
            console.log("singleFilm", film)
            // var filmName = document.createElement('option')
            // filmName.appendChild(film)
            // console.log(filmName)
            // listOfFilms.appendChild(filmName)
            // console.log(listOfFilms)


        })




    }
























})