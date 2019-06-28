import React from 'react';
import './scss/style.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Signup from './components/auth/Login';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 3000,
    draggable: false
});

function App() {
  return (
    <div>
        <Header/>
        <Sidebar />
        <Signup />    
    </div>
    );
}

export default App;
