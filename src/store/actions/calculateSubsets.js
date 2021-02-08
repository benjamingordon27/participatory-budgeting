import * as actionTypes from './actionTypes';

export const budgetByYear = (budget, year) => {    
    return {
        type: actionTypes.BUDGET_BY_YEAR,
        budget: budget,
        year: year,
    }
}

export const budgetByCategory = (budget, category) => {
    return {
        type: actionTypes.BUDGET_BY_CATEGORY,
        budget: budget,
        category: category,
    }
}

export const budgetByDistrict = (budget, district) => {    
    return {
        type: actionTypes.BUDGET_BY_DISTRICT,
        budget: budget,
        district: district,
    }
}

export const budgetFilter = (budget, category, year, district, minCost, maxCost) => {    
    return {
        type: actionTypes.BUDGET_FILTER,
        budget: budget,
        category: category,
        year: year,
        district: district,
        minCost: minCost,
        maxCost: maxCost,
    }
}
