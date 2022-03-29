import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import { Button, TextField } from '@mui/material';

import axios from 'axios';

function LoginDiv() {
  const [UserId,SetUserId] = React.useState("");
  const HandleOnChangeUserId = ((e)=>{
      SetUserId(e.target.value);
  })
  const [Password,SetPassword] = React.useState("");
  const HandleOnChangePassword = ((e)=>{
      SetPassword(e.target.value);
  })


  const Timer = (()=>{

      axios({
method:'post',
url:'https://hospital-future.herokuapp.com/ValidateUser',
data: {
	PostUserId : UserId ,
	PostPassword : Password,
	}
})
.then((response)=> {
console.log(response);
console.log(response.data);
response.data === 'success' ? window.name="ynnn" : alert("ENTER CORRECT CREDENTIALS !!!!");
}, (error) => {
console.log(error);
});

    });


    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            width: 300,
            margin: 100,
        },
        //style for font size
        resize:{
          fontSize:50
        },
        }
  

  return <div className='LoginDiv'> 
    <div className='LoginDivLeftside'>
        <div className='LoginDivLeftsideContentDiv'><div className='LoginDivLeftsideContentDivHolder'><LocalHospitalRoundedIcon className="LoginDivLeftsideContentHospitalIcon"/></div></div>
    </div>
    <div className='LoginDivRightside'>
        <div className='LoginDivRightsideContentDiv'>
            <div className='LoginDivRightsideContentDivIconDiv'><div className='LoginDivRightsideContentDivIconDivIconHolder'><AccountBoxIcon className='LoginDivRightsideContentDivIconDivAccountIcon'/></div></div>
            
            <div className='LoginDivRightsideContentDivBottomContent'>
            
            <div className='LoginDivRightsideContentDivUserIdDiv'>
                <TextField 

                InputLabelProps={{style: {fontSize: 20,color:"white",fontWeight:"bolder"}}} 
                
                
                focused value = {UserId} onChange={HandleOnChangeUserId}  id="UserId" type="text" variant="standard" label="Enter Your UserId" fullwidth/>
            </div>
            <div className='LoginDivRightsideContentDivPasswordDiv'>
                <TextField  
                
                InputLabelProps={{style: {fontSize: 20,color:"white",fontWeight:"bolder"}}} 

                focused value = {Password} onChange={HandleOnChangePassword}  id="Password" type="password" variant="standard" label="Enter Your Password" fullwidth/>
            </div>
            <div className='LoginDivRightsideContentDivSubmitDiv'>
                <Button id="Submit" onClick={Timer} variant="contained" color="primary" fullwidth>SUBMIT</Button>
            </div>
           
            </div>
        </div>
    </div>
  </div>;
}

export default LoginDiv;
