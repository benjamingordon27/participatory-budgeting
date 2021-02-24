import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import {mapMarkerImgs} from '../../../components/UI/MapMarker/mapMarkerImgs';
import Legend from '../../../components/UI/Legend/Legend';

class LegendManager extends Component {

    render(){
        console.log('[LegendManager.js]',this.props)

        return(
            <div>
                <Legend 
                    legendMarkers={mapMarkerImgs} 
                    zoom={this.props.zoom}                    
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        zoom: state.setMap.zoom,
        participatoryBudget: state.participatoryBudget.participatoryBudget,
        councilMembers: state.participatoryBudget.councilMembers,
    }
}

const mapDispatchToProps = dispatch => {
    return {        
        onBudgetFilter: (budget, councilMembers, category, year, district,minCost, maxCost, minVotes, maxVotes, councilMember) => 
            dispatch(actions.budgetFilter(budget, councilMembers,
                        category, 
                        year, 
                        district, 
                        minCost, 
                        maxCost, 
                        minVotes, 
                        maxVotes,
                        councilMember,
                        ))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LegendManager);