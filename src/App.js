import React from 'react';
import './scss/style.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import{BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Sidebar />
      </BrowserRouter>
     

    </div>
    );
}

export default App;
