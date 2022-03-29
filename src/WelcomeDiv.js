import React from 'react';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import axios from 'axios';

function WelcomeDiv() {
  
  axios({
    method:'get',
    url:'https://hospital-future.herokuapp.com/StartServer',
    data: {
            }
    })
    .then((response)=> {
    }, (error) => {
    });
  
  return <div className='WelcomeDiv'>
        
        <div className='WelcomeDivContentIcon'> <div className='hospitalIconDiv'><LocalHospitalRoundedIcon className="hospitalIcon"/></div></div>
        </div>   
}

export default WelcomeDiv;
