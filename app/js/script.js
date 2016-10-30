"use strict";

$(document).ready(function () {
    var source = $("#weather-template").html();
    var app_ID = '4bcc1ce632994fe5647884e0fae87f01';
    var minsk_ID = 625144;

    $("#country-search-action").on('submit', function(event){
        var country = $("#country-user").val();
        console.log(country);
    });

    var renderingWeather = function() {
        var template = Handlebars.compile(source);
        Handlebars.registerHelper('pressureMm', function() {
            return Math.round(this.main.pressure * 0.75006375541921);
        });

        var getJSON = function(url) {
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('get', url, true);
                xhr.responseType = 'json';
                xhr.onload = function() {
                    var status = xhr.status;
                    if (status == 200) {
                        //var json = JSON.parce()
                        resolve(xhr.response);
                    } else {
                        reject(status);
                    }
                };
                xhr.send();
            });

        };
        //http://api.openweathermap.org/data/2.5/forecast?id='+ minsk_ID +'&APPID=' + app_ID
        getJSON('http://api.openweathermap.org/data/2.5/forecast?q=Minsk' +'&units=metric&APPID=' + app_ID).then(function(data) {
            var weatherTemplate = document.getElementById("weather-template").innerHTML;
            var compileTemplate = Handlebars.compile(weatherTemplate);
            var result = compileTemplate(data);
            var content = document.getElementById("content");
            content.innerHTML = result;
            
            console.log(data);
        }, function(status) {
            alert('Something went wrong.');
        });

    }

    renderingWeather();
    

    // setInterval(renderData, 1000)

})