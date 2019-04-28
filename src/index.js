import "@babel/polyfill"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from "./store/store"
import * as serviceWorker from './serviceWorker'
//import "semantic-ui-css/semantic.min.css"
import "semantic-ui-less/semantic.less"

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
}
