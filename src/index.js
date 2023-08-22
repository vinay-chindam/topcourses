import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
//import 'react-toastify/dist/ReactTostify.css'
import {toast} from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App/>
    <ToastContainer/>
  </div>
);
