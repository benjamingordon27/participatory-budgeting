import React, {Component} from 'react';
import ParticipatoryBudgetMap from '../ParticipatoryBudgetMap/ParticipatoryBudgetMap';
import Statistics from '../Statistics/Statistics';
import AboutPage from '../AboutPage/AboutPage';
import ItemsPage from '../ItemsPage/ItemsPage';
import classes from './HomePage.module.css'

import {Route,Link,Switch} from 'react-router-dom'

class HomePage extends Component{
    render(){
        return(
            <div className = {classes.HomePage}>
                <header>
                    <nav>
                        <ul>                            
                            <li><Link to='/'>Map</Link></li>
                            <li><Link to='/statistics'>Statistics</Link></li>
                            <li><Link to='/items-page'>Items Page</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            {/* <li><Link to='/posts' exact>Posts</Link></li>
                            <li><Link to={{pathname: '/new-post', hash: '#submit', search: '?quick-submit=true'}}>New Post</Link></li> */}
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