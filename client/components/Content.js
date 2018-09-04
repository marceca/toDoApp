import React from 'react';
import { connect } from 'react-redux';
import Clock from 'react-live-clock';

const mapStateToProps = store => ({
  events: store.events
})

const Content = (props) => {
    return (
    <div className={props.events.class}>
      <div className="content-title">{props.events.title}</div>
      <div className="content-welcome">{props.events.welcome}</div>
      <div className="content-body">{props.events.body}</div>
      <Clock className="clock" format={'hh:mm:ssa'} ticking={true} timezone={'US/Eastern'}/>
    </div>
    )
}

export default connect(mapStateToProps)(Content);