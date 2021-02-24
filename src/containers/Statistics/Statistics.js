import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {translateCategory, translateCategoryText} from '../../util/translateCategory';
import Spinner from '../../components/UI/Spinner/Spinner';
import HorizontalBarChart from '../../components/D3/HorizontalBarChart/HorizontalBarChart';
import Dropdown from '../../components/UI/Dropdown/Dropdown';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Statistics extends Component{    

    componentDidMount(){        
        if(!this.props.participatoryBudget && !this.props.districts && !this.props.councilMembers)
            this.props.onInitBudget();    
    }

    topTenItemsSorted(howMany, budget, variable){
        let budgetAsArray = budget;

        budgetAsArray = budgetAsArray.filter(item => !isNaN(item[variable]));        

        budgetAsArray.sort((a, b) => (Number(a[variable]) < Number(b[variable])) ? 1 : -1)
        budgetAsArray.splice(howMany,budgetAsArray.length-howMany);  

        // let data = budgetAsArray.map(item => Number(item[this.props.variable]));
        let data = budgetAsArray;
        data.forEach(item => item[variable] = Number(item[variable]));
        
        return data;
    }

    bottomTenItemsSorted(howMany, budget, variable){
        let budgetAsArray = budget;

        budgetAsArray = budgetAsArray.filter(item => !isNaN(item[variable]));        

        budgetAsArray.sort((a, b) => (Number(a[variable]) > Number(b[variable])) ? 1 : -1)
        budgetAsArray.splice(howMany,budgetAsArray.length-howMany);  

        // let data = budgetAsArray.map(item => Number(item[this.props.variable]));
        let data = budgetAsArray;
        data.forEach(item => item[variable] = Number(item[variable]));
        
        return data;
    }

    itemsPerDistrict(budget, councilMembers, howMany, variable){
        let budgetAsArray = budget;        
        
        let outputDistrictData = [];

        let districts = [];
        var keys = Object.keys(councilMembers);
        keys.forEach(function(key){
            districts.push(councilMembers[key].district);
        });    
        let allDistricts = districts.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);

        allDistricts.map(item => {            
            var currCouncilMember = ''
            var filteredArray = councilMembers.filter(i => item === i.district.match(/\d+/)[0]);
            if(filteredArray.length > 0)                
                var currCouncilMember = filteredArray[[0]].name;
            
            var sumCount = 0;
            var sumVotes = 0;
            budgetAsArray.filter(i => item === i.council_district.match(/\d+/)[0]).map(item => {
                sumCount = sumCount + Number(item.cost);
                if(!isNaN(item.votes))
                    sumVotes = sumVotes + Number(item.votes);
            })


            outputDistrictData.push(                
                {
                    title: `District ${item}: ${currCouncilMember}`, 
                    count: budgetAsArray.filter(i => item === i.council_district.match(/\d+/)[0]).length,
                    cost: sumCount,
                    votes: sumVotes,
                }
            );
        })


        outputDistrictData.sort((a, b) => (Number(a[variable]) < Number(b[variable])) ? 1 : -1)
        outputDistrictData.splice(howMany,outputDistrictData.length-howMany);  

        // let data = budgetAsArray.map(item => Number(item[this.props.variable]));
        let data = outputDistrictData;
        data.forEach(item => item[variable] = Number(item[variable]));        
        console.log(data)
        return data;        
    }

    itemsPerCategory = (budget, howMany, variable) => {
        let budgetAsArray = budget;
        let outputCategoryData = [];

        let categories = [];
        var keys = Object.keys(budget);
        keys.forEach(function(key){
            categories.push(translateCategoryText(budget[key].category));
        });    
        let allCategories = categories.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);

        allCategories.map(item => {
            var sumCount = 0;
            var sumCost = 0;
            var sumVotes = 0;
            budgetAsArray.filter(i => item === translateCategoryText(i.category)).map(item => {
                sumCost = sumCost + Number(item.cost);
                if(!isNaN(item.votes))
                    sumVotes = sumVotes + Number(item.votes);
                sumCount = sumCount + 1;
            })            
            
            console.log(sumCount)

            outputCategoryData.push(                
                {
                    title: `Category: ${item}`, 
                    count: sumCount,
                    cost: sumCost,
                    votes: sumVotes,
                }
            );
            
        })


        outputCategoryData.sort((a, b) => (Number(a[variable]) < Number(b[variable])) ? 1 : -1)
        outputCategoryData.splice(howMany,outputCategoryData.length-howMany);  

        

        // let data = budgetAsArray.map(item => Number(item[this.props.variable]));
        let data = outputCategoryData;
        data.forEach(item => item[variable] = Number(item[variable]));                
        return data;        
    }

    showItem(item){
        console.log('has the item been clicked?', item)
    }
    
    render(){
        console.log('[Statistics.js] props', this.props);
        let data = <Spinner />;
        if(this.props.participatoryBudget && this.props.districts && this.props.councilMembers){            
            // drawChart(this.props.participatoryBudget, 'cost', 700, 400);
            // data = '';
            data = 
                <div>

                        {/* <Dropdown message={'Items by Council Member'} title= {'Council Member'} list={this.props.councilMembersList} handleChange={this.councilMemberState}/>
                        <Dropdown message={'Items by district'} title= {'Districts'} list={this.props.itemDistricts} handleChange={this.itemsByDistrict}/>
                        <Dropdown message={'Items by year'} title={'Year'} list={this.props.itemYears} handleChange={this.itemsByYear}/>
                        <Dropdown message={'Items by category'} title={'Category'} list={this.props.itemCategories} handleChange={this.itemsByCategory}/>
                         */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <HorizontalBarChart 
                        key={'categoryCost'}
                        reference='categoryCostBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.itemsPerCategory(this.props.participatoryBudget, 5, 'cost')} 
                        variable={'cost'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Cost'}
                        chartTitle = 'The Top 5 Categories for Participatory Budget Items by Cost'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {true}
                        labelClicked = {this.showItem}                    
                    />

                    <HorizontalBarChart 
                        key={'categoryCount'}
                        reference='categoryCostBarCount' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.itemsPerCategory(this.props.participatoryBudget, 5, 'count')} 
                        variable={'count'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Count'}
                        chartTitle = 'The Top 5 Categories for Participatory Budget Items by Count'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}                        
                    />

                    <HorizontalBarChart 
                        key={'categoryVotesCount'}
                        reference='categoryVotesCountBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.itemsPerCategory(this.props.participatoryBudget, 5, 'votes')} 
                        variable={'votes'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Votes'}
                        chartTitle = 'The Top 5 Categories for Participatory Budget Items by Votes'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}                        
                    />

                    <HorizontalBarChart 
                        key={'districtVotesCount'}
                        reference='districtVotesCountBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.itemsPerDistrict(this.props.participatoryBudget, this.props.councilMembers, 10, 'votes')} 
                        variable={'votes'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Votes'}
                        chartTitle = 'The Top 10 Districts for Participatory Budget Items by Votes'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}                        
                    />

                    <HorizontalBarChart 
                        key={'districtCount'}
                        reference='districtCountBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.itemsPerDistrict(this.props.participatoryBudget, this.props.councilMembers, 10, 'count')} 
                        variable={'count'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Count'}
                        chartTitle = 'The Top 10 Districts for Participatory Budget Items by Count'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}                        
                    />

                    <HorizontalBarChart 
                        key={'districtCost'}
                        reference='districtCostBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.itemsPerDistrict(this.props.participatoryBudget, this.props.councilMembers, 10, 'cost')} 
                        variable={'cost'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Cost'}
                        chartTitle = 'The Top 10 Districts for Participatory Budget Items by Cost'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {true}
                        labelClicked = {this.showItem}                        
                    />

                    <HorizontalBarChart 
                        key={'costBarChart'}
                        reference='costBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.topTenItemsSorted(10, this.props.participatoryBudget, 'cost')} 
                        variable={'cost'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Cost'}
                        chartTitle = 'The Top 10 Most Costly Participatory Budgeting Items'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {true}
                        labelClicked = {this.showItem}                        
                    />

                    <HorizontalBarChart 
                        key={'votesBarChart'}
                        reference='votesBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.topTenItemsSorted(10, this.props.participatoryBudget, 'votes')} 
                        variable={'votes'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Votes'}
                        chartTitle = 'The Top 10 Most Voted on Participatory Budgeting Items'
                        padding = {0.2}
                        rectColor = {'lightpink'}
                        numberColor = {'black'}
                        dollar = {false}
                        labelClicked = {this.showItem}
                    />

                    <HorizontalBarChart
                        key={'lowCostBarChart'}
                        reference='lowCostBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.bottomTenItemsSorted(10, this.props.participatoryBudget, 'cost')} 
                        variable={'cost'}
                        margin = {{top: 40, right: 50, bottom: 50, left: 320}}
                        xAxisLabel = {'Cost'}
                        chartTitle = 'The 10 Least Costly Participatory Budgeting Items'
                        padding = {0.2}
                        rectColor = {'green'}
                        numberColor = {'white'}
                        dollar = {true}
                        labelClicked = {this.showItem}
                    />

                    <HorizontalBarChart 
                        key={'lowVotesBarChart'}
                        reference='lowVotesBarChart' 
                        width={1200} 
                        height={400} 
                        draw={true} 
                        dataToGraph={this.bottomTenItemsSorted(10, this.props.participatoryBudget, 'votes')} 
                        variable={'votes'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Votes'}
                        chartTitle = 'The 10 Least Voted on Participatory Budgeting Items'
                        padding = {0.2}
                        rectColor = {'orange'}
                        numberColor = {'black'}
                        dollar = {false}
                        labelClicked = {this.showItem}
                    />
                </div>
            
        }
        return(
            <div>
                Yo yo here we go this is the statistics page
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
    }
}

const mapDispatchToProps = dispatch => {
    return {        
        onInitBudget: () => dispatch(actions.initBudget()),  
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Statistics);