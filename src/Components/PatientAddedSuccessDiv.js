import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function PatientAddedSuccessDiv() {
  return <div className='PatientAddedSuccessDiv'>
      <div className='PatientAddedSuccess'>
      <div className='PatientAddedSuccessBottom'>Patient details added successfully.</div>
          <div className='PatientAddedSuccessTop'><CheckBoxIcon className="checkBoxIcon"/></div>
      </div>
  </div>
}

export default PatientAddedSuccessDiv;
