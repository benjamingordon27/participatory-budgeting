import React, {Component} from 'react';
import ParticipatoryBudgetMap from '../ParticipatoryBudgetMap/ParticipatoryBudgetMap';
import Statistics from '../Statistics/Statistics';
import AboutPage from '../AboutPage/AboutPage';
import ItemsPage from '../ItemsPage/ItemsPage';
import classes from './HomePage.module.css'

import {BrowserRouter,Route,NavLink,Switch, Redirect, withRouter} from 'react-router-dom'

class HomePage extends Component{
    render(){
        return(
            <div className = {classes.HomePage}>
                <header>
                    <nav>
                        <ul>             
                            <li><NavLink to='/map'>Map</NavLink></li>
                            <li><NavLink to='/statistics'>Statistics</NavLink></li>
                            <li><NavLink to='/items-page'>Items</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>                            
                        </ul>
                    </nav>
                </header>                  
                    <Switch>                    
                        <Route exact path='/statistics' component={Statistics} />
                        <Route exact path='/items-page' component={ItemsPage} />
                        <Route exact path='/about' component={AboutPage} />                        
                        <Route path='/map/:category/:name,:latitude,:longitude' component={ParticipatoryBudgetMap} />
                        <Route path='/map' component={ParticipatoryBudgetMap} />
                        <Redirect from='/' to='/map'/>
                    </Switch>                  
            </div>
        );
    }
}

export default HomePage;