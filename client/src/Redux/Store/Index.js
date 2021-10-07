
import thunk from 'redux-thunk';
import {createStore,combineReducers,applyMiddleware} from 'redux';
//import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import Reducerfetch from '../Reducers/Reducerfetch';
import Reducercart from '../Reducers/Reducercart';


//for multi reducers
const rootReducer = combineReducers({
    items : Reducerfetch,
    cart :  Reducercart
    
  })

 export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

