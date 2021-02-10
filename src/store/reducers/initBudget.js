import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import { similarSubstring } from 'similar-substring';

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
        categories.push(participatoryBudget[key].category);
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
    let years = [];
    var keys = Object.keys(participatoryBudget);
    keys.forEach(function(key){
        years.push(participatoryBudget[key].council_district);
    });    
    return years.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
}

const findMax = (key, data, councilMembers) => {    
    
    var maxProp = null;
    var maxValue = -1;
    for (var prop in data) {
        var curr = data[prop];        
        var value = curr[key];
        if (value > maxValue) {
            maxProp = curr
            maxValue = value
        }
    }
    
    var councilMember = councilMembers.filter(item => item.district === maxProp.council_district)[0];    
    const updatedMaxProp = {...maxProp, councilMember: councilMember}    
    return {...updatedMaxProp};
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

const sortByYear = (participatoryBudget, year) =>{
    //console.log(participatoryBudget.filter(item => item.vote_year === year))
    let transformed = [];
    Object.keys(JSON.parse(participatoryBudget)).map(key => {
        // console.log('year', year)
        
        if(JSON.parse(participatoryBudget)[key].vote_year === year)
            transformed.push(JSON.parse(participatoryBudget)[key])
    })

    return transformed;
}

const sortByDistrict = (participatoryBudget, district) =>{
    //console.log(participatoryBudget.filter(item => item.vote_year === year))
    let transformed = [];
    Object.keys(JSON.parse(participatoryBudget)).map(key => {
        // console.log('year', year)
        
        if(JSON.parse(participatoryBudget)[key].council_district === district)
            transformed.push(JSON.parse(participatoryBudget)[key])
    })

    return transformed;
}

const sortByCategory = (participatoryBudget, category) =>{
    //console.log(participatoryBudget.filter(item => item.vote_year === year))
    let transformed = [];
    Object.keys(JSON.parse(participatoryBudget)).map(key => {
        // console.log('year', year)
        
        if(JSON.parse(participatoryBudget)[key].category === category)
            transformed.push(JSON.parse(participatoryBudget)[key])
    })

    return transformed;
}

const fetchCouncilMembers = (councilMembers) => {
    let outputCouncilMembers = JSON.parse(councilMembers);    
    let outputCouncilMembersList = [];
    outputCouncilMembers.forEach(value => outputCouncilMembersList.push(value.name));    

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