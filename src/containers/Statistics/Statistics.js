import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import * as d3 from "d3";
import Spinner from '../../components/UI/Spinner/Spinner';
import HorizontalBarChart from '../../components/D3/HorizontalBarChart/HorizontalBarChart';
import VerticalBarChart from '../../components/D3/VerticalBarChart/VerticalBarChart';
// import {drawChart} from '../../components/D3/BarChart/BarChart';

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
            
            var sum = 0;
            budgetAsArray.filter(i => item === i.council_district.match(/\d+/)[0]).map(item => {
                sum = sum + Number(item.cost)
            })
            outputDistrictData.push(                
                {
                    title: `District ${item}: ${currCouncilMember}`, 
                    count: budgetAsArray.filter(i => item === i.council_district.match(/\d+/)[0]).length,
                    cost: sum,
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
                        key={'cost'}
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
                        key={'votes'}
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
                        key={'cost'}
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
                        key={'votes'}
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