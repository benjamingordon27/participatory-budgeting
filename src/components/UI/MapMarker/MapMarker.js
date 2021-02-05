import React from 'react';
import classes from './MapMarker.module.css'
import MapPinIcon from '../MapPinIcon/MapPinIcon';

//figure out how to change on zoom change

import educationImg from '../../../markers/education-small.png';
import facilitiesImg from '../../../markers/facilities-small.png';
import healthImg from '../../../markers/health-small.png';
import housingImg from '../../../markers/housing-small.png';
import playgroundImg from '../../../markers/playground-small.png';
import safetyImg from '../../../markers/safety-small.png';
import seniorsImg from '../../../markers/seniors-small.png';
import streetsImg from '../../../markers/street-sidewalk-small.png';
import transitImg from '../../../markers/transit-small.png';
import environmentImg from '../../../markers/tree-small.png';
import youthImg from '../../../markers/youth-small.png';

const MapMarker = (props) => {  
  console.log('marker props', props)

  let newCategories = {
    'Culture and Community Facilities': facilitiesImg,
    'Schools and Education': educationImg,
    'Environment': environmentImg,
    'Housing': housingImg,
    'Parks and Recreation': playgroundImg,
    'Public Health': healthImg,
    'Public Safety': safetyImg,
    'Sanitation': streetsImg,
    'Seniors': seniorsImg,
    'Streets and Sidewalks': streetsImg,
    'Transit and Transportation': transitImg,
    'Youth': youthImg,
    // 'Previously funded'
  }

  return (
      <div className={classes.MapMarker} lat={props.lat} lng={props.lng} onClick={props.clicked}>
        <img style={{
            width: props.width, height: props.height, 
            position: 'absolute', transform: 'translate(-50%, -50%)'
          }} 
          src={newCategories[props.item.pinCategory]}>
        </img>              
      </div>
    );
};

export default MapMarker;