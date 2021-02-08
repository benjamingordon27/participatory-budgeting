import React, {Component} from 'react';
import classes from './BudgetItem.module.css'

var priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',      
});

var numberFormatter = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const budgetItem = (props) => {

    return (
        <div className={classes.BudgetItem} onClick={props.clicked}>
                <strong>Name:</strong> {props.title}<br></br>
                <strong>Description:</strong> {props.description}<br></br>
                <strong>Cost:</strong> {priceFormatter.format(props.cost)}<br></br>
                {props.votes ? <React.Fragment><strong>Votes:</strong> {numberFormatter(props.votes)}<br></br></React.Fragment>:null}
                <strong>Year:</strong> {props.vote_year}<br></br>
                <strong>Category:</strong> {props.category}<br></br>
                <strong>Council District:</strong> {props.council_district}<br></br>

                {props.councilMember.length > 0 ?
                    <React.Fragment>
                        <strong>Borough:</strong> {props.councilMember[0].borough}<br></br>
                        <strong>Current Council Member:</strong> {props.councilMember[0].name}, {props.councilMember[0].political_party}<br></br>
                    </React.Fragment>
                : null}                    
                {props.longitude && props.latitude ?
                    <React.Fragment>
                        <a href = '#'>Click to focus</a>
                    </React.Fragment>
                    :''
                }
        </div>
    );    
}

export default budgetItem;