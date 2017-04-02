var api_key = '8fb0eed6b05b1cc6ada64305212f246b';
//var weather_Indy = 'http://api.openweathermap.org/data/2.5/weather?zip=46256,us&appid=8fb0eed6b05b1cc6ada64305212f246b&units=imperial';
var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?';
var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?';
//var googleMapKey = 'AIzaSyBxWLSmXIBvdADp0okbNDM7E-9c8GNS2qw';
//var city = 'Indianapolis';

$(document).ready(function(){

	$('#getWeather').click(function(){
		//current weather URL get data
		$.ajax({
			url: weatherUrl,
			data:{
				q: $('#cityName').val(),
				data: 'GET',
				datatype: 'jsonp',
				units: 'imperial',
				appid: api_key
			},
			success: function(result){
				var iconUrl = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";


				$('#showTemp').text(result.main.temp);
				$('#showConditions').text(result.weather[0].description);
				$('#weatherIcon').html("<img src='" + iconUrl  + "'>");
				$('#showWind').text(result.wind.speed);



			}
		});

		//Forecast URL get data
		$.ajax({
			url: forecastUrl,
			data:{
				q: $('#cityName').val(),
				data: 'GET',
				datatype: 'jsonp',
				units:'imperial',
				appid: api_key
			},
			success: function(result){
					
					var iconUrl = []
					var fcSize = result.list.length;
					console.log(fcSize);
					var currentTime = 0;
					var month = [];
					var day = [];
					var year = [];
					var tempMax = [];
					var tempMin = [];

				for(var i=0; i<fcSize; i++){

					currentTime = new Date((result.list[i].dt)*1000);
					month[i] = currentTime.getMonth(result.list[i].dt) + 1;
					day[i] = currentTime.getDate(result.list[i].dt);
					year[i] = currentTime.getFullYear(result.list[i].dt);
					tempMax[i] = result.list[i].temp.max;
					tempMin[i] = result.list[i].temp.min;
					iconUrl[i] = "http://openweathermap.org/img/w/" + result.list[i].weather[0].icon + ".png";

				}
				$('#dayOne').text(month[0] + '/' + day[0] + '/' + year[0] + ' High: ' + tempMax[0] + ' Low: ' + tempMin[0]);
				$('#dayTwo').text(month[1] + '/' + day[1] + '/' + year[1] + ' High: ' + tempMax[1] + ' Low: ' + tempMin[1]);
				$('#dayThree').text(month[2] + '/' + day[2] + '/' + year[2] + ' High: ' + tempMax[2] + ' Low: ' + tempMin[2]);
				$('#dayFour').text(month[3] + '/' + day[3] + '/' + year[3] + ' High: ' + tempMax[3] + ' Low: ' + tempMin[3]);
				$('#dayFive').text(month[4] + '/' + day[4] + '/' + year[4] + ' High: ' + tempMax[4] + ' Low: ' + tempMin[4]);
				$('#dayOneIcon').html("<img src='" + iconUrl[0]  + "'>");
				$('#dayTwoIcon').html("<img src='" + iconUrl[1]  + "'>");
				$('#dayThreeIcon').html("<img src='" + iconUrl[2]  + "'>"); 
				$('#dayFourIcon').html("<img src='" + iconUrl[3]  + "'>");
				$('#dayFiveIcon').html("<img src='" + iconUrl[4]  + "'>");
			} //FUNCTION to loop through the data
		});
	});


});




