import * as actionTypes from './actionTypes';

export const budgetByYear = (budget, year) => {
    console.log('dispatched')
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
    console.log('dispatched')
    return {
        type: actionTypes.BUDGET_BY_DISTRICT,
        budget: budget,
        district: district,
    }

}
