import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer, { initialState } from './reducer'
 
const store = createStore(reducer, initialState, applyMiddleware(thunk))
 
export default props => <Provider store={store} {...props} />