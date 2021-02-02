import React from 'react';

//USE THIS http://jsfiddle.net/doktormolle/9xhsL39u/
//https://stackoverflow.com/questions/27844732/convert-a-google-maps-polygon-path-to-an-svg-path

/**
  *@param latLng object with properties lat and lng(of the coordinate)
  *@return object with properties x and y(of the translated latLng)
  **/
 function latLng2point(latLng){

    return {
            x:(latLng.lng+180)*(256/360),
            y:(256/2)-(256*Math.log(Math.tan((Math.PI/4)
                       +((latLng.lat*Math.PI/180)/2)))/(2*Math.PI))
           };
  }

const polygon = (props) => {
    let svgCoordinates = props.coordinates[0].map(pair => {
        return latLng2point(pair);
    })

    return (
        <div 
        //style={{
        //     strokeColor: "#FF0000",
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: "#FF0000",
        //     fillOpacity: 0.35,
        //     indexID: props.district,
        //   }}
        //   coordinates = {props.coordinates}
          >
              <svg>
                  <polygon stroke="black" fill="red" points = {svgCoordinates} />
              </svg>


        </div>
    );
}

export default polygon;