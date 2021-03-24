import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

import BudgetItem from '../../../components/BudgetItem/BudgetItem'

class SelectedBudgetItem extends Component {
    state = {
        firstPageLoad: false,
    }

    componentDidUpdate(prevProps, prevState){
        if(!this.props.clickedItem && (this.props.clickedItem !== prevProps.clickedItem)){            
            this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);
        }
        
        if(this.props.item && !this.props.clickedItem){                 
            this.props.onZoomMarker({lat: this.props.item.latitude, lng: this.props.item.longitude}, this.props.item)
        }
    }

    findDistrict = (district) => {
        if(this.props.councilMembers){                        
            var councilMember = this.props.councilMembers.filter(item => item.district === district.match(/\d+/)[0]);            
            return councilMember;
        }
    }

    render(){        
        console.log('[SelectedBudgetItem.js]', this.props.clickedItem)
        return(
            <div>                                                                
                {this.props.clickedItem ? 
                    <BudgetItem 
                        {...this.props.clickedItem} 
                        councilMember={this.findDistrict(this.props.clickedItem.council_district)}                         
                />
                :<p>Selected item will show up here</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {                        
        center: state.setMap.center,
        clickedItem: state.setMap.clickedItem,
        
        item: state.subsets.item,

        participatoryBudget: state.participatoryBudget.participatoryBudget,
        councilMembers: state.participatoryBudget.councilMembers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onZoomMarker: (center, item) => dispatch(actions.zoomMarker(center, item)),   
        onZoomIn: () => dispatch(actions.zoomIn()),
        onZoomOut: () => dispatch(actions.zoomOut()),      
        
        onFindItem: (budget, lat, lng, title) => dispatch(actions.findItem(budget, lat, lng, title)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedBudgetItem);