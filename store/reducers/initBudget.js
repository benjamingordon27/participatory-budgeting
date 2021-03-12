import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import {translateCategoryText} from '../../util/translateCategory';

const initialState = {    
    currItem: null,
    participatoryBudget: null,
    loading: false,
    councilMemberLoading: false,
    error: false,
    councilMembers: null,
    councilMembersList: null,
    districts: null,
    districtsLoading: false,
    itemCategories: null,
    itemYears: null,
    itemDistricts: null,
    selectedDistricts: null,    

    loaded: false,
}

const initCategory = (participatoryBudget) => {    

    let categories = [];
    var keys = Object.keys(participatoryBudget);
    keys.forEach(function(key){
        if(participatoryBudget[key].category)
            categories.push(translateCategoryText(participatoryBudget[key].category));        
    });

    return categories.filter((v, i, a) => a.indexOf(v) === i).sort();
}

const initYear = (participatoryBudget) => {
    let years = [];
    var keys = Object.keys(participatoryBudget);
    keys.forEach(function(key){
        years.push(participatoryBudget[key].vote_year);
    });    
    return years.filter((v, i, a) => a.indexOf(v) === i).sort();
}

const initDistricts = (participatoryBudget) => {
    let districts = [];
    var keys = Object.keys(participatoryBudget);
    keys.forEach(function(key){
        districts.push(participatoryBudget[key].council_district);
    });    
    return districts.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
}

const loadBudgetSuccess = (state, participatoryBudget) => {

    return updateObject(state, 
        {
            loading: false, 
            participatoryBudget: JSON.parse(participatoryBudget), 
            itemCategories: initCategory(JSON.parse(participatoryBudget)),
            itemYears: initYear(JSON.parse(participatoryBudget)),
            itemDistricts: initDistricts(JSON.parse(participatoryBudget))
        })
}

const fetchCouncilMembers = (councilMembers) => {
    let outputCouncilMembers = JSON.parse(councilMembers);    
    let outputCouncilMembersList = [];
    outputCouncilMembers.forEach(value => outputCouncilMembersList.push('District ' + value.district + ': ' + value.name));
    outputCouncilMembersList.sort((a,b) => Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0])));    

    return {
        councilMemberLoading: false,
        councilMembers: outputCouncilMembers,
        councilMembersList: outputCouncilMembersList,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_COUNCIL_MEMBER_START: return updateObject(state, {councilMemberLoading: true})
        case actionTypes.FETCH_COUNCIL_MEMBER_SUCCESS: return updateObject(state, fetchCouncilMembers(action.councilMembers))            
        case actionTypes.FETCH_COUNCIL_MEMBER_FAIL: return updateObject(state, {error: action.error, councilMemberLoading: false})
        
        case actionTypes.FETCH_PARTICIPATORY_BUDGET_ITEM_START: return updateObject(state, {loading: true})
        case actionTypes.FETCH_PARTICIPATORY_BUDGET_ITEM_SUCCESS: return updateObject(state, loadBudgetSuccess(state,action.data))            
        case actionTypes.FETCH_PARTICIPATORY_BUDGET_ITEM_FAIL: return updateObject(state, {error: action.error, loading: false})    
        
        case actionTypes.FETCH_DISTRICTS_START: return updateObject(state, {districtsLoading: true})
        case actionTypes.FETCH_DISTRICTS_SUCCESS: return updateObject(state, {districtsLoading: false, districts: JSON.parse(action.districts), loaded: true})            
        case actionTypes.FETCH_DISTRICTS_FAIL: return updateObject(state, {error: action.error, districtsLoading: false})
        default:
            return state;
    }
}

export default reducer;