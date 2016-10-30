"use strict";

$(document).ready(function () {
    var app_ID = '4bcc1ce632994fe5647884e0fae87f01';
    //var minsk_ID = 625144;
    var time;

    $("#city-search-click").on('submit', function(event){
        stopTime();
        event.preventDefault();
        var city = $("#city").val();
        if (city == ''){
            console.log('Ничего не ввели'); 
        }else{
            cityWeather(city);
            time = setTimeout(function run(){
                alert('Сработал таймер!')
                cityWeather(city);
                time = setTimeout(run, 300000);//5 минут
            }, 300000);
        }

        //console.log(city);
    });

    function stopTime(){
        if(time){
            clearTimeout(time);
            time = null;
        }
    }

    function cityWeather(city){
        Handlebars.registerHelper('pressureMm', function() {
            return Math.round(this.main.pressure * 0.75006375541921);
        });
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&units=metric&APPID=' + app_ID, true);
        // xhr.responseType = 'json';
        xhr.onload = function(){
            var status = xhr.status;
            if (status == 200){
                var data = JSON.parse(xhr.responseText);
                
                var source = $("#weather-template").html();
                var template = Handlebars.compile(source);
                var result = template(data);
                var content = document.getElementById("content");
                content.innerHTML = result;
                console.log(data);
            }else{
                console.log("Error request: " + xhr.status + " " + xhr.statusText);
            }
        }
        xhr.onerror = function(){
            console.log(status);
        }
        xhr.send();
    }
});

    // var renderingWeather = function(city) {
    //     console.log(city);
    //     // var template = Handlebars.compile(source);
    //     Handlebars.registerHelper('pressureMm', function() {
    //         return Math.round(this.main.pressure * 0.75006375541921);
    //     });

    //     var getJSON = function(url) {
    //         return new Promise(function(resolve, reject) {
    //             var xhr = new XMLHttpRequest();
    //             xhr.open('get', url, true);
    //             xhr.responseType = 'json';
    //             xhr.onload = function() {
    //                 var status = xhr.status;
    //                 if (status == 200) {

    //                     var source = $("#weather-template").html();

    //                     //var json = JSON.parce()
    //                     resolve(xhr.response);
    //                 } else {
    //                     reject(status);
    //                 }
    //             };
    //             xhr.send();
    //         });

    //     };
    //     //http://api.openweathermap.org/data/2.5/forecast?id='+ minsk_ID +'&APPID=' + app_ID
    //     getJSON('http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&units=metric&APPID=' + app_ID).then(function(data) {
            
    //         var template = Handlebars.compile(source);
    //         console.log(data);
    //         var weatherTemplate = document.getElementById("weather-template").innerHTML;
    //         var compileTemplate = Handlebars.compile(weatherTemplate);
    //         var result = template(data);
    //         var content = document.getElementById("content");
    //         content.innerHTML = result;

    //         console.log(data);
    //     }, function(status) {
    //         alert('Something went wrong.');
    //     });

    // }

    

    
    

    // setInterval(renderData, 1000)

