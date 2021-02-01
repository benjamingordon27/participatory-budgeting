import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class BudgetMap extends Component{
    state = {
        firstPageLoad: false,
        
    } 

    componentDidMount(){
        if(this.props.districts){
            this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(!this.state.firstPageLoad && this.props.loaded){
            this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
            this.setState({firstPageLoad: true})
        }

        if((prevProps.selectedBudgetItems !== this.props.selectedBudgetItems)){
            this.props.onResetMap();            
            this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
            
        }        
    }
    
    render(){
        return(
            <div style={{ height: '87vh', width: '100%' }}>
                {this.props.map}
            </div>            
        );
    }
}

const mapStateToProps = state => {
    return {
        currItem: state.participatoryBudget.currItem,
        participatoryBudget: state.participatoryBudget.participatoryBudget,        
        councilMemberLoading: state.participatoryBudget.councilMemberLoading,
        error: state.participatoryBudget.error,
        councilMembers: state.participatoryBudget.councilMembers,
        districts: state.participatoryBudget.districts,
        districtsLoading: state.participatoryBudget.districtsLoading,   
        selectedDistricts: state.participatoryBudget.selectedDistricts,   
        loaded: state.participatoryBudget.loaded,
        
        map: state.setMap.map,        
        selectedBudgetItems: state.subsets.selectedBudgetItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {        
        onSetMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems) => dispatch(actions.setMap(districts, selectedDistricts, councilMembers, selectedBudgetItems)),  
        onUpdateMap: (districts, selectedDistricts, councilMembers, selectedBudgetItems) => dispatch(actions.updateMap(districts, selectedDistricts, councilMembers, selectedBudgetItems)),  
        onResetMap: () => dispatch(actions.resetMap()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BudgetMap);