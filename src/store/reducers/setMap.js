import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import GoogleMapReact from 'google-map-react';
import Spinner from '../../components/UI/Spinner/Spinner';

const initialState = {
    map: <Spinner />,
}

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

const renderMarkers = (map, maps, budget) => {    
    budget.filter(item => item.latitude && item.longitude).map(item => {
        let marker = new maps.Marker({
            position: {lat: Number(item.latitude), lng: Number(item.longitude)},            
            icon: {
                size: new maps.Size('24', '30'),
                scaledSize: new maps.Size('24','30'),
                url: 'http://ideas.pbnyc.org/static/css/images/markers/new/facilities.png' 
            },
            //icon: 'http://ideas.pbnyc.org/static/css/images/markers/new/facilities.png',
            map,
            title: item.title
        });        
    })        
}

// const handleToggleOpen = (markerId) => {
//     this.setState({
//         openInfoWindowMarkerId: markerId
//     });
// }

const renderDistricts = (map, maps, coords, selectedDistricts, councilMembers) => {
    let allDistrictPolygons = {};
    if(coords.features){                
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
                                
                districtPolygons.push(councilDistrictPolygon);                 
                var districtInfo = councilMembers.filter(item => item.district === currDistrict);                                

                addListenersOnPolygon(map,maps,councilDistrictPolygon, districtInfo);
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
        // alert(polygon.indexID);
    });  
  }

const handleApiLoaded = (map, maps, coords, selectedDistricts, councilMembers, budget) => {
    if(budget){
        console.log('handleAPILoaded called')
        renderDistricts(map, maps, coords, selectedDistricts, councilMembers);
        renderMarkers(map, maps, budget);
    }
}

const setMap = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {

    return <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_TOKEN }}                    
                defaultCenter={DEFAULT_CENTER}                 
                defaultZoom={11}

                yesIWantToUseGoogleMapApiInternals                    
                onGoogleApiLoaded={({ map, maps }) => {
                    handleApiLoaded(map, maps, districts, selectedDistricts, councilMembers, selectedBudgetItems)
                }}
            ></GoogleMapReact>;
}

const updateMap = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {
    
    return <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_TOKEN }}                    
                defaultCenter={DEFAULT_CENTER}                 
                defaultZoom={11}

                yesIWantToUseGoogleMapApiInternals                    
                onGoogleApiLoaded={({ map, maps }) => {
                    handleApiLoaded(map, maps, districts, selectedDistricts, councilMembers, selectedBudgetItems)
                }}
            ></GoogleMapReact>;
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_MAP: return updateObject(state, {map: setMap(action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})
        case actionTypes.UPDATE_MAP: return updateObject(state, {map: updateMap(action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})        
        case actionTypes.RESET_MAP: return updateObject(state, {map: <Spinner />})        
        default:
            return state;
    }
}

export default reducer;