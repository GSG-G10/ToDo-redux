import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from "./store/reducer"
import {createStore} from "redux"
import {Provider} from "react-redux"

let store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
