import React, {Component} from 'react';
import classes from './ParticipatoryBudgetMap.module.css'
import MapControlsManager from './MapControlsManager/MapControlsManager'
import BudgetMap from './BudgetMap/BudgetMap'
import LegendManager from './LegendManager/LegendManager'
import SelectedBudgetItem from './SelectedBudgetItem/SelectedBudgetItem';

class ParticipatoryBudgetMap extends Component {
    render(){
        console.log('classes', classes)
        return(
            <div className={classes.ParticipatoryBudgetMap}>
                <h1>Welcome to this Participatory Budget viewer. Click on options below to find items on the participatory budget from the years 2012-2017.</h1>
                <p>Find current participatory budget requests here: <a href='http://ideas.pbnyc.org/page/about' target='_blank' rel='noreferrer' style={{color: 'blue'}} >http://ideas.pbnyc.org/page/about</a>, <a href='https://council.nyc.gov/pb/' target='_blank' rel='noreferrer' style={{color: 'blue'}}>https://council.nyc.gov/pb/</a></p>                
                <MapControlsManager />
                <div style={{display:'flex', flexDirection:'row'}}>
                    <LegendManager />
                    <BudgetMap />
                    <div style={{width: '40%', height:'100vh', left: '0', right: '0',overflowY: 'scroll'}}>
                        <SelectedBudgetItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default ParticipatoryBudgetMap;
