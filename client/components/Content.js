import React from 'react';
import { connect } from 'react-redux';
import Clock from 'react-live-clock';

const mapStateToProps = store => ({
  events: store.events
})

const Content = (props) => {
    return (
    <div>
      <div className="content-title">{props.events.title}</div>
      <Clock format={'hh:mm:ssa'} ticking={true} timezone={'US/Eastern'}/>
      <div className="content-welcome">{props.events.welcome}</div>
      <div className="content-body">{props.events.body}</div>
      
    </div>
    )
}

export default connect(mapStateToProps)(Content);