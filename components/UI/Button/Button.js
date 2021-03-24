import React from 'react';
import classes from './Button.module.css'
import Link from 'next/link';

const button = (props) => (
    <span>
        {props.link ? <Link href={props.link}>
            <button className = {classes.Button} onClick={props.clicked}>{props.message}</button>
        </Link> : <button className = {classes.Button} onClick={props.clicked}>{props.message}</button>}
    </span>    
);

export default button;