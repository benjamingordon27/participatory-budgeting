import React from 'react';
import classes from './BudgetItem.module.css'
import {priceFormatter, numberFormatter} from '../../util/numberFormatting'

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
                        <p style={{color: 'blue'}}><u>Click to focus</u></p>
                    </React.Fragment>
                    :''
                }
        </div>
    );    
}

export default budgetItem;