import logo from './logo.svg';
import './App.css';
import ControlsManager from './containers/ControlsManager/ControlsManager'
import BudgetMap from './containers/BudgetMap/BudgetMap'
import BudgetItemVisualization from './containers/BudgetItemVisualization/BudgetItemVisualization'

function App() {
  return (
    <div className="App">
      <h1>Welcome to this Participatory Budget viewer. Click on options below to find items on the participatory budget from the years 2012-2017.</h1>
      <p>Find current participatory budget requests here: <a href='http://ideas.pbnyc.org/page/about' target='_blank'>http://ideas.pbnyc.org/page/about</a></p>
      <ControlsManager />
      <div className="row">
        <div style={{width: '40%'}}>
          <BudgetItemVisualization />
        </div>
        <BudgetMap />        
      </div>
    </div>
  );
}

export default App;