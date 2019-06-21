import React from 'react';
import './scss/style.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddLayer from './components/AddLayer'

function App() {
  return (
    <div>
      <Header/>
      <Sidebar />
      <AddLayer/>
    </div>
    );
}

export default App;
