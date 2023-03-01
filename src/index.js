import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import PersonalityCard from "./components/personality-card.js";
import { Provider } from "react-redux";
import store from "./redux/store";
import swDev from './swDev';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersonalityCard />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
swDev();