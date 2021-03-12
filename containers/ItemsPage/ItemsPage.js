import React, {Component} from 'react';
import BudgetItemVisualization from './BudgetItemVisualization/BudgetItemVisualization';
import ItemsControlsManager from './ItemsControlsManager/ItemsControlsManager';
// import {withRouter} from 'react-router-dom';

class ItemsPage extends Component{
    render(){
        return(
            <div>                
                <div style={{textAlign: 'center', display: 'flex', flexDirection:'row'}}>
                    <ItemsControlsManager />
                </div>
                <BudgetItemVisualization />
            </div>
        );
    }
}

// export default withRouter(ItemsPage);
export default ItemsPage;
