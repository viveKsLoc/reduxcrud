import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// For reference: consider creating store as the first step in the redux integration process
import { createStore } from 'redux';
// const store = createStore();

// For reference: consider creating store as the third step in the redux integration process
import postReducer from './reducers/postReducer';
// const store = createStore(postReducer);

// For reference: consider creating store as the fourth step in the redux integration process
import { Provider } from 'react-redux';
const store = createStore(postReducer);
// ReactDOM.render(
//     <Provider store={store}><App /></Provider>,
//     document.getElementById('root')
// );

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);