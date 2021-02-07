import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Button from '../../components/UI/Button/Button';
import BudgetItem from '../../components/BudgetItem/BudgetItem'

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

        console.log('[BudgetItemVisualization.js]', this.props);

        return(
            <div>                                
                {this.props.selectedBudgetItems ? 
                    this.props.selectedBudgetItems.map(item => {                        
                        return <BudgetItem key={item.title + ' ' + item.description} {...item} councilMember={this.findDistrict(item.council_district)} clicked={() => this.setCenter(item)}/>
                    })
                :<p>Budget items will load here</p>}                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedBudgetItems: state.subsets.selectedBudgetItems,
        councilMembers: state.participatoryBudget.councilMembers,

        center: state.setMap.center,
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