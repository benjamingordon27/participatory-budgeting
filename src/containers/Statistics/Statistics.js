import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import HorizontalBarChart from '../../components/D3/HorizontalBarChart/HorizontalBarChart';
import BigNumber from '../../components/BigNumber/BigNumber';
import * as stats from './statisticHelpers'

class Statistics extends Component{    

    componentDidMount(){        
        if(!this.props.participatoryBudget && !this.props.districts && !this.props.councilMembers)
            this.props.onInitBudget();    
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
                    <BigNumber label={'The total amount of money voted on in participatory budgeting from 2012-2017 is: '} dollar={true} number={stats.totalSum(this.props.participatoryBudget, 'cost')} />                    
                    <BigNumber label={'The total amount of votes cast in participatory budgeting from 2012-2017 is: '} dollar={false} number={stats.totalSum(this.props.participatoryBudget, 'votes')} />

                    <HorizontalBarChart 
                        key={'yearCost'}
                        reference='yearCostBarChart' 
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerYear(this.props.participatoryBudget)} 
                        variable={'cost'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Cost by Year'}
                        chartTitle = 'Total Cost by Year'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {true}
                        labelClicked = {this.showItem}
                        description = {''}
                    />

                    <HorizontalBarChart 
                        key={'yearCount'}
                        reference='yearCountBarChart' 
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerYear(this.props.participatoryBudget)} 
                        variable={'count'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Budget Items by Year'}
                        chartTitle = 'Total Budget Items by Year'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}
                        description = {''}
                    />

                    <HorizontalBarChart 
                        key={'yearVotes'}
                        reference='yearVotesBarChart' 
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerYear(this.props.participatoryBudget)} 
                        variable={'votes'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Votes Counted by Year'}
                        chartTitle = 'Total Votes Counted by Year'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}
                        description = {''}
                    />
                    
                    <HorizontalBarChart 
                        key={'categoryCost'}
                        reference='categoryCostBarChart' 
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerCategory(this.props.participatoryBudget, 5, 'cost')} 
                        variable={'cost'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Cost'}
                        chartTitle = 'The Top 5 Categories for Participatory Budget Items by Cost'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {true}
                        labelClicked = {this.showItem}
                        description = {'The top five categories in terms of money raised in participatory budgeting from 2012-2017 are:'}
                    />

                    <HorizontalBarChart 
                        key={'categoryCount'}
                        reference='categoryCostBarCount' 
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerCategory(this.props.participatoryBudget, 5, 'count')} 
                        variable={'count'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Count'}
                        chartTitle = 'The Top 5 Categories for Participatory Budget Items by Count'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}
                        description = {'The top five categories in terms of count in participatory budgeting from 2012-2017 are:'}
                    />

                    <HorizontalBarChart 
                        key={'categoryVotesCount'}
                        reference='categoryVotesCountBarChart' 
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerCategory(this.props.participatoryBudget, 5, 'votes')} 
                        variable={'votes'}
                        margin = {{top: 40, right: 20, bottom: 50, left: 320}}
                        xAxisLabel = {'Total Votes'}
                        chartTitle = 'The Top 5 Categories for Participatory Budget Items by Votes'
                        padding = {0.2}
                        rectColor = {'blue'}
                        numberColor = {'white'}
                        dollar = {false}
                        labelClicked = {this.showItem}
                        description = {'The top five categories in terms of votes in participatory budgeting from 2012-2017 are:'}
                    />

                    <HorizontalBarChart 
                        key={'districtVotesCount'}
                        reference='districtVotesCountBarChart' 
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerDistrict(this.props.participatoryBudget, this.props.councilMembers, 10, 'votes')} 
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
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerDistrict(this.props.participatoryBudget, this.props.councilMembers, 10, 'count')} 
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
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.itemsPerDistrict(this.props.participatoryBudget, this.props.councilMembers, 10, 'cost')} 
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
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.topTenItemsSorted(10, this.props.participatoryBudget, 'cost')} 
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
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.topTenItemsSorted(10, this.props.participatoryBudget, 'votes')} 
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
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.bottomTenItemsSorted(10, this.props.participatoryBudget, 'cost')} 
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
                        width={1000} 
                        height={400} 
                        draw={true} 
                        dataToGraph={stats.bottomTenItemsSorted(10, this.props.participatoryBudget, 'votes')} 
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