import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css'
import Home from "./pages/home/home";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
