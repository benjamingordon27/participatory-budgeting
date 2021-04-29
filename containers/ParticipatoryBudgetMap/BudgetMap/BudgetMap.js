import React, {Component} from 'react';
import {connect} from 'react-redux';

import MapMarker from '../../../components/UI/MapMarker/MapMarker';
import * as actions from '../../../store/actions/index';
import {translateCategory} from '../../../util/translateCategory';

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
        //when first loaded, set the map up properly to the full map, and we have now loaded
        if(!this.state.firstPageLoad && this.props.loaded){       
            console.log('we loaded and the first page hasnt loaded')
            
            // this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
            this.setState({firstPageLoad: true})

            if(this.props.router.query){
                if(this.props.router.query.id === '1'){            
                    console.log('did we load', this.props.router.query.id)    
                    console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title)    
                    this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);
                }else if(this.props.router.query.id === '2'){                
                    console.log('did we load', this.props.router.query.id)    
                    this.props.onBudgetFilterFromURL(this.props.participatoryBudget, this.props.router.query);            
                }  
            }
        }

        // if((prevProps.selectedBudgetItems !== this.props.selectedBudgetItems)){
        //     console.log('selected budget items changed')
        //     // if(this.props.router.query){
        //     //     if(this.props.router.query.id === '')
        //     // }

        //     // this.props.onResetMap();                        
        //     // this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);     
        //     // this.props.onResetClickedItem();
        //     // this.props.onResetFindItem();
        //     // this.props.onCenter();            
        // }    

        // if(this.props.participatoryBudget && this.props.router.query && !this.props.clickedItem){
        //     console.log('router and no clicked item')

        //     if(this.props.router.query.id === '1'){            
        //         console.log('did we load', this.props.router.query.id)    
        //         console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title)    
        //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);
        //     }
        // }

        // if(this.props.participatoryBudget && this.props.router.query && (this.props.participatoryBudget !== prevProps.participatoryBudget)){            
        //     console.log('router?')
        //     if(this.props.router.query.id === '1'){            
        //         console.log('did we load', this.props.router.query.id)    
        //         this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);
        //     }else if(this.props.router.query.id === '2'){                
        //         console.log('did we load', this.props.router.query.id)    
        //         this.props.onBudgetFilterFromURL(this.props.participatoryBudget, this.props.router.query);            
        //     }            
        // }
        
        // if((this.props.showDistricts !== prevProps.showDistricts)){
        //     console.log('[BudgetMap.js] show districts')

        // }  
    }

    markerClicked = (center, item) => {        
        this.props.onZoomMarker(center, item);        
        // this.props.history.replace(this.props.url);
    }

    render(){    
        console.log('[BudgetMap.js]', this.props)

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
                    zoom={this.props.zoom}
                    clicked={() => this.markerClicked({ lat: item.latitude, lng: item.longitude }, item)}/>
                );
            })
        }            

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
        clickedItem: state.setMap.clickedItem,
        // item: state.setMap.item,
        selectedBudgetItems: state.setMap.selectedBudgetItems,

        url: state.setMap.url,        
    }
}

const mapDispatchToProps = dispatch => {
    return {        
        onSetMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems) => dispatch(actions.setMap(districts, selectedDistricts, councilMembers, selectedBudgetItems)),  
        onUpdateMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts) => dispatch(actions.updateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems, showDistricts)),  
        onResetMap: () => dispatch(actions.resetMap()),
        onZoomMarker: (center, item) => dispatch(actions.zoomMarker(center, item)),   
        
        onFindItem: (budget, lat, lng, title) => dispatch(actions.findItem(budget, lat, lng, title)),
        onBudgetFilterFromURL: (budget, query) => dispatch(actions.budgetFilterFromURL(budget, query)),

        onResetClickedItem: () => dispatch(actions.resetClickedItem()),
        onResetFindItem: () => dispatch(actions.resetFindItem()),

        onCenter: () => dispatch(actions.center()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMap);