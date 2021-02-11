import React, {Component} from 'react';
import ParticipatoryBudgetMap from '../ParticipatoryBudgetMap/ParticipatoryBudgetMap';
import Statistics from '../Statistics/Statistics';
import AboutPage from '../AboutPage/AboutPage';
import ItemsPage from '../ItemsPage/ItemsPage';
import classes from './HomePage.module.css'

import {Route,NavLink,Switch,Redirect} from 'react-router-dom'

class HomePage extends Component{
    render(){
        return(
            <div className = {classes.HomePage}>
                <header>
                    <nav>
                        <ul>                            
                            <li><NavLink to='/'>Map</NavLink></li>
                            <li><NavLink to='/statistics'>Statistics</NavLink></li>
                            <li><NavLink to='/items-page'>Items Page</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            {/* <li><NavLink to='/posts' exact>Posts</NavLink></li>
                            <li><NavLink to={{pathname: '/new-post', hash: '#submit', search: '?quick-submit=true'}}>New Post</NavLink></li> */}
                        </ul>
                    </nav>
                </header>  
                <Switch>                    
                    <Route path='/statistics' component={Statistics} />
                    <Route path='/items-page' component={ItemsPage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/' component={ParticipatoryBudgetMap} />
                </Switch>                
            </div>
        );
    }
}

export default HomePage;