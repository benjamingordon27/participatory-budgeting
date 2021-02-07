import React, {Component} from 'react';
import classes from './BudgetItem.module.css'

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',      
});

const budgetItem = (props) => {

    console.log(props)

    return (
        <div className={classes.BudgetItem} onClick={props.clicked}>
                <strong>Name:</strong> {props.title}<br></br>
                <strong>Description:</strong> {props.description}<br></br>
                <strong>Cost:</strong> {formatter.format(props.cost)}<br></br>
                <strong>Year:</strong> {props.vote_year}<br></br>
                <strong>Category:</strong> {props.category}<br></br>
                <strong>Council District:</strong> {props.council_district}<br></br>

                {props.councilMember.length > 0 ?
                    <React.Fragment>
                        <strong>Borough:</strong> {props.councilMember.borough}<br></br>
                        <strong>Current Council Member:</strong> {props.councilMember[0].name}, {props.councilMember[0].political_party}<br></br>
                    </React.Fragment>
                : null}                    
                {props.longitude && props.latitude ?
                    <div>
                        <a href = ''><p>Click to focus</p></a>
                    </div>
                    :''
                }
        </div>
    );    
}

export default budgetItem;