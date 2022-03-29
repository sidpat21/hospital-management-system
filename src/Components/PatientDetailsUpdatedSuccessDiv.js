import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function PatientDetailsUpdatedSuccessDiv() {
  return (
    <div className='PatientAddedSuccessDiv'>
      <div className='PatientAddedSuccess'>
      <div className='PatientAddedSuccessBottom'>Patient details updated successfully.</div>
          <div className='PatientAddedSuccessTop'><CheckBoxIcon className="checkBoxIcon"/></div>
      </div>
  </div>
  )
}

export default PatientDetailsUpdatedSuccessDiv