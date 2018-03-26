// import 'babel-polyfill';
import 'amfe-flexible';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './views/test';
import App from './routers/Layout';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers/Counter'; //  最后换成很多个的写法
const store = createStore(rootReducer);

const render = () => ReactDOM.render(<App store={store} />,document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
render();
store.subscribe(render);
registerServiceWorker();
