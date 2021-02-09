import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import GoogleMapReact from 'google-map-react';
import Spinner from '../../components/UI/Spinner/Spinner';
import MapMarker from '../../components/UI/MapMarker/MapMarker';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

const initialState = {
    map: <Spinner />,
    mapProps: {},
    zoom: 11,
    markers: [],
    center: DEFAULT_CENTER,
    showDistricts: false,
}

const setMap = (state,districts, selectedDistricts, councilMembers, selectedBudgetItems) => {  
    
    return {
                zoom: state.zoom,
                districts: districts,
                selectedDistricts: selectedDistricts,
                councilMembers: councilMembers,
                selectedBudgetItems: selectedBudgetItems,                
            }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_MAP: return updateObject(state, {mapProps: setMap(state,action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})        
        case actionTypes.UPDATE_MAP: return updateObject(state, {mapProps: setMap(state,action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})        
        case actionTypes.RESET_MAP: return updateObject(state, {map: <Spinner />})        
        case actionTypes.ZOOM_MARKER: return updateObject(state, {zoom: 14, center: action.center})
        case actionTypes.ZOOM_MARKER: return updateObject(state, {zoom: 14, center: action.center})
        case actionTypes.ZOOM_IN: return updateObject(state, {zoom: state.zoom + 1})
        case actionTypes.ZOOM_OUT: return updateObject(state, {zoom: state.zoom - 1})
        case actionTypes.CENTER: return updateObject(state, {zoom: 11, center: DEFAULT_CENTER})
        case actionTypes.SHOW_DISTRICTS: return updateObject(state, {map: <Spinner />})
        default:
            return state;
    }
}

export default reducer;