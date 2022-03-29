import React from 'react';
import axios from 'axios';

function WelcomeTitleDiv() {
  axios({
    method:'get',
    url:'https://hospital-future.herokuapp.com/StartServer',
    data: {
            }
    })
    .then((response)=> {
    }, (error) => {
    });
  return <div className="WelcomeTitleDiv">
      <div className='WelcomeTitleDivContent'>KLS HOSPITAL MANAGEMENT SYSTEM</div>
  </div>;
}

export default WelcomeTitleDiv;
