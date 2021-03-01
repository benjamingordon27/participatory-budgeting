import React, {Component} from 'react';
import classes from './Legend.module.css'
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class Legend extends Component {

    filter(category){        
        this.props.onBudgetFilter(this.props.participatoryBudget,this.props.councilMembers,category,'','','','','','','')        
    }

    render(){
        return (
            <div class={classes.Legend}>
                    {Object.keys(this.props.legendMarkers).map(key => (
                        <div onClick={() => this.filter(key)}>
                            {this.props.zoom <=12 ?
                                <img src={this.props.legendMarkers[key].dot} alt={key}></img>:
                                <img src={this.props.legendMarkers[key].img} alt={key}></img>
                            }                        
                            {' '}{key}
                        </div>
                    ))}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {        
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
                        )),        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Legend);