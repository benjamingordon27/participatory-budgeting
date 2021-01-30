import logo from './logo.svg';
import './App.css';
import ButtonManager from './containers/ButtonManager/ButtonManager'
import BudgetMap from './containers/BudgetMap/BudgetMap'

function App() {
  return (
    <div className="App">
      <h1>Welcome to this Participatory Budget viewer. Click on options below to find items on the participatory budget from the years 2012-2017.</h1>
      <p>Find current participatory budget requests here: <a href='http://ideas.pbnyc.org/page/about' target='_blank'>http://ideas.pbnyc.org/page/about</a></p>
      <ButtonManager />
      <div className="row">        
        <BudgetMap />
      </div>      
    </div>
  );
}

export default App;