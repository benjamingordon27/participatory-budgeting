import * as actionTypes from './actionTypes';
import axios from '../../axios-order';
import * as getRequests from './getRequests';

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