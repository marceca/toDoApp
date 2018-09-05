import * as types from '../constants/actions';
import React from 'react';
import * as helper from '../helperFunctions/functions'

const initState = {
  title: 'Welcome to your all in one App!',
  welcome: 'Welcome to your all in one App!',
  body: '',
  savedToDoList: []
}

function addToDoList(input, state) {
    let newVal = input.target.querySelector('input').value
    // fetch('/add-list-item',
    // {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     'Accept': 'application/json',
    //       "Content-Type": "application/json; charset=utf-8",
    //   },
    //   redirect: "follow",
    //   referrer: "no-referrer",
    //   body: JSON.stringify({'item': newVal})
    // })
  var div = document.createElement('div');
  div.innerHTML = newVal;
  document.getElementById('append-list-items').appendChild(div);
  state.savedToDoList.push(<div className="list-item" key={newVal}>{newVal}</div>)
}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case types.ToDo:
      let newToDoState = Object.assign({}, state);
      newToDoState.title = 'To Do';
      newToDoState.welcome = 'Save all your to do\'s right here!'
      newToDoState.body =
        <div>
          <div id="append-list-items" className="list-items">{state.savedToDoList}</div>
          <form onSubmit={value => {value.preventDefault(), addToDoList(value, newToDoState)}}>
            Add to your to do list!
            <input className="button-class" type="text"/>
            <input className="button-class" type="Submit"/>
          </form>
        </div>;
      return newToDoState;

    case types.Weather:
      let newWeatherState = Object.assign({}, state);
      newWeatherState.title = 'Current Weather';
      newWeatherState.welcome = ''
      newWeatherState.body =         
      <div>
        <form onSubmit={value => {value.preventDefault(), helper.getCurrentWeather(value, newWeatherState)}}>
          Please enter your zip for your 5 day forecast: &nbsp;
          <input className="button-class" type="text"/>
          <input className="button-class" type="Submit"/>
        </form>
      </div>;

      return newWeatherState;

    case types.Spotify:
      let newSpotifyState = Object.assign({}, state);
      newSpotifyState.title = 'Spotify!';
      newSpotifyState.body = '';

      return newSpotifyState;

    default:
      return state;
  }
}

export default eventReducer;