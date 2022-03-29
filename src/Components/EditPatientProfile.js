import React, { useState } from 'react';
import '../App.css';
import { FormControl , InputLabel , FormHelperText} from '@mui/material';
import { Button, TextField ,Input} from '@mui/material';
import axios from 'axios';

function EditPatientProfile() {


  const [Id,SetId] = React.useState("");
  const HandleOnChangeId = ((e)=>{
      SetId(e.target.value);
  })
  const [Name,SetName] = React.useState("");
  const HandleOnChangeName = ((e)=>{
      SetName(e.target.value);
  })
  const [Gender,SetGender] = React.useState("");
  const HandleOnChangeGender = ((e)=>{
      SetGender(e.target.value);
  })
  const [Age,SetAge] = React.useState("");
  const HandleOnChangeAge = ((e)=>{
      SetAge(e.target.value);
  })
  const [Contact,SetContact] = React.useState("");
  const HandleOnChangeContact = ((e)=>{
      SetContact(e.target.value);
  })
  const [Email,SetEmail] = React.useState("");
  const HandleOnChangeEmail = ((e)=>{
      SetEmail(e.target.value);
  })
  const [Address,SetAddress] = React.useState("");
  const HandleOnChangeAddress = ((e)=>{
      SetAddress(e.target.value);
  })

  const[checker,SetChecker] = React.useState("1");


  const AddPatient = (()=>{

    axios({
method:'post',
url:'https://hospital-future.herokuapp.com//patient',
data: {
      id : Id,
      pname : Name,
      gender : Gender,
      age : Age,
      contact : Contact,
      email : Email,
      address : Address,
      image : baseImage
      }
})
.then((response)=> {
console.log(response);
response.status === 200 ? window.name="yynn" : alert("ERROR ");
}, (error) => {
console.log(error);
});

  });


  const SearchPatient = (()=>{

        axios({
  method:'get',
  url:'https://hospital-future.herokuapp.com//patient/'+Id,
  data: {
          }
  })
  .then((response)=> {
  console.log(response);
  SetId(response.data.id);
  SetName(response.data.pname);
  SetGender(response.data.gender);
  SetAge(response.data.age);
  SetContact(response.data.contact);
  SetEmail(response.data.email);
  SetAddress(response.data.address);
  setBaseImage(response.data.image);

  SetChecker("2");

  console.log(window.name.charAt(0));

  }, (error) => {
  console.log(error);
  });
  
      });

  const [baseImage,setBaseImage] = useState(require("./imagePreview.JPG"));

  const uploadImage= async (e)=>{
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
  }

  const convertBase64=(file)=>{
        return new Promise((resolve,reject)=>{
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload=()=>{
                        resolve(fileReader.result)
                };
                fileReader.onerror=(error)=>{
                        reject(error)
                };
        })
  }

  return <div className='AddPatientProfileDiv'>
        <div className='AddPatientProfile'>
        <div className='AddPatientProfileTitle'>
                UPDATE PATIENT DETAILS
        </div>
        <div className='AddPatientProfileTop'>
                  <div className='AddPatientProfileTopLeft'>

                          <div className='AddPatientProfileTopLeft1'>
              <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Id} 
                onChange={HandleOnChangeId}  
                id="Id" 
                type="text" 
                variant="outlined" 
                label="Id" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder" } }}/>
                          </div>

                          <div className='AddPatientProfileTopLeft2'>
                          <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Name} 
                onChange={HandleOnChangeName}  
                id="Name" 
                type="text" 
                variant="outlined" 
                label="Name" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                          </div>

                          <div className='AddPatientProfileTopLeft3'>
                          <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Gender} 
                onChange={HandleOnChangeGender}  
                id="Gender" 
                type="text" 
                variant="outlined" 
                label="Gender" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                          </div>
                          <div className='AddPatientProfileTopLeft4'>
                          <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Age} 
                onChange={HandleOnChangeAge}  
                id="Age" 
                type="text" 
                variant="outlined" 
                label="Age" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                          </div>

                          <div className='AddPatientProfileTopLeft5'>
                          <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Contact} 
                onChange={HandleOnChangeContact}  
                id="Contact" 
                type="text" 
                variant="outlined" 
                label="Contact" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                          </div>

                  </div>
                  <div className='AddPatientProfileTopRight'>

                  <div className='AddPatientProfileTopRight1'>
                  <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Email} 
                onChange={HandleOnChangeEmail}  
                id="Email" 
                type="text" 
                variant="outlined" 
                label="Email" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                  </div>

                  <div className='AddPatientProfileTopRight2'>
                  <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Address} 
                onChange={HandleOnChangeAddress}  
                id="Address" 
                type="text" 
                variant="outlined" 
                label="Address" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                  </div>
                  <div className='AddPatientProfileTopRight3'>
                          <div className='AddPatientProfileTopRight31'>
                          
                                  <img src={baseImage}  height="150px" width='150px'></img>
                          </div>
                          <div className='AddPatientProfileTopRight32'>
                                  <Input type="file" onChange={(e)=>{
                                          uploadImage(e);
                                  }}/>
                          </div>
                  </div>
                  </div>
          </div>
          <div className='AddPatientProfileBottom'>
          <Button id="Submit" onClick={(e)=> ( (Id!="") ? (checker==="1" ? SearchPatient(e) : AddPatient(e))  : alert("PLEASE ENTER THE PATIENT ID !!!!") ) } variant="contained" color="primary" fullwidth>SUBMIT</Button>
          </div>
        </div>
          
        </div>;
}

export default EditPatientProfile;
