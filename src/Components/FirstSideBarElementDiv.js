import React, { useState }  from 'react';
import '../App.css';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';

function FirstSideBarElementDiv() {
  return <div className='HomeRouter'>
      
  <div className='HomeRouterTop'>
    <div className='HomeRouterTopLeft'>
      <div className='HomeRouterTopLeftInsider'>
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
    <div className='HomeRouterTopRightInsider'>
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
    <div className='HomeRouterBottomRightInsider'>
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
    <div className='HomeRouterBottomLeftInsider'>
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

export default FirstSideBarElementDiv;
