import React from 'react';
import './App.css';
import Sidebar  from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Lsd from './Components/Lsd';

function HomeDiv() {
  return <div className='App'>
       <div className='main-body-div'>
                <div className='top-div'><Topbar/></div>
                <div className='bottom-div'>
                  <div className='left-div'><Sidebar/></div>
                  <div className='right-side-div'><Lsd/></div>
                </div>
            </div>   
  </div>;
}

export default HomeDiv;
