import logo from './logo.svg';
import './App.css';
import VisualizationManager from './containers/VisualizationManager/VisualizationManager'
import BudgetMap from './containers/BudgetMap/BudgetMap'

function App() {
  return (
    <div className="App">
      <h1>Welcome to this Participatory Budget viewer. Click on options below to find items on the participatory budget from the years 2012-2017.</h1>
      <div className="row">
        <VisualizationManager />
        <BudgetMap />
      </div>      
    </div>
  );
}

export default App;
