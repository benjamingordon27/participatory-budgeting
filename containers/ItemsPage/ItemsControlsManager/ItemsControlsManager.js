import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Dropdown from '../../../components/UI/Dropdown/Dropdown';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';

class ItemControlsManager extends Component {

    state = {
        firstPageLoad: false,
        
        selectedYear: '',
        selectedCategory: '',
        selectedDistrict: '',
        minCost: '',
        maxCost: '',
        minVotes: '',
        maxVotes: '',
        councilMember: '',
    }

    componentDidMount(){      
        this.setState({firstPageLoad: false});
        if(!this.props.participatoryBudget && !this.props.districts && !this.props.councilMembers)
            this.props.onInitBudget();           
    }

    componentDidUpdate(prevProps, prevState){        

        if(!this.state.firstPageLoad && this.props.participatoryBudget){
            console.log('we have loaded and the budget is here')

            this.props.onBudgetFilter(this.props.participatoryBudget, this.props.councilMembers,
                this.state.selectedCategory, 
                this.state.selectedYear, 
                this.state.selectedDistrict, 
                this.state.minCost, 
                this.state.maxCost,
                this.state.minVotes, 
                this.state.maxVotes,   
                this.state.councilMember,                 
                )

            this.setState({firstPageLoad: true}) 
        }
    }

    getQuery = () => {
        var newQuery = '';
        if(this.state.selectedYear !== '')
            newQuery += 'year='+this.state.selectedYear+'&'
        if(this.state.selectedCategory !== '')
            newQuery += 'category='+this.state.selectedCategory+'&'
        if(this.state.selectedDistrict !== '')
            newQuery += 'district='+this.state.selectedDistrict+'&'
        if(this.state.minCost !== '')
            newQuery += 'minCost='+this.state.minCost+'&'
        if(this.state.maxCost !== '')
            newQuery += 'maxCost='+this.state.maxCost+'&'
        if(this.state.minVotes !== '')
            newQuery += 'minVotes='+this.state.minVotes+'&'
        if(this.state.maxVotes !== '')
            newQuery += 'maxVotes='+this.state.maxVotes+'&'
        // if(newQuery.charAt(newQuery.length -1) === '&')
        if(newQuery.length > 0){
            newQuery = '?id=2&' + newQuery;
            newQuery = newQuery.substring(0, newQuery.length - 1);
        }
        
        // this.setState({query: newQuery});
        return newQuery;
    }

    heckSelected = (array) => {
        Object.keys(array).map(item => {
            if(array[item] !== ''){
                return false;
            }
        })
        return true;
    }

    submit = (budget, councilMembers, category, year, district,minCost, maxCost, minVotes, maxVotes, councilMember) => {                
        console.log('are we submitting?')
        
        this.props.onResetMap();
        this.props.onUpdateMap(this.props.districts, this.props.selectedDistricts, this.props.councilMembers, this.props.selectedBudgetItems);
        this.props.onBudgetFilter(budget, councilMembers, category, year, district,minCost, maxCost, minVotes, maxVotes, councilMember);
        this.props.onResetClickedItem();        
        this.props.onCenter();
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

    councilMemberState = (event) => {
        this.setState({councilMember: event.target.value})
    }

    clearInput = () => {        
        // console.log('clearing input ', document.querySelectorAll("select"))
        Array.from(document.querySelectorAll("Input")).forEach(
            input => (input.value = '')
        );
        Array.from(document.querySelectorAll("select")).forEach(
            select => (select.value = '')
        );
        this.setState({
            selectedYear: '',
            selectedCategory: '',
            selectedDistrict: '',
            minCost: '',
            maxCost: '',
            minVotes: '',
            maxVotes: '',
            councilMember: '',
        })

        this.props.onResetSelectedItems();
    }

    render(){
        let data ='';
        if(this.props.loading){
            data = <Spinner />;
        }

        // console.log('state',this.state)
        
        return (
            <div>
                {this.props.participatoryBudget && this.props.districts && this.props.councilMembers && this.props.itemCategories ?
                    <div>
                        <Dropdown message={'Items by Council Member'} title= {'Council Member'} list={this.props.councilMembersList} handleChange={this.councilMemberState}/>
                        <Dropdown message={'Items by district'} title= {'Districts'} list={this.props.itemDistricts} handleChange={this.itemsByDistrict}/>
                        <Dropdown message={'Items by year'} title={'Year'} list={this.props.itemYears} handleChange={this.itemsByYear}/>
                        <Dropdown message={'Items by category'} title={'Category'} list={this.props.itemCategories} handleChange={this.itemsByCategory}/>
                        <Input label='Minimum cost' handleChange={this.minCostState} step='0.01'/>
                        <Input label='Maximum cost' handleChange={this.maxCostState} step='0.01'/>
                        <Input label='Minimum votes' handleChange={this.minVotesState} step='1'/>
                        <Input label='Maximum votes' handleChange={this.maxVotesState} step='1'/>

                        <br></br>
                        <Button message={'Submit'} link={'/items'+this.getQuery()} clicked = {() => 
                            this.props.onBudgetFilter(this.props.participatoryBudget, this.props.councilMembers,
                                        this.state.selectedCategory, 
                                        this.state.selectedYear, 
                                        this.state.selectedDistrict, 
                                        this.state.minCost, 
                                        this.state.maxCost,
                                        this.state.minVotes, 
                                        this.state.maxVotes,   
                                        this.state.councilMember,                 
                                        )}/>                                                
                        <Button message={'Clear'} clicked ={() => this.clearInput()} />
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

        selectedBudgetItems: state.setMap.selectedBudgetItems,        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResetSelectedItems: () => dispatch(actions.resetSelectedItems()),
        onInitBudget: () => dispatch(actions.initBudget()),          
        onZoomIn: () => dispatch(actions.zoomIn()),
        onZoomOut: () => dispatch(actions.zoomOut()),
        onCenter: () => dispatch(actions.center()),
        onShowDistricts: () => dispatch(actions.showDistricts()),
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

export default connect(mapStateToProps,mapDispatchToProps)(ItemControlsManager);