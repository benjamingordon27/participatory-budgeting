import React from 'react';
import GoogleMapReact from 'google-map-react';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

const map = (props) => {

    let output =
        <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_TOKEN }}                    
                    defaultCenter={DEFAULT_CENTER}                 
                    defaultZoom={props.zoom}

                    yesIWantToUseGoogleMapApiInternals                    
                    onGoogleApiLoaded = {props.handleApiLoaded}
                    
                    // onGoogleApiLoaded={({ map, maps }) => {
                    //     handleApiLoaded(map, maps, districts, selectedDistricts, councilMembers, selectedBudgetItems)
                    // }}
        >
            {props.Markers}
        </GoogleMapReact>;

    return output;
}

export default map;