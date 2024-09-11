import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore"
import DeviceStore from './store/DeviceStore';


// Создание контекста
export const Context = createContext(null);

// Создание корневого узла
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендер приложения
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}> 
    <App />
  </Context.Provider>
);
