import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisteredPage from './pages/RegisteredPage';
import Login from './pages/Login';
import PrivateComponent from "./components/PrivateComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <ToastContainer />
      <Routes>
          <Route element={<PrivateComponent />} />
          <Route path='/' element = {<App />} />
          <Route path = '/admin' element = {<AdminLogin />} />
          <Route path = '/login' element = {<Login />} />
          <Route path='/registered' element = {<RegisteredPage />} />
      </Routes>
  </Router>
);
