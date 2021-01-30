import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {            
    selectedBudgetItems: null,
}

const sortByCategory = (participatoryBudget, category) =>{
    let transformed = [];
    console.log('category', category)
    Object.keys(participatoryBudget).map(key => {
        if(participatoryBudget[key].category === category)
            transformed.push(participatoryBudget[key])
    })
    console.log('transformed',transformed)
    return transformed;
}

const sortByDistrict = (participatoryBudget, district) =>{    
    let transformed = [];
    Object.keys(participatoryBudget).map(key => {                
        if(participatoryBudget[key].council_district === district)
            transformed.push(participatoryBudget[key])
    })
    console.log('transformed',transformed)
    return transformed;
}

const sortByYear = (participatoryBudget, year) =>{
    
    let transformed = [];    
    Object.keys(participatoryBudget).map(key => {        
        if(participatoryBudget[key].vote_year === year)
            transformed.push(participatoryBudget[key])
    })
    
    console.log('transformed',transformed)
    return transformed;    
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.BUDGET_BY_YEAR: return updateObject(state, {selectedBudgetItems: sortByYear(action.budget, action.year)})
        case actionTypes.BUDGET_BY_DISTRICT: return updateObject(state, {selectedBudgetItems: sortByDistrict(action.budget, action.district)})
        case actionTypes.BUDGET_BY_CATEGORY: return updateObject(state, {selectedBudgetItems: sortByCategory(action.budget, action.category)})
        default:
            return state;
    }
}

export default reducer;