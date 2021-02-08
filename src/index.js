import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import participatoryBudgetReducer from './store/reducers/initBudget';
import calculateSubsetsReducer from './store/reducers/calculateSubsets';
import setMap from './store/reducers/setMap';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  participatoryBudget: participatoryBudgetReducer,
  subsets: calculateSubsetsReducer,
  setMap: setMap,
  
})

const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
