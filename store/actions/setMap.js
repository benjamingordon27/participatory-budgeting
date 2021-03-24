import * as actionTypes from './actionTypes';

export const zoomMarker = (center, item) => {
    return {
        type: actionTypes.ZOOM_MARKER,
        center: center,
        item: item,
    }
}

export const zoomOut = () => {
    return {
        type: actionTypes.ZOOM_OUT,
    }
}

export const zoomIn = () => {
    return {
        type: actionTypes.ZOOM_IN, 
    }
}

export const center = () => {
    return {
        type: actionTypes.CENTER, 
    }
}

export const resetClickedItem = () => {
    return {
        type: actionTypes.RESET_CLICKED_ITEM,
    }
}

export const showDistrictsHelper = () => {
    console.log('show districts helper')
    return {
        type: actionTypes.SHOW_DISTRICTS,
    }
}

export const showDistricts = () => {
    console.log('show districts')
    return dispatch => {
        setTimeout(() => dispatch(showDistrictsHelper(),50));
    }
}

export const setMap = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {
    return {
        type: actionTypes.SET_MAP,
        districts: districts,
        selectedDistricts: selectedDistricts,
        councilMembers: councilMembers,
        selectedBudgetItems: selectedBudgetItems,
    }
}

export const updateHelper = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {
    return {
        type: actionTypes.UPDATE_MAP,
        districts: districts,
        selectedDistricts: selectedDistricts,
        councilMembers: councilMembers,
        selectedBudgetItems: selectedBudgetItems,        
    }
}

export const updateMap = (districts, selectedDistricts, councilMembers, selectedBudgetItems) => {
    return dispatch => {
        setTimeout(() => dispatch(updateHelper(districts, selectedDistricts, councilMembers, selectedBudgetItems),50));
    }
}

export const resetHelper = () => {    
    return {
        type: actionTypes.RESET_MAP,
    }
}

export const resetMap = () => {
    return dispatch => {
        setTimeout(() => dispatch(resetHelper(),50));
    }
}