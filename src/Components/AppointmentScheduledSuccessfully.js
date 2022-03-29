import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function AppointmentScheduledSuccessfully() {
  return (
    <div className='PatientAddedSuccessDiv'>
    <div className='PatientAddedSuccess'>
    <div className='PatientAddedSuccessBottom'>APPOINTMENT SCHEDULED SUCCESSFULLY.</div>
        <div className='PatientAddedSuccessTop'><CheckBoxIcon className="checkBoxIcon"/></div>
    </div>
</div>
  )
}

export default AppointmentScheduledSuccessfully