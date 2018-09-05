const ToDo = 'ToDo';
const Weather = 'Weather';
const Youtube = 'Youtube';

const toDo = () => ({type: ToDo});
const weather = () => ({type: Weather});
const youtube = () => ({type: Youtube});

module.exports = {
  ToDo,
  toDo,
  Weather,
  weather,
  Youtube,
  youtube
}