import React from 'react';
import classes from './Dropdown.module.css'

const dropdown = (props) => {       
    let options = '';
    if(props.list)
        options = props.list.map(item => <option key={item} value={item}>{item}</option>)
    return(
        <div className={classes.Dropdown}>
            {props.title+': '}
            <select onChange={props.handleChange}>
                {/* <option value={''}>{''}</option> */}
                {options}
            </select>
        </div>
    );
}

export default dropdown;