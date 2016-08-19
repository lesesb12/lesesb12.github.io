var api_key = '8fb0eed6b05b1cc6ada64305212f246b';
var weather_Indy = 'http://api.openweathermap.org/data/2.5/weather?zip=46256,us&appid=8fb0eed6b05b1cc6ada64305212f246b&units=imperial';
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?';
var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
var city = 'Indianapolis';

$(document).ready(function(){

	$('#getWeather').click(function(){
		$.ajax({
			url: weatherUrl,
			data:{
				q: $('#cityName').val(),
				units: 'imperial',
				appid: api_key
			},
			success: function(result){
				$('#showTemp').text(result.main.temp);
				$('#showConditions').text(result.weather[0].description);
				$('#showWind').text(result.wind.speed);
			}
		});
		$.ajax({
			url: forecastUrl,
			data:{
				q: $('#cityName').val(),
				units:'imperial',
				appid: api_key
			},
			success: function(result){
				//JSON like array... loop through the json array []
				//list.main[].temp?
				//idea 2: load forecast into array then print array instead of going directly through jQuery object
				$('#dayOne').text(result.list[0].temp.max);
				$('#dayTwo').text(result.list[1].temp.max);
				$('#dayThree').text(result.list[2].temp.max);
				$('#dayFour').text(result.list[3].temp.max);
				$('#dayFive').text(result.list[4].temp.max);

				
			} //FUNCTION to loop through the data
		});

	});

});
