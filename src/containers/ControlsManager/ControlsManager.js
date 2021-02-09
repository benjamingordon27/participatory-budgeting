import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class ControlsManager extends Component {

    state = {
        selectedYear: '',
        selectedCategory: '',
        selectedDistrict: '',
        minCost: '',
        maxCost: '',
        minVotes: '',
        maxVotes: '',
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

    minCostState = (event) => {
        this.setState({minCost: event.target.value})
    }

    maxCostState = (event) => {
        this.setState({maxCost: event.target.value})
    }

    minVotesState = (event) => {
        this.setState({minVotes: event.target.value})
    }

    maxVotesState = (event) => {
        this.setState({maxVotes: event.target.value})
    }

    render(){
        let data ='';
        if(this.props.loading){
            data = <Spinner />;
        }

        // console.log('state',this.state)
        
        return (
            <div>
                {/* <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input> */}                

                <Button message={'Zoom In'} clicked={this.props.onZoomIn}/>
                <Button message={'Zoom Out'} clicked={this.props.onZoomOut}/>  
                <Button message={'Center'} clicked={this.props.onCenter}/>  
                {this.props.districts ?<Button message={'Show Districts'} clicked={this.props.onShowDistricts}/> :null}

                {this.props.participatoryBudget && this.props.districts && this.props.councilMembers && this.props.itemCategories ?
                    <div>
                        <Dropdown message={'Items by Council Member'} title= {'Council Member'} list={this.props.councilMembersList} handleChange={this.itemsByDistrict}/>
                        <Dropdown message={'Items by district'} title= {'Districts'} list={this.props.itemDistricts} handleChange={this.itemsByDistrict}/>
                        <Dropdown message={'Items by year'} title={'Year'} list={this.props.itemYears} handleChange={this.itemsByYear}/>
                        <Dropdown message={'Items by category'} title={'Category'} list={this.props.itemCategories} handleChange={this.itemsByCategory}/>
                        <Input label='Minimum cost' handleChange={this.minCostState}/>
                        <Input label='Maximum cost' handleChange={this.maxCostState}/>
                        <Input label='Minimum votes' handleChange={this.minVotesState}/>
                        <Input label='Maximum votes' handleChange={this.maxVotesState}/>


                        <Button message={'Submit'} clicked = {() => 
                            this.props.onBudgetFilter(this.props.participatoryBudget, 
                                        this.state.selectedCategory, 
                                        this.state.selectedYear, 
                                        this.state.selectedDistrict, 
                                        this.state.minCost, 
                                        this.state.maxCost,
                                        this.state.minVotes, 
                                        this.state.maxVotes,                                   
                                        )}/>
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
        councilMembersList: state.participatoryBudget.councilMembersList,
        districts: state.participatoryBudget.districts,
        districtsLoading: state.participatoryBudget.districtsLoading,
        itemCategories: state.participatoryBudget.itemCategories,
        itemYears: state.participatoryBudget.itemYears,
        itemDistricts: state.participatoryBudget.itemDistricts,

        selectedBudgetItems: state.subsets.selectedBudgetItems,        
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
        onCenter: () => dispatch(actions.center()),
        onShowDistricts: () => dispatch(actions.showDistricts()),
        onBudgetFilter: (budget, category, year, district,minCost, maxCost, minVotes, maxVotes) => 
            dispatch(actions.budgetFilter(budget, 
                        category, 
                        year, 
                        district, 
                        minCost, 
                        maxCost, 
                        minVotes, 
                        maxVotes
                        )),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ControlsManager);