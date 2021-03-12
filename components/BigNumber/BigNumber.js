import React, {Component} from 'react';
import classes from './BigNumber.module.css'
import {numberFormatter} from '../../util/numberFormatting';

class BigNumber extends Component {
    render(){
        return(
            <div className={classes.BigNumber}>                
                <p>{this.props.label}</p>
                {this.props.number ? <p>{this.props.dollar ? '$': ''}{numberFormatter(this.props.number)}</p> : null}
            </div>
        );
    }
}

export default BigNumber;