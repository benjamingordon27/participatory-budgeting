import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
import Spinner from '../../components/UI/Spinner/Spinner';
import {translateCategoryText} from '../../util/translateCategory';

const DEFAULT_CENTER = { lat: 40.635, lng: -73.94 };

const initialState = {
    map: <Spinner />,
    mapProps: {},
    zoom: 11,
    markers: [],
    center: DEFAULT_CENTER,
    showDistricts: false,
    clickedItem: null,
    url: '/',

    selectedBudgetItems: null,
    selectedDistricts: null,
    action: {},    
    loading: false,
    // item: null, 
}

const setMap = (state,districts, selectedDistricts, councilMembers, selectedBudgetItems) => {  
    
    return {
                zoom: state.zoom,
                districts: districts,
                selectedDistricts: selectedDistricts,
                councilMembers: councilMembers,
                selectedBudgetItems: selectedBudgetItems,                
            }
}

const zoomMarker = (state, action) => {    

    return updateObject (state, {
        zoom: 14, 
        center: action.center, 
        clickedItem: action.item,        
    });
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
    console.log('findItem',budget, lat, lng, title)      
    var clickedItem = budget.filter(item => Number(item.latitude) === Number(lat) && Number(item.longitude) === Number(lng) && item.title === title)[0];
        
    return {
        zoom: 14,
        clickedItem: clickedItem,
        center: {lat: Number(clickedItem.latitude), lng: Number(clickedItem.longitude)},        
    }
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
    switch(action.type){
        case actionTypes.SET_MAP: return updateObject(state, {mapProps: setMap(state,action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})        
        case actionTypes.UPDATE_MAP: return updateObject(state, {mapProps: setMap(state,action.districts, action.selectedDistricts, action.councilMembers, action.selectedBudgetItems)})        
        case actionTypes.RESET_MAP: return updateObject(state, {map: <Spinner />, clickedItem: null})        
        case actionTypes.ZOOM_MARKER: return zoomMarker(state, action)
        case actionTypes.RESET_CLICKED_ITEM: return updateObject(state, {clickedItem: null, zoom: 11, center: DEFAULT_CENTER})
        case actionTypes.ZOOM_IN: return updateObject(state, {zoom: state.zoom + 1})
        case actionTypes.ZOOM_OUT: return updateObject(state, {zoom: state.zoom - 1})
        case actionTypes.CENTER: console.log('centering!!!'); return updateObject(state, {zoom: 11, center: DEFAULT_CENTER, clickedItem: null})
        case actionTypes.SHOW_DISTRICTS: return updateObject(state, {map: <Spinner />})

        case actionTypes.BUDGET_FILTER: return updateObject(state, {selectedBudgetItems: filterBudget(action.budget, action.councilMembers, action.category, action.year, action.district, action.minCost, action.maxCost, action.minVotes, action.maxVotes, action.councilMember), action: {...action}, loading: false})
        case actionTypes.BUDGET_FILTER_FROM_URL: return updateObject(state, budgetFilterFromURL(action.budget, action.query))
        case actionTypes.FIND_ITEM: return updateObject(state, {...findItem(action.budget, action.lat, action.lng, action.title)})

        default:
            return state;
    }
}

export default reducer;