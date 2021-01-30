import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Button from '../../components/UI/Button/Button';
import BudgetItem from '../../components/BudgetItem/BudgetItem'

class VisualizationManager extends Component {

    state = {
        selectedYear: '',
        selectedCategory: '',
        selectedDistrict: '',
    }

    componentDidMount(){        
        this.props.onInitBudget();
        if(this.props.participatoryBudget && this.props.districts && this.props.councilMembers && this.props.itemCategories){
            this.setState({selectedYear: this.props.itemYears[0],selectedCategory: this.props.itemCategories[0],selectedDistrict: this.props.itemDistricts[0]});
        }
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
        
        return (
            <div>                
                {this.props.participatoryBudget && this.props.districts && this.props.councilMembers && this.props.itemCategories ?
                    <div>
                        <Button message={'Top 10 Budget Items by Cost'}/><br></br>
                        <Button message={'Item with highest cost'}/><br></br>                        
                        <Dropdown message={'Items by district'} title= {'Districts'} list={this.props.itemDistricts} handleChange={this.itemsByDistrict}/>
                        <Button clicked = {() => this.props.onBudgetByDistrict(this.props.participatoryBudget, this.state.selectedDistrict)} message={'Submit District'}/>
                        <Dropdown message={'Items by year'} title={'Year'} list={this.props.itemYears} handleChange={this.itemsByYear}/>
                        <Button clicked = {() => this.props.onBudgetByYear(this.props.participatoryBudget, this.state.selectedYear)} message={'Submit Year'}/>
                        <Dropdown message={'Items by category'} title={'Category'} list={this.props.itemCategories} handleChange={this.itemsByCategory}/>
                        <Button clicked = {() => this.props.onBudgetByCategory(this.props.participatoryBudget, this.state.selectedCategory)} message={'Submit Category'}/>
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
        onBudgetByDistrict: (budget, district) => dispatch(actions.budgetByDistrict(budget,district))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VisualizationManager);