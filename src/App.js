import React from 'react';
import './scss/style.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/auth/Signup';


function App() {
  return (
    <div>
        <Header/>
        <Sidebar />
        <Login />    
    </div>
    );
}

export default App;
