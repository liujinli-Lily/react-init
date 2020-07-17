import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './assets/css/index.css';
import './assets/scss/default.scss';
import store from './store/index'
import BasicRoute from './router/index';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');



ReactDOM.render(
      <Provider store={store}>
          <BasicRoute />
      </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
