import { ClassNames } from '@emotion/react';
import React , { useState , useEffect}  from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { MemoryRouter as Router, Route,Switch,  Link } from "react-router-dom";
import SecondSideBarElementDiv from './SecondSideBarElementDiv';
import ThirdSideBarElementDiv from './ThirdSideBarElementDiv';
import FourthSideBarElementDiv from './FourthSideBarElementDiv';
import FifthSideBarElementDiv from './FifthSideBarElementDiv';
import SixthSideBarElementDiv from './SixthSideBarElementDiv';
import { getValue } from '@testing-library/user-event/dist/utils';

import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import AddPatientProfile from './AddPatientProfile';
import PatientAddedSuccessDiv from './PatientAddedSuccessDiv';
import EditPatientProfile from './EditPatientProfile';
import DoctorAddedSuccessDiv from './DoctorAddedSuccessDiv';
import PatientDetailsUpdatedSuccessDiv from './PatientDetailsUpdatedSuccessDiv';
import ScheduleAppointmentDiv from './ScheduleAppointmentDiv';
import AppointmentScheduledSuccessfully from './AppointmentScheduledSuccessfully';

function Sidebar() {
  const [show,SetShow] = useState("1");
  const [show1,SetShow1] = useState("no");
  const [editPatient , SetEditPatient] = useState("no");
  const [scheduleApp , SetScheduleApp] = useState("no");
  const [generateBill , SetGenerateBill] = useState("no");

  const [val1,setVal1] = useState(1000);
  useEffect(()=>{
    const interval1 = setInterval(() => {
    (window.name).charAt(1)==="n"?setVal1(val1+0.00000000001):setVal1(1000)
    },val1);
    return () => clearInterval(interval1);
  },[val1]);




  function FirstSideBarElementDiv() {
    return <div className='HomeRouter'>
        
    <div className='HomeRouterTop'>
      <div className='HomeRouterTopLeft'>
        <div className='HomeRouterTopLeftInsider' onClick={()=>{SetScheduleApp("yes");}}>
             <div className='HomeRouterInsiderHolder'>
               <div className='HomeRouterInsiderIconDiv'>
                 <EventAvailableIcon className="HomeRouterInsiderIconSA"/>
               </div>
               <div className='HomeRouterInsiderName'>
               Schedule Appointment
               </div>
               </div>
        </div>
      </div>
      <div className='HomeRouterTopRight'>
      <div className='HomeRouterTopRightInsider' onClick={()=>{SetShow1("yes");}}>
      <div className='HomeRouterInsiderHolder'>
               <div className='HomeRouterInsiderIconDiv'>
                 <PersonAddIcon className="HomeRouterInsiderIconAPP"/>
               </div>
               <div className='HomeRouterInsiderName'>
               Add Patient Profile
               </div>
               </div>
      </div>
      </div>
    </div>
  
    <div className='HomeRouterBottom'>
      <div className='HomeRouterBottomLeft'>
      <div className='HomeRouterBottomRightInsider'onClick={()=>{SetEditPatient("yes");}}>
      <div className='HomeRouterInsiderHolder'>
               <div className='HomeRouterInsiderIconDiv'>
                 <EditIcon className="HomeRouterInsiderIconEPP"/>
               </div>
               <div className='HomeRouterInsiderName'>
               Edit Patient Profile
               </div>
               </div>
      </div>
      </div>
      <div className='HomeRouterBottomRight'>
      <div className='HomeRouterBottomLeftInsider' onClick={()=>{SetGenerateBill("yes");}}>
      <div className='HomeRouterInsiderHolder'>
               <div className='HomeRouterInsiderIconDiv'>
                 <DescriptionIcon className="HomeRouterInsiderIconGB"/>
               </div>
               <div className='HomeRouterInsiderName'>
               Generate Bill
               </div>
               </div>
      </div>
      </div>
    </div>
  
  </div>;
  }
  
















    return (  
    <div className='left-side-div'>
    <div className='left-sidebar-div'>
    <div className='Sidebar'>
        <ul className='SidebarList'>
        {SidebarData.map((val,key)=>{
          
          
              return ( 
                 <li key={key} 
                className='row'
                id={window.name.charAt(0)==val.number? "active": ""}
                onClick={()=>{SetShow(val.number); SetShow1("no") ; SetEditPatient("no"); SetScheduleApp("no");SetGenerateBill("no");(window.name = val.number.toString()+"nnn")}}> 
                <div id="icon">{val.icon}</div>
                <div id='title'>{val.title}</div>        
                </li>
               );
          
         
    })}
    </ul>
    </div>
    </div>
    <div className='middle-body-div'>
        {
          show === "1" ? (generateBill==="yes" ? (<SixthSideBarElementDiv/>) : ( (editPatient==="yes" ?
          ( (window.name.charAt(1)==="y" ? <PatientDetailsUpdatedSuccessDiv/> : <EditPatientProfile/> )):  
          (( show1 === "yes" ? ( (window.name).charAt(1)==="y" ? <PatientAddedSuccessDiv/> : <AddPatientProfile/> ) 
          : (scheduleApp === "yes" ? (window.name.charAt(3)==="y"?<AppointmentScheduledSuccessfully/>:<ScheduleAppointmentDiv/> ) :<FirstSideBarElementDiv/>) )))) ) :  (show=="2"?((window.name).charAt(2)==="y"?<DoctorAddedSuccessDiv/>:<SecondSideBarElementDiv/>):((show=="3")?(window.name.charAt(3)==="y"?<AppointmentScheduledSuccessfully/>:<ScheduleAppointmentDiv/> ):((show=="4")?((window.name).charAt(1)==="y" ? <PatientAddedSuccessDiv/> : <AddPatientProfile/>):((show=="5")?((window.name.charAt(1)==="y" ? <PatientDetailsUpdatedSuccessDiv/> : <EditPatientProfile/>)):(<SixthSideBarElementDiv/>)))))
       }
    </div> 
  </div>
  
  );

}

export default Sidebar
