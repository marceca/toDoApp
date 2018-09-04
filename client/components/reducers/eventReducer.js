import * as types from '../constants/actions';
import React from 'react';
import * as helper from '../helperFunctions/functions'
console.log('helper ', helper)
const initState = {
  title: 'Welcome to your all in one App!',
  welcome: 'Welcome to your all in one App!',
  body: '',
  class: 'test',
  savedToDoList: {}
}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case types.ToDo:
      let newToDoState = Object.assign({}, state);
      newToDoState.title = 'To Do';
      newToDoState.body =
        <div>
          <div id="append-list-items"></div>
          <form onSubmit={value => {value.preventDefault(), helper.addToDoList(value)}}>
            Add to your to do list!
            <input className="button-class" type="text"/>
            <input className="button-class" type="Submit"/>
          </form>
        </div>
      return newToDoState;

    case types.Weather:
      let newWeatherState = Object.assign({}, state);
      newWeatherState.title = 'Current Weather';
      newWeatherState.body = '';

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