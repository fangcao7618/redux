// import 'babel-polyfill';
import 'amfe-flexible';
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './routers/Layout';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import rootReducer from './reducers/Counter'; //  最后换成很多个的写法
import todoApp from './reducers/reducers';

const rootElement = document.getElementById('root');
const store = createStore(todoApp);
render(
    <Provider store={store} >
        <App />
    </Provider>, rootElement);
// store.subscribe(render);
registerServiceWorker();