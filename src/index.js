import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './reducers';
import { Provider } from 'react-redux';
import FilmsNowInTheatres from './components/FilmsNowInTheatres'

ReactDOM.render(
    <Provider store = {store}>
        <FilmsNowInTheatres />
    </Provider>,
    document.getElementById('root')
);
