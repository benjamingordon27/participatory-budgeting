import logo from './logo.svg';
import './App.css';
import ControlsManager from './containers/ControlsManager/ControlsManager'
import BudgetMap from './containers/BudgetMap/BudgetMap'
import BudgetItemVisualization from './containers/BudgetItemVisualization/BudgetItemVisualization'
import LegendManager from './containers/LegendManager/LegendManager'

function App() {
  return (
    <div className="App">
      <h1>Welcome to this Participatory Budget viewer. Click on options below to find items on the participatory budget from the years 2012-2017.</h1>
      <p>Find current participatory budget requests here: <a href='http://ideas.pbnyc.org/page/about' target='_blank' style={{color: 'blue'}} >http://ideas.pbnyc.org/page/about</a></p>
      <ControlsManager />
      <div className="row">
        <div style={{width: '40%', height:'100vh', left: '0', right: '0',overflowY: 'scroll'}}>
          <BudgetItemVisualization />
        </div>
        <BudgetMap />
        <LegendManager />
      </div>
    </div>
  );
}

export default App;