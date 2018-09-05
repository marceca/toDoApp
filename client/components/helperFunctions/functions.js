const GOOGLE_MAPS_KEY_API = 'AIzaSyDz-qvkzVIe4nv3VL0fzctREszeLyFeFak';
function getCurrentWeather(zip, state) {
  let newZip = zip.target.querySelector('input').value
  fetch('http://api.openweathermap.org/data/2.5/weather?zip='+newZip+',us&units=imperial&APPID=5b0d33ceb5861a1710e8e05f47b39bfd',
    {
      method: "GET",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
      },
      redirect: "follow",
      referrer: "no-referrer"
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      state.currentWeather.temp = data.main.temp + ' F';
      document.getElementById('todaysTemp').innerHTML = state.currentWeather.temp;
      state.currentWeather.low = data.main.temp_min + ' F';
      document.getElementById('todaysLow').innerHTML = state.currentWeather.low;
      state.currentWeather.high = data.main.temp_max + ' F';
      document.getElementById('todaysHigh').innerHTML = state.currentWeather.high;
      state.currentWeather.humidity = data.main.humidity;
      document.getElementById('todaysHumidity').innerHTML = state.currentWeather.humidity;
      document.getElementById('weather-form').reset();
    })
}

function removeMe(val,state) {
  for(let i = 0; i < state.savedToDoList.length; i++) {
    if(state.savedToDoList[i].key === val) {
      state.savedToDoList.splice(i,1)
    }
  }
  document.getElementById(val).innerHTML = "";
}

function getSpotifyPlaylists() {
  fetch('https://api.spotify.com/v1/me/player/currently-playing',
    {
      method: "GET",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
      },
      redirect: "follow",
      referrer: "no-referrer"
    }).then(function(resp) {
      console.log(resp)
    })
}

module.exports = {
  getCurrentWeather,
  removeMe,
  getSpotifyPlaylists
}