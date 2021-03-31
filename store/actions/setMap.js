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

export const resetSelectedItems = () => {    
    return {
        type: actionTypes.RESET_SELECTED_ITEMS,
    }
}

export const findItem = (budget, lat, lng, title) => {
    return {
        type: actionTypes.FIND_ITEM,
        budget: budget,
        lat: lat,
        lng: lng,
        title: title,
    }
}

export const budgetFilter = (budget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember) => {        

    return {
        type: actionTypes.BUDGET_FILTER,
        budget: budget,
        councilMembers: councilMembers,
        category: category,
        year: year,
        district: district,
        minCost: minCost,
        maxCost: maxCost,
        minVotes: minVotes,
        maxVotes: maxVotes,
        councilMember: councilMember,
    }
}

export const resetFindItem = () => {
    return {
        type: actionTypes.RESET_FIND_ITEM,
    }
}


export const budgetFilterFromURL = (budget, query) => {        

    return {
        type: actionTypes.BUDGET_FILTER_FROM_URL,
        budget: budget,
        query: query,
    }
}