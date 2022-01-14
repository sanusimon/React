import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes  , Route } from 'react-router-dom';

import Home from './Home';
import AboutPage from './Pages/About';
import ServicePage from './Pages/Services';
import ProdcutDetail from './Pages/Services/ProdcutDetail'
import Login from './Pages/Login'
import Register from './Pages/Register';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Home/>
        </Route>
        <Route path="about" element={<AboutPage />}>
          <AboutPage/>
        </Route>
        <Route path="services" element={<ServicePage />}>
          <ServicePage/>
        </Route>
        <Route path="login" element={<Login />}>
          <Login />
        </Route>

        <Route path="/services/:productId" element={< ProdcutDetail />}>
          <ProdcutDetail />
        </Route>

        <Route path='register' element={<Register/>}></Route>

      </Routes>
    </Router>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
