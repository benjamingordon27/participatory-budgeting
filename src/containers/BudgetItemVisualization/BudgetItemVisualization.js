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

    render(){

        console.log('[BudgetItemVisualization.js]', this.props.selectedBudgetItems);

        return(
            <div>                                
                {this.props.selectedBudgetItems ? 
                    this.props.selectedBudgetItems.map(item => {
                        return <BudgetItem key={item.title + ' ' + item.description} {...item} clicked={() => this.setCenter(item)}/>
                    })
                :<p>Budget items will load here</p>}                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedBudgetItems: state.subsets.selectedBudgetItems,

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