import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import './css/index.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/font-awesome-4.7.0/css/font-awesome.min.css';


//the initial state of the app
const initialState = {
  contacts: [ 
    { name: 'Maurice', phone: '+2348127173850', address: 'Trans-ekulu, Enugu',  occupation: 'software engineer' },

    { name: 'lil sis', phone: 2304389372, address: 'UNN nsukka', occupation: 'student' },

    { name: 'Mr Onyeka', phone: 2304389372, address: 'Amorji nike', occupation: 'civil service' },

    { name: 'Willi', phone: 2304389372, address: 'Onitcha, Anambara', occupation: 'tycoon' }

  ],
  modal: 'none'
};


//reducer function
function reducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_CONTACT':

      return {...state, contacts: [...state.contacts, action.data]}

    case 'TOGGLE_MODAL':

      return {...state, modal: action.data}

    default:

      return state;

  }
}


//create our store and use <provider> to make it avail. to all child components
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
