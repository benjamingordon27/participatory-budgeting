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

const filterBudget = (participatoryBudget, category, year, district, minCost, maxCost) => {
    let newBudget = [];
    Object.keys(participatoryBudget).map(key => {
        newBudget.push(participatoryBudget[key])
    })

    if(year != '')
        newBudget = newBudget.filter(item => item.year === year);
    if(category != '')
        newBudget = newBudget.filter(item => item.category === category);
    if(district != '')
        newBudget = newBudget.filter(item => item.council_district === district);
    if(minCost != '')
        newBudget = newBudget.filter(item => Number(item.cost) >= Number(minCost));
    if(maxCost != '')
        newBudget = newBudget.filter(item => Number(item.cost) <= Number(maxCost));

    console.log(newBudget)

    return newBudget;
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.BUDGET_FILTER: return updateObject(state, {selectedBudgetItems: filterBudget(action.budget, action.category, action.year, action.district, action.minCost, action.maxCost), action: {...action}})
        case actionTypes.BUDGET_BY_YEAR: return updateObject(state, {selectedBudgetItems: sortByYear(action.budget, action.year)})
        case actionTypes.BUDGET_BY_DISTRICT: return updateObject(state, {selectedBudgetItems: sortByDistrict(action.budget, action.district)})
        case actionTypes.BUDGET_BY_CATEGORY: return updateObject(state, {selectedBudgetItems: sortByCategory(action.budget, action.category)})
        default:
            return state;
    }
}

export default reducer;