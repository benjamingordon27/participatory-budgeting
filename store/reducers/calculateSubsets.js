import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import {translateCategory, translateCategoryText} from '../../util/translateCategory';

const initialState = {            
    selectedBudgetItems: null,
    selectedDistricts: null,
    action: {},    
    loading: false,
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

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.CHANGE_CATEGORY) console.log('action.category', action.category)

    switch(action.type){
        case actionTypes.BUDGET_FILTER: return updateObject(state, {selectedBudgetItems: filterBudget(action.budget, action.councilMembers, action.category, action.year, action.district, action.minCost, action.maxCost, action.minVotes, action.maxVotes, action.councilMember), action: {...action}, loading: false})
        case actionTypes.RESET_SELECTED_ITEMS: return updateObject(state, {selectedBudgetItems: []})        
        default:
            return state;
    }
}

export default reducer;