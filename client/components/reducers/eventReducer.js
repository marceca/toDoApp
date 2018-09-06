import * as types from '../constants/actions';
import React from 'react';
import * as helper from '../helperFunctions/functions';

const initState = {
  title: 'Welcome to your all in one App!',
  welcome: '',
  body: '',
  savedToDoList: [],
  currentWeather: {}
}

function addToDoList(input, state) {
  let newVal = input.target.querySelector('input').value
  var div = document.createElement('div');
  div.className = 'clear-me'
  div.innerHTML = newVal;
  document.getElementById('inbetween-state').appendChild(div);
  state.savedToDoList.push(<div className="list-item" id={newVal} onClick={(e) =>{e.stopPropagation(), helper.removeMe(newVal, state)}} key={newVal}>{newVal}</div>)
  document.getElementById('toDoForm').reset();
}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case types.ToDo:
      let newToDoState = Object.assign({}, state);
      newToDoState.title = 'To Do';
      newToDoState.welcome = 'Save all your to do\'s right here!'
      newToDoState.body =
        <div>
          <form id="toDoForm" onSubmit={value => {value.preventDefault(), addToDoList(value, newToDoState)}}>
            Add to your to do list!&nbsp;
            <input type="text"/>
            <input className="button-class" type="Submit"/>
          </form>
          <div id="append-list-items" className="list-items">{state.savedToDoList}</div>
          <div id="inbetween-state"></div>
        </div>;
      return newToDoState;

    case types.Weather:
      if(document.getElementById('inbetween-state')) {
        document.getElementById('inbetween-state').innerHTML = ""
      }
      let newWeatherState = Object.assign({}, state);
      newWeatherState.title = 'Today\'s Weather';
      newWeatherState.welcome = ''
      newWeatherState.body =         
      <div>
        <form id='weather-form' onSubmit={value => {value.preventDefault(), helper.getCurrentWeather(value, newWeatherState)}}>
          Please enter your zip for your daily forecast: &nbsp;
          <input type="text"/>
          <input className="button-class" type="Submit"/>
        </form>
        <div id="not-list">
          <div className="weather-flex">
            <div>Today's temperature: &nbsp;<span id="todaysTemp">{state.currentWeather.temp}</span></div>
            <div>Today's High: &nbsp;<span id="todaysHigh">{state.currentWeather.high}</span></div>
          </div>
          <div className="weather-flex">
            <div>Today's Low: &nbsp;<span id="todaysLow">{state.currentWeather.low}</span></div>
            <div>Today's Humidity: &nbsp;<span id="todaysHumidity">{state.currentWeather.humidity}</span></div>
          </div>
        </div>
      </div>;
      return newWeatherState;

    case types.Spotify:
      let newSpotifyState = Object.assign({}, state);
      newSpotifyState.title = 'Spotify!';
      newSpotifyState.welcome = '';
      newSpotifyState.body = 
      <div>
        <div onClick={(e) =>{e.stopPropagation(), helper.getSpotifyPlaylists(newSpotifyState)}}>Check Playlists</div>
      </div>
      ;
      return newSpotifyState;

    default:
      return state;
  }
}

export default eventReducer;