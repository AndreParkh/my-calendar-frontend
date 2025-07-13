'use client'
import './components/App/App.css'
import ReactDom from "react-dom/client";
import App from "./components/App/App.jsx";
import React from "react";

ReactDom.hydrateRoot(document.getElementById("root"), React.createElement(App));

