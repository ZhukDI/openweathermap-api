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


        // xhr.responseType = 'json';
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open('get', 'http://api.openweathermap.org/data/2.5/forecast?q=' + city +'&units=metric&APPID=' + app_ID, true);
            xhr.onload = function(){
                var status = xhr.status;
                if (status == 200){
                    $('.alert').remove();
                    var data = JSON.parse(xhr.responseText);

                    var source = $("#weather-template").html();
                    var template = Handlebars.compile(source);
                    var result = template(data);
                    var content = $("#content")[0];
                    content.innerHTML = result;
                    console.log(data);
                    resolve(xhr.response);
                }else{
                    console.log("Error request: " + xhr.status + " " + xhr.statusText);
                    $('.alert').remove();
                    var tmpl = '<div class = "alert alert-danger alert-dismissible" role="alert">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span></button>' +
                    '<strong>Error!</strong> '+ xhr.status + " " + xhr.statusText + '.' + '</div>';
                    $('#alert').append(tmpl);
                    reject(status);
                }
            };
            xhr.onerror = function(){
                //console.log("Ошибка!");
                reject(status);
            };
            xhr.send();
        });
    }
});
