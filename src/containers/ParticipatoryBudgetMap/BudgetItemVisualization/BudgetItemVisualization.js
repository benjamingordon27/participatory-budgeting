import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

import BudgetItem from '../../../components/BudgetItem/BudgetItem'

class BudgetItemVisualization extends Component {

    setCenter = (item) => {
        if(item.longitude && item.latitude){
            this.props.onZoomMarker({lat: item.latitude, lng: item.longitude});
        }
    }

    findDistrict = (district) => {
        if(this.props.councilMembers){                        
            var councilMember = this.props.councilMembers.filter(item => item.district === district.match(/\d+/)[0]);            
            return councilMember;
        }
    }

    render(){

        console.log(this.props)

        let budgetItems = [];
        if(this.props.selectedBudgetItems){
            this.props.selectedBudgetItems.map((item,idx )=> {
                budgetItems.push( <BudgetItem 
                            key={idx} 
                            {...item} 
                            councilMember={this.findDistrict(item.council_district)} 
                            clicked={() => this.setCenter(item)}
                        />
                    );
            })
        }
        
        return(
            <div>                                                
                {this.props.selectedBudgetItems && !this.props.clickedItem ? budgetItems : null}
                {this.props.clickedItem ? 
                    <BudgetItem 
                        {...this.props.clickedItem} 
                        councilMember={this.findDistrict(this.props.clickedItem.council_district)} 
                        clicked={() => this.setCenter(this.props.clickedItem)}
                />
                :budgetItems}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedBudgetItems: state.subsets.selectedBudgetItems,
        councilMembers: state.participatoryBudget.councilMembers,        
        
        center: state.setMap.center,
        clickedItem: state.setMap.clickedItem,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onZoomMarker: (center) => dispatch(actions.zoomMarker(center)),
        onZoomIn: () => dispatch(actions.zoomIn()),
        onZoomOut: () => dispatch(actions.zoomOut()),        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BudgetItemVisualization);