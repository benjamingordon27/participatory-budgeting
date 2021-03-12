import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import App from 'next/app'

import participatoryBudgetReducer from '../store/reducers/initBudget';
import calculateSubsetsReducer from '../store/reducers/calculateSubsets';
import setMap from '../store/reducers/setMap';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  participatoryBudget: participatoryBudgetReducer,
  subsets: calculateSubsetsReducer,
  setMap: setMap,
  
})

const store = createStore(rootReducer,//composeEnhancers(
  applyMiddleware(thunk)//)
);

class MyApp extends App {
    render() {
      const { Component, pageProps, router } = this.props;

      const getLayout =
        Component.getLayout || (page => <SiteLayout children={page} />)      
  
      return getLayout(
        <Provider store={store}>
         <Component {...pageProps}></Component>
       </Provider>          
      )
    }
  }
  
export default MyApp;