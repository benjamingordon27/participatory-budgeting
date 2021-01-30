import * as actionTypes from './actionTypes';
import axios from '../../axios-order';
import * as getRequests from './getRequests'

//For the axios get request: /resource/wwhr-5ven.json

export const fetchCouncilMemberStart = () => {
    return {
        type: actionTypes.FETCH_COUNCIL_MEMBER_START
    }

}

export const fetchCouncilMemberSuccess = (councilMembers) => {
    return {
        type: actionTypes.FETCH_COUNCIL_MEMBER_SUCCESS,
        councilMembers: councilMembers
    }
}

export const fetchCouncilMemberFail = (error) => {
    return {
        type: actionTypes.FETCH_COUNCIL_MEMBER_FAIL,
        error: error
    }
}

export const fetchParticipatoryBudgetItemStart = () => {
    return {
        type: actionTypes.FETCH_PARTICIPATORY_BUDGET_ITEM_START
    }

}

export const fetchParticipatoryBudgetItemSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PARTICIPATORY_BUDGET_ITEM_SUCCESS,
        data: data
    }
}

export const fetchDistrictsFail = (error) => {
    return {
        type: actionTypes.FETCH_DISTRICTS_FAIL,
        error: error
    }
}

export const fetchDistrictsStart = () => {
    return {
        type: actionTypes.FETCH_DISTRICTS_START
    }

}

export const fetchDistrictsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DISTRICTS_SUCCESS,
        districts: data
    }
}

export const fetchParticipatoryBudgetItemFail = (error) => {
    return {
        type: actionTypes.FETCH_PARTICIPATORY_BUDGET_ITEM_FAIL,
        error: error
    }
}

export const initBudget = () => {
    return dispatch => {
        dispatch(fetchCouncilMemberStart());
            axios.get(getRequests.cityCouncilMembers)
                .then(response => {
                    console.log("COUNCIL MEMBER CALL",response.data)
                    dispatch(fetchCouncilMemberSuccess(JSON.stringify(response.data)))                
                }).then( () => {
                    dispatch(fetchParticipatoryBudgetItemStart());
                    axios.get(getRequests.participatoryBudget)
                        .then(response => {
                            console.log(response.data)
                            dispatch(fetchParticipatoryBudgetItemSuccess(JSON.stringify(response.data)))             
                        }).then( () => {
                            dispatch(fetchDistrictsStart());
                            axios.get(getRequests.cityCouncilDistricts)
                            .then(response => {
                                console.log('FETCH DISTRICTS',response.data);
                                dispatch(fetchDistrictsSuccess(JSON.stringify(response.data)))
                            }).catch(error => dispatch(fetchDistrictsFail(error)))
                        })
                })
                .catch(error => dispatch(fetchCouncilMemberFail(error)))
    }
}

// export const fetchCouncilMember = (district) => {
//     return dispatch => {
//         dispatch(fetchCouncilMemberStart());
//         axios.get(getRequests.cityCouncilMembers)
//             .then(response => {
//                 console.log("COUNCIL MEMBER CALL",response.data)
//                 dispatch(fetchCouncilMemberSuccess(JSON.stringify(response.data), district))                
//             })
//             .catch(error => dispatch(fetchCouncilMemberFail(error)))
//     }
// }