import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import { createStore } from 'redux'
import storeReducer from './reducer'
import App from './App.js'

const store = createStore(storeReducer)
const render = () => ReactDOM.render(<App store={store}/>, document.getElementById('root'));
render()
store.subscribe(render)