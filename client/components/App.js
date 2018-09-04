import React, { Component } from 'react';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="event-tabs">
          <div className="headers">
            To Do
          </div>
          <div className="headers">
            Weather
          </div>
          <div className="headers">
            Spotify
          </div>
        </div>
        <div className="content-container">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;