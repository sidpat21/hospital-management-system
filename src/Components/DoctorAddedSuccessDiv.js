import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function DoctorAddedSuccessDiv() {
  return (
    <div className='PatientAddedSuccessDiv'>
      <div className='PatientAddedSuccess'>
      <div className='PatientAddedSuccessBottom'>Doctor details added successfully.</div>
          <div className='PatientAddedSuccessTop'><CheckBoxIcon className="checkBoxIcon"/></div>
      </div>
  </div>
  )
}

export default DoctorAddedSuccessDiv