import React, {Component} from 'react';
import classes from './BudgetItem.module.css'

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',      
});

const budgetItem = (props) => {
    return (
        <div className={classes.BudgetItem}>
                <strong>Name:</strong> {props.title}<br></br>
                <strong>Description:</strong> {props.description}<br></br>
                <strong>Cost:</strong> {formatter.format(props.cost)}<br></br>
                <strong>Year:</strong> {props.vote_year}<br></br>
                <strong>Category:</strong> {props.category}<br></br>
                <strong>Borough:</strong> {props.councilMember.borough}<br></br>
                <strong>Council District:</strong> {props.council_district}<br></br>
                <strong>Current Council Member:</strong> {props.councilMember.name}, {props.councilMember.political_party}
        </div>
    );    
}

export default budgetItem;