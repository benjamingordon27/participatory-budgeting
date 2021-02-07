import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {            
    selectedBudgetItems: null,
    selectedDistricts: null
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

const filterBudget = (participatoryBudget, category, year, district) => {
    let transformed = [];

    console.log('category',category);
    console.log('year', year);
    console.log('district',district);
    
    if(year !== ''){
        Object.keys(participatoryBudget).map(key => {        
            if(participatoryBudget[key].vote_year === year)
                transformed.push(participatoryBudget[key])
        })
    }else{
        transformed = participatoryBudget;
    }
    
    if(category !== ''){
        let newTransformed = [];
        Object.keys(transformed).map(key => {        
            if(transformed[key].category === category)
                newTransformed.push(transformed[key])
        })
        transformed = newTransformed;
    }

    if(district !== ''){
        let newTransformed = [];
        Object.keys(transformed).map(key => {        
            if(transformed[key].council_district === district)
                newTransformed.push(transformed[key])
        })
        transformed = newTransformed;
    }

    console.log('transformed filter', transformed);
    return transformed;

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.BUDGET_FILTER: return updateObject(state, {selectedBudgetItems: filterBudget(action.budget, action.category, action.year, action.district)})
        case actionTypes.BUDGET_BY_YEAR: return updateObject(state, {selectedBudgetItems: sortByYear(action.budget, action.year)})
        case actionTypes.BUDGET_BY_DISTRICT: return updateObject(state, {selectedBudgetItems: sortByDistrict(action.budget, action.district)})
        case actionTypes.BUDGET_BY_CATEGORY: return updateObject(state, {selectedBudgetItems: sortByCategory(action.budget, action.category)})
        default:
            return state;
    }
}

export default reducer;