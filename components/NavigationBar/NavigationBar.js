import React from 'react';
import Link from 'next/link'
import classes from './NavigationBar.module.css';

const navigationBar = (props) => {
    return(
        <header className={classes.NavigationBar}>
            <nav>
                <ul>             
                    <li><Link href='/map'>Map</Link></li>
                    <li><Link href='/statistics'>Statistics</Link></li>
                    <li><Link href='/items'>Items</Link></li>
                    <li><Link href='/about'>About</Link></li>                            
                </ul>
            </nav>
        </header>  
    );
}

export default navigationBar;