import React from 'react'
import '../App.css';
import { useEffect , useState } from 'react';
import axios from 'axios';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

function Lsd() {


    const [confirmedWorldValue,setConfirmedWorldValue] = useState("");
    const [confirmedIndiaValue,setConfirmedIndiaValue] = useState("");
    const [confirmedKarnatakaValue,setConfirmedKarnatakaValue] = useState("");
    const [confirmedDateValue,setConfirmedDateValue] = useState("");
      
    useEffect(()=>{
        axios({
            method:'get',
            url:'https://hospital-future.herokuapp.com//LiveCovid19Data',
            data: {
                }
            })
            .then((response)=> {
        
                setConfirmedWorldValue(response.data.confirmedWorld);
                setConfirmedIndiaValue(response.data.confirmedIndia);
                setConfirmedKarnatakaValue(response.data.confirmedKarnataka);
                setConfirmedDateValue(response.data.todaysDateConfirmed);
        
        
            console.log("WORLD : " + confirmedWorldValue);
            console.log("INDIA : " + confirmedIndiaValue);
            console.log("KARNATAKA : " + confirmedKarnatakaValue);
            console.log("DATE : " + confirmedDateValue);
            }, (error) => {
            console.log(error);
            });
            
    },[confirmedWorldValue,confirmedIndiaValue,confirmedKarnatakaValue,confirmedDateValue]);


    return (
        <div className='bx'>
        <div className='b5'>
            <div className='b5-div'>
            <CoronavirusIcon className='coronaIcon'/>
            </div>
            
        </div>
        <div className='b6'>
        <div className='coronainfo'>
            <div id="live">LIVE</div><br></br>
            <div>Corona Covid-19 Tracker</div><br></br>
            <div>Number of new cases</div><br></br>
            <div>{"Date : " + confirmedDateValue}</div><br></br>
            <div className='confirmedValue1'><div>{"World : "}</div><div className='confirmedValueWorld'>{confirmedWorldValue}</div></div><br></br>
            <div className='confirmedValue1'><div>{"India : "}</div><div className='confirmedValueIndia'>{confirmedIndiaValue}</div></div><br></br>
            <div className='confirmedValue1'><div>{"Karnataka : "}</div><div className='confirmedValueKarnataka'>{confirmedKarnatakaValue}</div> </div><br></br>
           
        </div>
        </div>
        </div>
    )
}

export default Lsd
