import React from 'react';
import GoogleMapReact from 'google-map-react';
// import polygonCenter from 'geojson-polygon-center';

import config from './mapConfig';

const renderDistricts = (map, maps, coords, selectedDistricts, councilMembers, showDistricts) => {
    let allDistrictPolygons = {};
    // let polygonCoords = [];
    console.log('show districts?', showDistricts)
    console.log(coords)

    if(showDistricts){
        Object.keys(coords.features).map(key => {  
            let districtPolygons = [];
            let currDistrict = coords.features[key].properties.coun_dist;
            coords.features[key].geometry.coordinates.map(arr => {   
                let coordArr = [];     
                arr[0].map(coordinate => coordArr.push({lat: coordinate[1], lng: coordinate[0]}))        
                
                var councilDistrictPolygon = new maps.Polygon({
                    paths: coordArr,
                    strokeColor: "#FF0000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#FF0000",
                    fillOpacity: 0.35,
                    indexID: currDistrict,
                });     
                
                // var center = polygonCenter(polygon.geometry)
                // console.log('center', polygonCenter(coords.features[key].geometry));

                districtPolygons.push(councilDistrictPolygon);
                // polygonCoords.push(coordArr);
                var districtInfo = councilMembers.filter(item => item.district === currDistrict);                                

                // addListenersOnPolygon(map,maps,councilDistrictPolygon, districtInfo);
            });            
            allDistrictPolygons[key] = {district: coords.features[key].properties.coun_dist,polygons: districtPolygons};
        });
    }            
    Object.keys(allDistrictPolygons).map(key => {        
        // if(selectedDistricts.includes(Number(allDistrictPolygons[key].district)))
            allDistrictPolygons[key].polygons.map(polygon => polygon.setMap(map))    
    })
}

const addListenersOnPolygon = (map,maps,polygon, info) => {
    var infoWindow = new maps.InfoWindow();    
    maps.event.addListener(polygon, 'click', function (event) {
        infoWindow.setContent('District: '+polygon.indexID + '<br>Council Member: '+ info[0].name+ '<br>Political Party: '+ info[0].political_party);
        var latLng = event.latLng;
        infoWindow.setPosition(latLng);
        infoWindow.open(map);        
    });  
}

const handleApiLoaded = (map, maps, coords, selectedDistricts, councilMembers, budget) => {    
    console.log('handleAPILoaded called')
    renderDistricts(map, maps, coords, selectedDistricts, councilMembers); 
}

const map = (props) => {
    // console.log('map props',props)
    let output =
        <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_TOKEN, v: '3.31', }}                                                            
                    defaultCenter={props.defaultCenter}
                    center={{lat: Number(props.center.lat), lng: Number(props.center.lng)}}
                    zoom={props.zoom}
                    options={config}   

                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => {
                        handleApiLoaded(map, maps, props.districts, props.selectedDistricts, props.councilMembers, props.selectedBudgetItems, props.showDistricts)
                    }}
        >
            {props.markers}
        </GoogleMapReact>;

    return output;
}

export default map;