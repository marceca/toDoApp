const ToDo = 'ToDo';
const Weather = 'Weather';
const Spotify = 'Spotify';

const toDo = () => ({type: ToDo});
const weather = () => ({type: Weather});
const spotify = () => ({type: Spotify});

module.exports = {
  ToDo,
  toDo,
  Weather,
  weather,
  Spotify,
  spotify
}