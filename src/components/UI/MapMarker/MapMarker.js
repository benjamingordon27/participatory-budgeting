import React from 'react';
import classes from './MapMarker.module.css'

const MapMarker = (props) => {  
  return (
      <div className={classes.MapMarker} onClick={props.clicked} lat={props.lat} lng={props.lng}>
        <img src='http://ideas.pbnyc.org/static/css/images/markers/new/facilities.png'></img>
      </div>
    );
};

export default MapMarker;