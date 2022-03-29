import React, { useState } from 'react';
import '../App.css';
import { FormControl , InputLabel , FormHelperText} from '@mui/material';
import { Button, TextField ,Input} from '@mui/material';
import axios from 'axios';

function SecondSideBarElementDiv() {
  
  const [Id,SetId] = React.useState("");
  const HandleOnChangeId = ((e)=>{
      SetId(e.target.value);
  })
  const [Name,SetName] = React.useState("");
  const HandleOnChangeName = ((e)=>{
      SetName(e.target.value);
  })
  const [Specialization,SetSpecialization] = React.useState("");
  const HandleOnChangeSpecialization = ((e)=>{
      SetSpecialization(e.target.value);
  })
  const [Qualification,SetQualification] = React.useState("");
  const HandleOnChangeQualification = ((e)=>{
      SetQualification(e.target.value);
  })
  const [Experience,SetExperience] = React.useState("");
  const HandleOnChangeExperience = ((e)=>{
      SetExperience(e.target.value);
  })
  const [Contact,SetContact] = React.useState("");
  const HandleOnChangeContact = ((e)=>{
      SetContact(e.target.value);
  })
  const [Email,SetEmail] = React.useState("");
  const HandleOnChangeEmail = ((e)=>{
      SetEmail(e.target.value);
  })
  
  const AddDoctor = (()=>{

        axios({
  method:'post',
  url:'https://sample-hospital.herokuapp.com/doctor',
  data: {
          id : Id,
          dname : Name,
          specialization : Specialization,
          qualification : Qualification,
          experience : Experience,
          contact : Contact,
          email : Email,
          image : baseImage,
          slot8to9 : "",
          slot9to10 : "",
          slot10to11 : "",
          slot11to12 : "",
          slot12to1 : "",
          slot1to2 : ""
          }
  })
  .then((response)=> {
  console.log(response);
  response.status === 200 ? window.name="yyyn" : alert("ERROR ");
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
                ENTER DOCTOR DETAILS
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
               
                value = {Specialization} 
                onChange={HandleOnChangeSpecialization}  
                id="Gender" 
                type="text" 
                variant="outlined" 
                label="Specialization" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                          </div>
                          <div className='AddPatientProfileTopLeft4'>
                          <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Qualification} 
                onChange={HandleOnChangeQualification}  
                id="Age" 
                type="text" 
                variant="outlined" 
                label="Qualification" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                          </div>

                          <div className='AddPatientProfileTopLeft5'>
                          <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Experience} 
                onChange={HandleOnChangeExperience}  
                id="Contact" 
                type="text" 
                variant="outlined" 
                label="Experience" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                          </div>

                  </div>
                  <div className='AddPatientProfileTopRight'>

                  <div className='AddPatientProfileTopRight1'>
                  <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Contact} 
                onChange={HandleOnChangeContact}  
                id="Email" 
                type="text" 
                variant="outlined" 
                label="Contact" 
                fullwidth
                sx={{ input: { color: '#00C0F0' , fontSize: 15,fontWeight:"bolder",fontFamily:"arial" } }}/>
                  </div>

                  <div className='AddPatientProfileTopRight2'>
                  <TextField 
                InputLabelProps={{style: {fontSize: 20,color:"#00C0F0",fontWeight:"bolder"}}} 
               
                value = {Email} 
                onChange={HandleOnChangeEmail}  
                id="Address" 
                type="text" 
                variant="outlined" 
                label="Email" 
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
          <Button id="Submit" onClick={(e)=> ( (Id!="" && Name!="" && Specialization!="" && Qualification!="" && Experience!="" && Contact!="" && Email!="" && baseImage!=(require("./imagePreview.JPG")) ) ? AddDoctor(e) : alert("PLEASE FILL ALL THE FIELDS!!!!") ) } variant="contained" color="primary" fullwidth>SUBMIT</Button>
          </div>
        </div>
          
        </div>;
}

export default SecondSideBarElementDiv;
