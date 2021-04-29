import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

import BudgetItem from '../../../components/BudgetItem/BudgetItem'

class BudgetItemVisualization extends Component {

    state = {
        firstPageLoad: false,
    }

    componentDidUpdate(prevProps, prevState){
        //when first loaded, check if we can find the items from the url
        if(!this.state.firstPageLoad && this.props.loaded){       
            console.log('we loaded and the first page hasnt loaded')
            
            // this.props.onSetMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
            this.setState({firstPageLoad: true})

            if(this.props.router){
                if(this.props.router.query){
                    if(this.props.router.query.id === '1'){            
                        console.log('did we load', this.props.router.query.id)    
                        console.log('did we load', this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title)    
                        this.props.onFindItem(this.props.participatoryBudget, this.props.router.query.lat, this.props.router.query.lng, this.props.router.query.title);
                    }else if(this.props.router.query.id === '2'){                
                        console.log('did we load', this.props.router.query.id)    
                        this.props.onBudgetFilterFromURL(this.props.participatoryBudget, this.props.router.query);            
                    }  
                }                
            }
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
                            // clicked={() => this.setCenter(item)}
                        />
                    );
            })
        }
        
        return(
            <div>                                                
                {this.props.selectedBudgetItems ? budgetItems : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedBudgetItems: state.setMap.selectedBudgetItems,
        councilMembers: state.participatoryBudget.councilMembers,
        loaded: state.participatoryBudget.loaded,
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