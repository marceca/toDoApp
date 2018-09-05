import { connect } from 'react-redux';
import React, { Component } from 'react';
import Content from './Content';
import store from '../store'
import * as types from './constants/actions'

const mapStateToProps = store => ({
  events: store.events
});

function toDoState() {
  store.dispatch(types.toDo(types.ToDo))
};

function weatherState() {
  store.dispatch(types.weather(types.Weather))
}

function youtubeState() {
  store.dispatch(types.youtube(types.Youtube))
}
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="event-tabs">
          <div className="headers" onClick={function() {toDoState()}}>
            To Do
          </div>
          <div className="headers" onClick={function() {weatherState()}}>
            Weather
          </div>
          <div className="headers" onClick={function() {youtubeState()}}>
            Youtube
          </div>
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
