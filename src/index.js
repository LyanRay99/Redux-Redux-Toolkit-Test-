import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Redux
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducerFn from './Store/reducer/r_counter';

const store = createStore(reducerFn)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode >
  </Provider>
);

reportWebVitals();

// * Cấu hình actions.js 
/**
 * * 1 - Tạo function có 2 thuộc tính type và payload
 */

// TODO: CẤU HÌNH REDUX
// * Cấu hình index.JS (main), (ta cũng có thể cấu hình ở file store.js riêng và import vào index.js)
/**
 * * 1 - Import createStore from redux library
 * * 2 - Tạo variable store = createStore với 3 giá trị truyền vào (rootReducer, initValue, enhancer)
 * * 3 - rootReducer là function trong folder Reducers ta sẽ setup nó sau
 * * 3 - Import Provider và bọc nó vào component App
 * * 4 - Provider có tham số store={store} (là biến store đã tạo ở trên)
 */

// * Cấu hình reducer.js (nó sẽ up date state thông qua actions)
/**
 * * 1 - Create Variable 'initState' to save initValue
 * * 2 - Create function 'rootReducer' to make logic with each Case in switch case
 * * 3 - With default value, we will return state (giá trị cũ)
 * * 4 - Export ra và import vào Store để truyền vào createStore (ở đây đang là Index.js)
 */


/**
 * TODO: Cấu hình code Redux
 * * 1 - Tạo store
 * *    + import {configureStore} from '@reduxjs/toolkit'
 * *    + Tạo biến để lưu giá trị reduce: const store
 * 
 */