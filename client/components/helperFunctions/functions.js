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

function getSpotifyPlaylists(state) {
  fetch('https://api.hearthstonejson.com/v1/25770/enUS/cards.json',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
      },
    }).then(function(resp) {
      return resp.json();
    }).then(function(res) {
      for(let i = 0; i < res.length; i++) {
        console.log(res[i])
        var div = document.createElement('div');
        div.innerHTML = JSON.stringify(res[i]);
        console.log(div)
        document.getElementById('content-body-id').appendChild(div)
      }
      state.body = res
    })
}

module.exports = {
  getCurrentWeather,
  removeMe,
  getSpotifyPlaylists
}