import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

const attachPolygonInfoWindow = (map,maps,polygon) => {
    var infoWindow = new maps.InfoWindow();
    maps.event.addListener(polygon, 'click', function (e) {
        infoWindow.setContent("Polygon Name");
        var latLng = e.latLng;
        infoWindow.setPosition(latLng);
        infoWindow.open(map);
    });
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

const handleApiLoaded = (map, maps, coords, selectedDistricts, councilMembers) => {
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


class BudgetMap extends Component{
    
    render(){
        let districts = '';        
        if(this.props.districts){                  
            districts = 
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_TOKEN }}                    
                    defaultCenter={DEFAULT_CENTER}                 
                    defaultZoom={11}

                    yesIWantToUseGoogleMapApiInternals                    
                    onGoogleApiLoaded={({ map, maps }) => {

                            handleApiLoaded(map, maps, this.props.districts, this.props.selectedDistricts, this.props.councilMembers)
                    }} 

                ></GoogleMapReact>            
        }        

        return(
            <div style={{ height: '100vh', width: '100%' }}>
                {districts}
            </div>            
        );
    }
}

const mapStateToProps = state => {
    return {
        currItem: state.participatoryBudget.currItem,
        participatoryBudget: state.participatoryBudget.participatoryBudget,
        loading: state.participatoryBudget.loading,
        councilMemberLoading: state.participatoryBudget.councilMemberLoading,
        error: state.participatoryBudget.error,
        councilMembers: state.participatoryBudget.councilMembers,
        districts: state.participatoryBudget.districts,
        districtsLoading: state.participatoryBudget.districtsLoading,   
        selectedDistricts: state.participatoryBudget.selectedDistricts,     

    }
}

export default connect(mapStateToProps)(BudgetMap);