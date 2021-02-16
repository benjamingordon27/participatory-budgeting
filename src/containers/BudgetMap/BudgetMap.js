import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import MapMarker from '../../components/UI/MapMarker/MapMarker';
import * as actions from '../../store/actions/index';

import Map from '../../components/Map/Map';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

class BudgetMap extends Component{
    state = {
        firstPageLoad: false,
        zoom: 11,
        center: DEFAULT_CENTER,
        markers: [],
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
            
            let markers = [];            
            this.props.selectedBudgetItems.filter(item => item.latitude && item.longitude).map((item,idx) => {
                markers.push(<MapMarker 
                    key={idx} 
                    lat={item.latitude} 
                    lng={item.longitude} 
                    clicked={() => this.increaseZoom({ lat: item.latitude, lng: item.longitude })}/>
                );
            })
            this.setState({markers: markers})            
        }        
    }

    increaseZoom = (center) => {
        console.log('center?', center)        
        this.setState({zoom: 12,center: center})
        this.props.onZoomIn(center);
    }
    
    render(){        

        return(
            <div style={{ height: '87vh', width: '100%' }}>                
                {this.props.mapProps ? 
                <Map 
                    {...this.props.mapProps} 
                        zoom={this.state.zoom} 
                        center={this.props.center} 
                        defaultCenter={DEFAULT_CENTER}
                        markers={this.state.markers}/> 
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
        
        mapProps: state.setMap.mapProps,        
        center: state.setMap.center,
        selectedBudgetItems: state.subsets.selectedBudgetItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {        
        onSetMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems) => dispatch(actions.setMap(districts, selectedDistricts, councilMembers, selectedBudgetItems)),  
        onUpdateMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems) => dispatch(actions.updateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems)),  
        onResetMap: () => dispatch(actions.resetMap()),
        onZoomIn: (center) => dispatch(actions.zoomIn(center)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMap);