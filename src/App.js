import './App.css';
import Appbar from './Appbar';
import Boxes from './Components/Boxes';
import Hooks from './Components/Hooks';
import Sidebar  from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Sm from './Components/Sm';
import Demo from './Demo';
import Lsd from './Components/Lsd';
import FirstSideBarElementDiv from './Components/FirstSideBarElementDiv';
import SecondSideBarElementDiv from './Components/SecondSideBarElementDiv';
import ThirdSideBarElementDiv from './Components/ThirdSideBarElementDiv';
import FourthSideBarElementDiv from './Components/FourthSideBarElementDiv';
import FifthSideBarElementDiv from './Components/FifthSideBarElementDiv';
import SixthSideBarElementDiv from './Components/SixthSideBarElementDiv';
import { BrowserRouter as Router, Route,Switch,  Link } from "react-router-dom";


import MainReactRouter from './Components/MainReactRouter';
import RouterExample from './Components/RouterExample';
import HomeDiv from './HomeDiv';
import WelcomeDiv from './WelcomeDiv';
import { useState , useEffect } from 'react';
import WelcomeTitleDiv from './WelcomeTitleDiv';
import LoginDiv from './LoginDiv';


function App() {
  const [val,setVal] = useState(0);
  
  const [val1,setVal1] = useState(1000);

  const [val2,setVal2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    val===0 ? setVal(1) : (val===1 ? setVal(2):setVal(2))
    },4000);
    return () => clearInterval(interval);
  }, [val]);

  useEffect(()=>{
    const interval1 = setInterval(() => {
      (window.name).charAt(0)==="n"?setVal1(val1+0.00000000001):(setVal2(3) && setVal(3))
    },val1);
    return () => clearInterval(interval1);
  },[val1]);
  

  


  return (
    <div className="MainApp">
      {
        val === 0 ?  <WelcomeDiv/>: null
      }
      {
        val === 1 ? <WelcomeTitleDiv/>:null
      }
      {
        val === 2 && val2 != 3 ?  <HomeDiv/>: null
      }
      {
        val2 === 3 ?  <HomeDiv/>: null
      }
    </div>
  );
}

export default App;
