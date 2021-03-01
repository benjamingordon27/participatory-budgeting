import {translateCategory, translateCategoryText} from '../../util/translateCategory';

export const itemsPerYear = (budget) => {
    let budgetAsArray = budget;

    budgetAsArray = budgetAsArray.filter(item => !isNaN(item.vote_year));        

    var years = [];
    var outputYearData = [];

    var keys = Object.keys(budgetAsArray);
    keys.forEach(function(key){
        years.push(budgetAsArray[key].vote_year);
    });    
    let allYears = years.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
    
    allYears.map(currYear => {                            
        var filteredArray = budget.filter(curr => curr.vote_year === currYear)   

        var count = filteredArray.length;  
        var sumCost = 0;
        var sumVotes = 0;
        filteredArray.map(item => {
            sumCost = sumCost + Number(item.cost);
            if(!isNaN(item.votes))
                sumVotes = sumVotes + Number(item.votes);
        })


        outputYearData.push(                
            {
                title: `${currYear}`, 
                count: count,
                cost: sumCost,
                votes: sumVotes,
            }
        );
    })
    console.log(outputYearData)
    return outputYearData;
}

export const topTenItemsSorted = (howMany, budget, variable) => {
    let budgetAsArray = budget;

    budgetAsArray = budgetAsArray.filter(item => !isNaN(item[variable]));        

    budgetAsArray.sort((a, b) => (Number(a[variable]) < Number(b[variable])) ? 1 : -1)
    budgetAsArray.splice(howMany,budgetAsArray.length-howMany);  

    // let data = budgetAsArray.map(item => Number(item[this.props.variable]));
    let data = budgetAsArray;
    data.forEach(item => item[variable] = Number(item[variable]));
    
    return data;
}

export const bottomTenItemsSorted = (howMany, budget, variable) => {
    let budgetAsArray = budget;

    budgetAsArray = budgetAsArray.filter(item => !isNaN(item[variable]));        

    budgetAsArray.sort((a, b) => (Number(a[variable]) > Number(b[variable])) ? 1 : -1)
    budgetAsArray.splice(howMany,budgetAsArray.length-howMany);  

    // let data = budgetAsArray.map(item => Number(item[this.props.variable]));
    let data = budgetAsArray;
    data.forEach(item => item[variable] = Number(item[variable]));
    
    return data;
}

export const itemsPerDistrict = (budget, councilMembers, howMany, variable) => {
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
    return data;        
}

export const totalSum = (budget, variable) => {
    let budgetAsArray = budget;
    let sum = 0;

    budgetAsArray.map(item => {
        if(item[variable])
            sum = sum + Number(item[variable])
    })

    return sum;
}

export const itemsPerCategory = (budget, howMany, variable) => {
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