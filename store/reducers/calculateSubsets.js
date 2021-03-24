import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import {translateCategory, translateCategoryText} from '../../util/translateCategory';

const initialState = {            
    selectedBudgetItems: null,
    selectedDistricts: null,
    action: {},    
    loading: false,
    item: null,    
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
        newBudget = newBudget.filter(item => translateCategoryText(item.category) === category);    
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
        var councilMemberNew = councilMember.split(': ')[1];        
        var currDistrict = newCouncil.filter(member => member.name === councilMemberNew)[[0]].district;        
        newBudget = newBudget.filter(item => item.council_district === currDistrict);
    }    

    return newBudget;
}

const findItem = (budget, lat, lng, title) => {        
    return budget.filter(item => Number(item.latitude) === Number(lat) && Number(item.longitude) === Number(lng) && item.title === title)[0];
}

const budgetFilterFromURL = (budget, query) => {
    let newBudget = [];
    
    Object.keys(budget).map(key => {
        newBudget.push(budget[key])
    })

    if(query.year)
        newBudget = newBudget.filter(item => Number(item.vote_year) === Number(query.year));
    if(query.category)
        newBudget = newBudget.filter(item => translateCategoryText(item.category) === query.category);    
    if(query.district)
        newBudget = newBudget.filter(item => item.council_district === query.district);
    if(query.minCost)
        newBudget = newBudget.filter(item => Number(item.cost) >= Number(query.minCost));
    if(query.maxCost)
        newBudget = newBudget.filter(item => Number(item.cost) <= Number(query.maxCost));
    if(query.minVotes)
        newBudget = newBudget.filter(item => Number(item.votes) >= Number(query.minVotes));
    if(query.maxVotes)
        newBudget = newBudget.filter(item => Number(item.votes) <= Number(query.maxVotes));

    return {
        selectedBudgetItems: newBudget,
    }
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.CHANGE_CATEGORY) console.log('action.category', action.category)

    switch(action.type){
        case actionTypes.BUDGET_FILTER: return updateObject(state, {selectedBudgetItems: filterBudget(action.budget, action.councilMembers, action.category, action.year, action.district, action.minCost, action.maxCost, action.minVotes, action.maxVotes, action.councilMember), action: {...action}, loading: false})
        case actionTypes.BUDGET_FILTER_FROM_URL: return updateObject(state, budgetFilterFromURL(action.budget, action.query))
        case actionTypes.RESET_SELECTED_ITEMS: return updateObject(state, {selectedBudgetItems: []})        
        case actionTypes.FIND_ITEM: return updateObject(state, {item: findItem(action.budget, action.lat, action.lng, action.title)})
        default:
            return state;
    }
}

export default reducer;