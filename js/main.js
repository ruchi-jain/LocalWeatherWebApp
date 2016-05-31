var pos ={};
$(document).ready(function(){
    console.log("Start");
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
       pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
           console.log(pos.lat + " " + pos.lng);
       });
  }
    getWeather();
});

function getWeather(){
    $.ajax({
        method:"GET",
        url: "https://simple-weather.p.mashape.com/weatherdata",
        datatype: "appliacton/json",
            headers: {
                'X-Mashape-Key': "8DWNl5oYJSmshJe2vEMfGvpPZHmOp1bULr7jsnaErNMmClZ5M0",
                lat:pos.lat,
                lan:pos.lng
            },
        success: function(data){
            var val = JSON.parse(data);
            console.log(val);
            $("#weather").html(val);
        }
    });
}

  