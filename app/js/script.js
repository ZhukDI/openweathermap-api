"use strict";

$(document).ready(function () {
     

    var getJSON = function(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    };

    getJSON('http://api.openweathermap.org/data/2.5/forecast?id=625144&APPID=4bcc1ce632994fe5647884e0fae87f01').then(function(data) {
        console.log(data);
    }, function(status) {
        alert('Something went wrong.');
    });

    

    // setInterval(renderData, 1000)

})