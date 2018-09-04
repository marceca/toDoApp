import * as types from '../constants/actions';

const initState = {
  title: 'Welcome to your all in one App!',
  welcome: 'Welcome to your all in one App!',
  body: ''
}

const eventReducer = (state=initState, action) => {
  switch(action.type) {
    case types.ToDo:
      let newToDoState = Object.assign({}, state);
      newToDoState.title = 'To Do'

      return newToDoState;

    case types.Weather:
      let newWeatherState = Object.assign({}, state);
      newWeatherState.title = 'Current Weather';

      return newWeatherState;

    case types.Spotify:
      let newSpotifyState = Object.assign({}, state);
      newSpotifyState.title = 'Spotify!';

      return newSpotifyState;

    default:
      return state;
  }
}

export default eventReducer;