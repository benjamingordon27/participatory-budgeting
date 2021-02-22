import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {            
    selectedBudgetItems: null,
    selectedDistricts: null,
    action: {},
}

const sortByCategory = (participatoryBudget, category) =>{
    let transformed = [];
    console.log('category', category)
    Object.keys(participatoryBudget).map(key => {
        if(participatoryBudget[key].category === category)
            transformed.push(participatoryBudget[key])
    })    
    return transformed;
}

const sortByDistrict = (participatoryBudget, district) =>{    
    let transformed = [];
    Object.keys(participatoryBudget).map(key => {                
        if(participatoryBudget[key].council_district === district)
            transformed.push(participatoryBudget[key])
    })
    return transformed;
}

const sortByYear = (participatoryBudget, year) =>{
    
    let transformed = [];    
    Object.keys(participatoryBudget).map(key => {        
        if(participatoryBudget[key].vote_year === year)
            transformed.push(participatoryBudget[key])
    })    
    return transformed;    
}

const filterBudget = (participatoryBudget, councilMembers, category, year, district, minCost, maxCost, minVotes, maxVotes, councilMember) => {
    let newBudget = [];
    let newCouncil = [];
    Object.keys(participatoryBudget).map(key => {
        newBudget.push(participatoryBudget[key])
    })

    Object.keys(councilMembers).map(key => {
        newCouncil.push(councilMembers[key])
    })


    if(year !=='')
        newBudget = newBudget.filter(item => Number(item.vote_year) === Number(year));
    if(category !=='')
        newBudget = newBudget.filter(item => item.category === category);
    if(district !=='')
        newBudget = newBudget.filter(item => item.council_district === district);
    if(minCost !=='')
        newBudget = newBudget.filter(item => Number(item.cost) >= Number(minCost));
    if(maxCost !=='')
        newBudget = newBudget.filter(item => Number(item.cost) <= Number(maxCost));
    if(minVotes !=='')
        newBudget = newBudget.filter(item => Number(item.votes) >= Number(minVotes));
    if(maxVotes !=='')
        newBudget = newBudget.filter(item => Number(item.votes) <= Number(maxVotes));
    if(councilMember !==''){        
        var currDistrict = newCouncil.filter(member => member.name === councilMember)[[0]].district;        
        newBudget = newBudget.filter(item => item.council_district === currDistrict);
    }

    console.log("calculate Subsets reducers",newBudget)

    return newBudget;
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.BUDGET_FILTER: return updateObject(state, {selectedBudgetItems: filterBudget(action.budget, action.councilMembers, action.category, action.year, action.district, action.minCost, action.maxCost, action.minVotes, action.maxVotes, action.councilMember), action: {...action}})
        case actionTypes.BUDGET_BY_YEAR: return updateObject(state, {selectedBudgetItems: sortByYear(action.budget, action.year)})
        case actionTypes.BUDGET_BY_DISTRICT: return updateObject(state, {selectedBudgetItems: sortByDistrict(action.budget, action.district)})
        case actionTypes.BUDGET_BY_CATEGORY: return updateObject(state, {selectedBudgetItems: sortByCategory(action.budget, action.category)})
        case actionTypes.RESET_SELECTED_ITEMS: return updateObject(state, {selectedBudgetItems: []})
        default:
            return state;
    }
}

export default reducer;