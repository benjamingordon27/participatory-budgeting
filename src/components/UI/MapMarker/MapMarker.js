import React from 'react';
import classes from './MapMarker.module.css'

const MapMarker = (props) => {  
  return (
      <div className={classes.MapMarker} lat={props.lat} lng={props.lng} onClick={props.clicked}>
        <img style={{width:"40px", height:"40px"}} src='http://ideas.pbnyc.org/static/css/images/markers/new/facilities.png'></img>
      </div>
    );
};

export default MapMarker;