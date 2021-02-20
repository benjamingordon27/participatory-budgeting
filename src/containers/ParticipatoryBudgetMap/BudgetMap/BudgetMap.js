import React, {Component} from 'react';
import {connect} from 'react-redux';

import MapMarker from '../../../components/UI/MapMarker/MapMarker';
import * as actions from '../../../store/actions/index';
import translateCategory from '../../../util/translateCategory';

import Map from '../../../components/Map/Map';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

class BudgetMap extends Component{
    state = {
        firstPageLoad: false,
    } 

    componentDidMount(){
        if(this.props.districts){
            this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(!this.state.firstPageLoad && this.props.loaded){
            this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
            this.setState({firstPageLoad: true})
        }

        if((prevProps.selectedBudgetItems !== this.props.selectedBudgetItems)){
            this.props.onResetMap();            
            this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);     
        }    
        
        if((this.props.showDistricts !== prevProps.showDistricts)){
            console.log('[BudgetMap.js] show districts')

        }  
    }

    markerClicked = (center) => {        
        this.props.onZoomMarker(center);
    }

    render(){     
        
        let markers = [];    
        if(this.props.selectedBudgetItems){                    
            this.props.selectedBudgetItems.filter(item => item.latitude && item.longitude).map((item,idx) => {
                markers.push(<MapMarker 
                    center={this.props.center}
                    key={idx} 
                    lat={item.latitude} 
                    lng={item.longitude} 
                    item={translateCategory(item)}
                    width={'30px'}
                    height={'30px'}
                    zoom={this.props.zoom} ////figure out how to change on zoom change, might have to be rendered not in an array in component but in render itself
                    clicked={() => this.markerClicked({ lat: item.latitude, lng: item.longitude })}/>
                );
            })
        }

        console.log('[BudgetMap.js]', this.props)

        return(
            <div style={{ height: '87vh', width: '100%' }}>
                {this.props.mapProps ?                 
                    <Map 
                        {...this.props.mapProps} 
                            zoom={this.props.zoom} 
                            center={this.props.center} 
                            defaultCenter={DEFAULT_CENTER}
                            markers={markers}
                            showDistricts={this.props.showDistricts}/> 
                    :null}
            </div>            
        );
    }
}

const mapStateToProps = state => {
    return {
        currItem: state.participatoryBudget.currItem,
        participatoryBudget: state.participatoryBudget.participatoryBudget,        
        councilMemberLoading: state.participatoryBudget.councilMemberLoading,
        error: state.participatoryBudget.error,
        councilMembers: state.participatoryBudget.councilMembers,
        districts: state.participatoryBudget.districts,
        districtsLoading: state.participatoryBudget.districtsLoading,   
        selectedDistricts: state.participatoryBudget.selectedDistricts,   
        loaded: state.participatoryBudget.loaded,
        
        showDistricts: state.setMap.showDistricts,
        mapProps: state.setMap.mapProps,        
        center: state.setMap.center,
        zoom: state.setMap.zoom,
        selectedBudgetItems: state.subsets.selectedBudgetItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {        
        onSetMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems) => dispatch(actions.setMap(districts, selectedDistricts, councilMembers, selectedBudgetItems)),  
        onUpdateMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts) => dispatch(actions.updateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts)),  
        onResetMap: () => dispatch(actions.resetMap()),
        onZoomMarker: (center) => dispatch(actions.zoomMarker(center)),           
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMap);