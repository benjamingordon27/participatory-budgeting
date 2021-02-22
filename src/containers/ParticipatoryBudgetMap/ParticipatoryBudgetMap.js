import React, {Component} from 'react';
import classes from './ParticipatoryBudgetMap.module.css'
import ControlsManager from './ControlsManager/ControlsManager'
import BudgetMap from './BudgetMap/BudgetMap'
import BudgetItemVisualization from './BudgetItemVisualization/BudgetItemVisualization'
import LegendManager from './LegendManager/LegendManager'

class ParticipatoryBudgetMap extends Component {
    render(){
        return(
            <div className={classes.ParticipatoryBudgetMap}>
                <h1>Welcome to this Participatory Budget viewer. Click on options below to find items on the participatory budget from the years 2012-2017.</h1>
                <p>Find current participatory budget requests here: <a href='http://ideas.pbnyc.org/page/about' target='_blank' rel='noreferrer' style={{color: 'blue'}} >http://ideas.pbnyc.org/page/about</a>, <a href='https://council.nyc.gov/pb/' target='_blank' rel='noreferrer' style={{color: 'blue'}}>https://council.nyc.gov/pb/</a></p>                
                <ControlsManager />
                <div className="row">
                    <LegendManager />
                    <BudgetMap />
                    <div style={{width: '40%', height:'100vh', left: '0', right: '0',overflowY: 'scroll'}}>
                        <BudgetItemVisualization />
                    </div>                    
                </div>
            </div>
        );
    }
}

export default ParticipatoryBudgetMap;
