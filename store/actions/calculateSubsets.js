import * as actionTypes from './actionTypes';

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


export const budgetFilterFromURL = (budget, query) => {        

    return {
        type: actionTypes.BUDGET_FILTER_FROM_URL,
        budget: budget,
        query: query,
    }
}