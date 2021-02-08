import React from 'react';
import classes from './Input.module.css'

const input = (props) => (
    <div className = {classes.Input}>
        <label htmlFor='id' style={{display: 'block'}}>{props.label}</label>
        <span style={{fontSize: '15px'}}>$</span><input id='id' type='number' min="0" step="0.01" onChange={props.handleChange} placeholder={props.placeholder}></input>
    </div>
);

export default input;