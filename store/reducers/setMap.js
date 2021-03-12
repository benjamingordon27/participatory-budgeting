import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import Spinner from '../../components/UI/Spinner/Spinner';
import {translateCategoryText} from '../../util/translateCategory';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

const initialState = {
    map: <Spinner />,
    mapProps: {},
    zoom: 11,
    markers: [],
    center: DEFAULT_CENTER,
    showDistricts: false,
    clickedItem: null,
    url: '/',
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

const zoomMarker = (state, action) => {    

    return updateObject (state, {
        zoom: 14, 
        center: action.center, 
        clickedItem: action.item,
        url: `/map/${encodeURI(translateCategoryText(action.item.category))}/${encodeURI(action.item.title)},${action.item.latitude},${action.item.longitude}`
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_MAP: return updateObject(state, {mapProps: setMap(state,action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})        
        case actionTypes.UPDATE_MAP: return updateObject(state, {mapProps: setMap(state,action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})        
        case actionTypes.RESET_MAP: return updateObject(state, {map: <Spinner />, clickedItem: null})        
        case actionTypes.ZOOM_MARKER: return zoomMarker(state, action)
        case actionTypes.ZOOM_IN: return updateObject(state, {zoom: state.zoom + 1})
        case actionTypes.ZOOM_OUT: return updateObject(state, {zoom: state.zoom - 1})
        case actionTypes.CENTER: return updateObject(state, {zoom: 11, center: DEFAULT_CENTER})
        case actionTypes.SHOW_DISTRICTS: return updateObject(state, {map: <Spinner />})
        default:
            return state;
    }
}

export default reducer;