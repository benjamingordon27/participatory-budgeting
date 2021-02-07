import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Button from '../../components/UI/Button/Button';

class ControlsManager extends Component {

    state = {
        selectedYear: '',
        selectedCategory: '',
        selectedDistrict: '',
    }

    componentDidMount(){        
        this.props.onInitBudget();        
    }

    itemsByYear = (event) => {                
        this.setState({selectedYear: event.target.value})
    }

    itemsByDistrict = (event) => {        
        this.setState({selectedDistrict: event.target.value})
    }

    itemsByCategory = (event) => {        
        this.setState({selectedCategory: event.target.value})
    }

    render(){
        let data ='';
        if(this.props.loading){
            data = <Spinner />;
        }
        
        console.log(this.props, this.state)

        return (
            <div>
                <Button message={'Zoom In'} clicked={this.props.onZoomIn}/>
                <Button message={'Zoom Out'} clicked={this.props.onZoomOut}/>  

                {this.props.participatoryBudget && this.props.districts && this.props.councilMembers && this.props.itemCategories ?
                    <div>
                        <Dropdown message={'Items by district'} title= {'Districts'} list={this.props.itemDistricts} handleChange={this.itemsByDistrict}/>              
                        <Dropdown message={'Items by year'} title={'Year'} list={this.props.itemYears} handleChange={this.itemsByYear}/>
                        <Dropdown message={'Items by category'} title={'Category'} list={this.props.itemCategories} handleChange={this.itemsByCategory}/>

                        <Button message={'Submit'} clicked = {() => this.props.onBudgetFilter(this.props.participatoryBudget, this.state.selectedCategory, this.state.selectedYear, this.state.selectedDistrict)}/>
                        <br></br>
                        <Button message={'Top 10 Budget Items by Cost'}/>
                        <Button message={'Item with highest cost'}/>
                        {/* <Button clicked = {() => this.props.onBudgetByDistrict(this.props.participatoryBudget, this.getStateSelectedDistrict())} message={'Submit District'}/>
                        <Button clicked = {() => this.props.onBudgetByYear(this.props.participatoryBudget, this.getStateSelectedYear())} message={'Submit Year'}/>
                        <Button clicked = {() => this.props.onBudgetByCategory(this.props.participatoryBudget, this.getStateSelectedCategory())} message={'Submit Category'}/> */}
                    </div>
                :null}
                {data}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currItem: state.participatoryBudget.currItem,
        participatoryBudget: state.participatoryBudget.participatoryBudget,
        loading: state.participatoryBudget.loading,
        councilMemberLoading: state.participatoryBudget.councilMemberLoading,
        error: state.participatoryBudget.error,
        councilMembers: state.participatoryBudget.councilMembers,
        districts: state.participatoryBudget.districts,
        districtsLoading: state.participatoryBudget.districtsLoading,
        itemCategories: state.participatoryBudget.itemCategories,
        itemYears: state.participatoryBudget.itemYears,
        itemDistricts: state.participatoryBudget.itemDistricts,

        selectedBudgetItems: state.subsets.selectedBudgetItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitBudget: () => dispatch(actions.initBudget()),  
        onBudgetByYear: (budget, year) => dispatch(actions.budgetByYear(budget,year)),
        onBudgetByCategory: (budget, category) => dispatch(actions.budgetByCategory(budget,category)),
        onBudgetByDistrict: (budget, district) => dispatch(actions.budgetByDistrict(budget,district)),
        onZoomIn: () => dispatch(actions.zoomIn()),
        onZoomOut: () => dispatch(actions.zoomOut()),
        onBudgetFilter: (budget, category, year, district) => dispatch(actions.budgetFilter(budget, category, year, district)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlsManager);