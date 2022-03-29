import React from 'react';
import { BrowserRouter as Router, Route,Switch,  Link } from "react-router-dom";
import AboutRouter from './AboutRouter';
import ContactRouter from './ContactRouter';
import HomeRouter from './HomeRouter';
import '../App.css';

function MainReactRouter() {
  return <div>
      <Router>
     
     <Link to="/home">
         <div className='routerDiv1'>
            
           </div>
       </Link>
     <Link to="/about">
         <div className='routerDiv2'>
            
           </div></Link>
     <Link to="/contact">
         <div className='routerDiv3'>
             
           </div></Link>
           <Switch>
              <Route path="/home"><HomeRouter/></Route>
              <Route path="/about"><AboutRouter/></Route>
              <Route path="/contact"><ContactRouter/></Route>
        </Switch>
     
 </Router>
  </div>;
}

export default MainReactRouter;
