import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';
import { Alert, Button } from '@mui/material';

function ScheduleAppointmentDiv() {

    const [Patients,SetPatients] = useState([]);

    const [selectedIndexPatientTemp,SetSelectedIndexPatientTemp] = useState(-1);

    const [selectedIndexTemp,SetSelectedIndexTemp] = useState(-1);

    const [selectedSlotTemp,SetSelectedSlotTemp] = useState("NO_SLOT_SELECTED");

    const HandleOnChangeSelectedPatients = ((e)=>{
        console.log(e.target.value);
        const selectedIndexPatient = e.target.options.selectedIndex;
        console.log(selectedIndexPatient-1);
        SetSelectedIndexPatientTemp(selectedIndexPatient);
    })

    const [val,SetVal] = useState(0);


    useEffect(() => {
        axios({
            method:'get',
            url:'https://sample-hospital.herokuapp.com/patient',
            data: {
          
                }
            })
            .then((response)=> {
              
            console.log(response.data);
            SetPatients(response.data);
            val==2 ? SetVal(2) : SetVal(val+1);
            }, (error) => {
            console.log(error);
            });
      }, [val]);


    const [Doctors,SetDoctors] = useState([]);

    const HandleOnChangeSelectedDoctors = ((e)=>{
        console.log(e.target.value);
        const selectedIndex = e.target.options.selectedIndex;
        console.log(selectedIndex-1);

        SetSelectedIndexTemp(selectedIndex);

        SetIsBackgroundLimeSlot8to9(false);
        SetIsBackgroundLimeSlot9to10(false);
        SetIsBackgroundLimeSlot10to11(false);
        SetIsBackgroundLimeSlot11to12(false);
        SetIsBackgroundLimeSlot12to1(false);
        SetIsBackgroundLimeSlot1to2(false);
  
        SetIsBackgroundBlueSlot8to9(false);
        SetIsBackgroundBlueSlot9to10(false);
        SetIsBackgroundBlueSlot10to11(false);
        SetIsBackgroundBlueSlot11to12(false);
        SetIsBackgroundBlueSlot12to1(false);
        SetIsBackgroundBlueSlot1to2(false);

        
        Doctors[selectedIndex-1].slot8to9 == "" ?  SetSlot8to9("AVAILABLE") : SetSlot8to9("ALREADY BOOKED") ;
        Doctors[selectedIndex-1].slot8to9 == "" ?  SetIsBackgroundLimeSlot8to9(true) : SetIsBackgroundLimeSlot8to9(false) ;
        Doctors[selectedIndex-1].slot9to10 == "" ? SetSlot9to10("AVAILABLE") : SetSlot9to10("ALREADY BOOKED") ;
        Doctors[selectedIndex-1].slot9to10 == "" ?  SetIsBackgroundLimeSlot9to10(true) : SetIsBackgroundLimeSlot9to10(false) ;
        Doctors[selectedIndex-1].slot10to11 == "" ? SetSlot10to11("AVAILABLE") : SetSlot10to11("ALREADY BOOKED") ;
        Doctors[selectedIndex-1].slot10to11== "" ?  SetIsBackgroundLimeSlot10to11(true) : SetIsBackgroundLimeSlot10to11(false) ;
        Doctors[selectedIndex-1].slot11to12 == "" ? SetSlot11to12("AVAILABLE") : SetSlot11to12("ALREADY BOOKED") ;
        Doctors[selectedIndex-1].slot11to12 == "" ?  SetIsBackgroundLimeSlot11to12(true) : SetIsBackgroundLimeSlot11to12(false) ;
        Doctors[selectedIndex-1].slot12to1 == "" ? SetSlot12to1("AVAILABLE") : SetSlot12to1("ALREADY BOOKED") ;
        Doctors[selectedIndex-1].slot12to1 == "" ?  SetIsBackgroundLimeSlot12to1(true) : SetIsBackgroundLimeSlot12to1(false) ;
        Doctors[selectedIndex-1].slot1to2 == "" ? SetSlot1to2("AVAILABLE") : SetSlot1to2("ALREADY BOOKED") ;
        Doctors[selectedIndex-1].slot1to2 == "" ?  SetIsBackgroundLimeSlot1to2(true) : SetIsBackgroundLimeSlot1to2(false) ;
        
    })

    const [val1,SetVal1] = useState(0);


    useEffect(() => {
        axios({
            method:'get',
            url:'https://sample-hospital.herokuapp.com/doctor',
            data: {
          
                }
            })
            .then((response)=> {
              
            console.log(response.data);
            SetDoctors(response.data);
            val1==2 ? SetVal1(2) : SetVal1(val1+1);
            }, (error) => {
            console.log(error);
            });
      }, [val1]);


      const [slot8to9,SetSlot8to9] = useState("STATUS....");
      const [slot9to10,SetSlot9to10] = useState("STATUS....");
      const [slot10to11,SetSlot10to11] = useState("STATUS....");
      const [slot11to12,SetSlot11to12] = useState("STATUS....");
      const [slot12to1,SetSlot12to1] = useState("STATUS....");
      const [slot1to2,SetSlot1to2] = useState("STATUS....");

      const [isBackgroundLimeSlot8to9,SetIsBackgroundLimeSlot8to9] = useState(false);
      const [isBackgroundLimeSlot9to10,SetIsBackgroundLimeSlot9to10] = useState(false);
      const [isBackgroundLimeSlot10to11,SetIsBackgroundLimeSlot10to11] = useState(false);
      const [isBackgroundLimeSlot11to12,SetIsBackgroundLimeSlot11to12] = useState(false);
      const [isBackgroundLimeSlot12to1,SetIsBackgroundLimeSlot12to1] = useState(false);
      const [isBackgroundLimeSlot1to2,SetIsBackgroundLimeSlot1to2] = useState(false);

      const [isBackgroundBlueSlot8to9,SetIsBackgroundBlueSlot8to9] = useState(false);
      const [isBackgroundBlueSlot9to10,SetIsBackgroundBlueSlot9to10] = useState(false);
      const [isBackgroundBlueSlot10to11,SetIsBackgroundBlueSlot10to11] = useState(false);
      const [isBackgroundBlueSlot11to12,SetIsBackgroundBlueSlot11to12] = useState(false);
      const [isBackgroundBlueSlot12to1,SetIsBackgroundBlueSlot12to1] = useState(false);
      const [isBackgroundBlueSlot1to2,SetIsBackgroundBlueSlot1to2] = useState(false);

      const clearSlotsExcept8to9 = (()=>{
        SetIsBackgroundLimeSlot8to9(false);
        SetIsBackgroundLimeSlot9to10(false);
        SetIsBackgroundLimeSlot10to11(false);
        SetIsBackgroundLimeSlot11to12(false);
        SetIsBackgroundLimeSlot12to1(false);
        SetIsBackgroundLimeSlot1to2(false);
        SetIsBackgroundBlueSlot8to9(false);
        SetIsBackgroundBlueSlot9to10(false);
        SetIsBackgroundBlueSlot10to11(false);
        SetIsBackgroundBlueSlot11to12(false);
        SetIsBackgroundBlueSlot12to1(false);
        SetIsBackgroundBlueSlot1to2(false); 
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetSlot8to9("AVAILABLE") : SetSlot8to9("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetIsBackgroundLimeSlot8to9(true) : SetIsBackgroundLimeSlot8to9(false) ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ? SetSlot9to10("AVAILABLE") : SetSlot9to10("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ?  SetIsBackgroundLimeSlot9to10(true) : SetIsBackgroundLimeSlot9to10(false) ;
        Doctors[selectedIndexTemp-1].slot10to11 == "" ? SetSlot10to11("AVAILABLE") : SetSlot10to11("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot10to11== "" ?  SetIsBackgroundLimeSlot10to11(true) : SetIsBackgroundLimeSlot10to11(false) ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ? SetSlot11to12("AVAILABLE") : SetSlot11to12("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ?  SetIsBackgroundLimeSlot11to12(true) : SetIsBackgroundLimeSlot11to12(false) ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ? SetSlot12to1("AVAILABLE") : SetSlot12to1("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ?  SetIsBackgroundLimeSlot12to1(true) : SetIsBackgroundLimeSlot12to1(false) ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ? SetSlot1to2("AVAILABLE") : SetSlot1to2("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ?  SetIsBackgroundLimeSlot1to2(true) : SetIsBackgroundLimeSlot1to2(false) ;
        SetIsBackgroundBlueSlot8to9(true);
        SetSelectedSlotTemp("slot8to9");
    });
    const clearSlotsExcept9to10 = (()=>{
        SetIsBackgroundLimeSlot8to9(false);
        SetIsBackgroundLimeSlot9to10(false);
        SetIsBackgroundLimeSlot10to11(false);
        SetIsBackgroundLimeSlot11to12(false);
        SetIsBackgroundLimeSlot12to1(false);
        SetIsBackgroundLimeSlot1to2(false);
        SetIsBackgroundBlueSlot8to9(false);
        SetIsBackgroundBlueSlot9to10(false);
        SetIsBackgroundBlueSlot10to11(false);
        SetIsBackgroundBlueSlot11to12(false);
        SetIsBackgroundBlueSlot12to1(false);
        SetIsBackgroundBlueSlot1to2(false); 
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetSlot8to9("AVAILABLE") : SetSlot8to9("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetIsBackgroundLimeSlot8to9(true) : SetIsBackgroundLimeSlot8to9(false) ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ? SetSlot9to10("AVAILABLE") : SetSlot9to10("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ?  SetIsBackgroundLimeSlot9to10(true) : SetIsBackgroundLimeSlot9to10(false) ;
        Doctors[selectedIndexTemp-1].slot10to11 == "" ? SetSlot10to11("AVAILABLE") : SetSlot10to11("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot10to11== "" ?  SetIsBackgroundLimeSlot10to11(true) : SetIsBackgroundLimeSlot10to11(false) ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ? SetSlot11to12("AVAILABLE") : SetSlot11to12("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ?  SetIsBackgroundLimeSlot11to12(true) : SetIsBackgroundLimeSlot11to12(false) ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ? SetSlot12to1("AVAILABLE") : SetSlot12to1("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ?  SetIsBackgroundLimeSlot12to1(true) : SetIsBackgroundLimeSlot12to1(false) ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ? SetSlot1to2("AVAILABLE") : SetSlot1to2("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ?  SetIsBackgroundLimeSlot1to2(true) : SetIsBackgroundLimeSlot1to2(false) ;
        SetIsBackgroundBlueSlot9to10(true);
        SetSelectedSlotTemp("slot9to10");
    });
    const clearSlotsExcept10to11 = (()=>{
        SetIsBackgroundLimeSlot8to9(false);
        SetIsBackgroundLimeSlot9to10(false);
        SetIsBackgroundLimeSlot10to11(false);
        SetIsBackgroundLimeSlot11to12(false);
        SetIsBackgroundLimeSlot12to1(false);
        SetIsBackgroundLimeSlot1to2(false);
        SetIsBackgroundBlueSlot8to9(false);
        SetIsBackgroundBlueSlot9to10(false);
        SetIsBackgroundBlueSlot10to11(false);
        SetIsBackgroundBlueSlot11to12(false);
        SetIsBackgroundBlueSlot12to1(false);
        SetIsBackgroundBlueSlot1to2(false); 
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetSlot8to9("AVAILABLE") : SetSlot8to9("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetIsBackgroundLimeSlot8to9(true) : SetIsBackgroundLimeSlot8to9(false) ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ? SetSlot9to10("AVAILABLE") : SetSlot9to10("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ?  SetIsBackgroundLimeSlot9to10(true) : SetIsBackgroundLimeSlot9to10(false) ;
        Doctors[selectedIndexTemp-1].slot10to11 == "" ? SetSlot10to11("AVAILABLE") : SetSlot10to11("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot10to11== "" ?  SetIsBackgroundLimeSlot10to11(true) : SetIsBackgroundLimeSlot10to11(false) ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ? SetSlot11to12("AVAILABLE") : SetSlot11to12("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ?  SetIsBackgroundLimeSlot11to12(true) : SetIsBackgroundLimeSlot11to12(false) ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ? SetSlot12to1("AVAILABLE") : SetSlot12to1("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ?  SetIsBackgroundLimeSlot12to1(true) : SetIsBackgroundLimeSlot12to1(false) ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ? SetSlot1to2("AVAILABLE") : SetSlot1to2("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ?  SetIsBackgroundLimeSlot1to2(true) : SetIsBackgroundLimeSlot1to2(false) ;
        SetIsBackgroundBlueSlot10to11(true);
        SetSelectedSlotTemp("slot10to11");
    });
    const clearSlotsExcept11to12= (()=>{
        SetIsBackgroundLimeSlot8to9(false);
        SetIsBackgroundLimeSlot9to10(false);
        SetIsBackgroundLimeSlot10to11(false);
        SetIsBackgroundLimeSlot11to12(false);
        SetIsBackgroundLimeSlot12to1(false);
        SetIsBackgroundLimeSlot1to2(false);
        SetIsBackgroundBlueSlot8to9(false);
        SetIsBackgroundBlueSlot9to10(false);
        SetIsBackgroundBlueSlot10to11(false);
        SetIsBackgroundBlueSlot11to12(false);
        SetIsBackgroundBlueSlot12to1(false);
        SetIsBackgroundBlueSlot1to2(false); 
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetSlot8to9("AVAILABLE") : SetSlot8to9("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetIsBackgroundLimeSlot8to9(true) : SetIsBackgroundLimeSlot8to9(false) ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ? SetSlot9to10("AVAILABLE") : SetSlot9to10("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ?  SetIsBackgroundLimeSlot9to10(true) : SetIsBackgroundLimeSlot9to10(false) ;
        Doctors[selectedIndexTemp-1].slot10to11 == "" ? SetSlot10to11("AVAILABLE") : SetSlot10to11("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot10to11== "" ?  SetIsBackgroundLimeSlot10to11(true) : SetIsBackgroundLimeSlot10to11(false) ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ? SetSlot11to12("AVAILABLE") : SetSlot11to12("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ?  SetIsBackgroundLimeSlot11to12(true) : SetIsBackgroundLimeSlot11to12(false) ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ? SetSlot12to1("AVAILABLE") : SetSlot12to1("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ?  SetIsBackgroundLimeSlot12to1(true) : SetIsBackgroundLimeSlot12to1(false) ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ? SetSlot1to2("AVAILABLE") : SetSlot1to2("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ?  SetIsBackgroundLimeSlot1to2(true) : SetIsBackgroundLimeSlot1to2(false) ;
        SetIsBackgroundBlueSlot11to12(true);
        SetSelectedSlotTemp("slot11to12");
    });
    const clearSlotsExcept12to1= (()=>{
        SetIsBackgroundLimeSlot8to9(false);
        SetIsBackgroundLimeSlot9to10(false);
        SetIsBackgroundLimeSlot10to11(false);
        SetIsBackgroundLimeSlot11to12(false);
        SetIsBackgroundLimeSlot12to1(false);
        SetIsBackgroundLimeSlot1to2(false);
        SetIsBackgroundBlueSlot8to9(false);
        SetIsBackgroundBlueSlot9to10(false);
        SetIsBackgroundBlueSlot10to11(false);
        SetIsBackgroundBlueSlot11to12(false);
        SetIsBackgroundBlueSlot12to1(false);
        SetIsBackgroundBlueSlot1to2(false); 
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetSlot8to9("AVAILABLE") : SetSlot8to9("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetIsBackgroundLimeSlot8to9(true) : SetIsBackgroundLimeSlot8to9(false) ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ? SetSlot9to10("AVAILABLE") : SetSlot9to10("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ?  SetIsBackgroundLimeSlot9to10(true) : SetIsBackgroundLimeSlot9to10(false) ;
        Doctors[selectedIndexTemp-1].slot10to11 == "" ? SetSlot10to11("AVAILABLE") : SetSlot10to11("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot10to11== "" ?  SetIsBackgroundLimeSlot10to11(true) : SetIsBackgroundLimeSlot10to11(false) ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ? SetSlot11to12("AVAILABLE") : SetSlot11to12("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ?  SetIsBackgroundLimeSlot11to12(true) : SetIsBackgroundLimeSlot11to12(false) ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ? SetSlot12to1("AVAILABLE") : SetSlot12to1("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ?  SetIsBackgroundLimeSlot12to1(true) : SetIsBackgroundLimeSlot12to1(false) ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ? SetSlot1to2("AVAILABLE") : SetSlot1to2("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ?  SetIsBackgroundLimeSlot1to2(true) : SetIsBackgroundLimeSlot1to2(false) ;
        SetIsBackgroundBlueSlot12to1(true);
        SetSelectedSlotTemp("slot12to1");
    });
    const clearSlotsExcept1to2 = (()=>{
        SetIsBackgroundLimeSlot8to9(false);
        SetIsBackgroundLimeSlot9to10(false);
        SetIsBackgroundLimeSlot10to11(false);
        SetIsBackgroundLimeSlot11to12(false);
        SetIsBackgroundLimeSlot12to1(false);
        SetIsBackgroundLimeSlot1to2(false);
        SetIsBackgroundBlueSlot8to9(false);
        SetIsBackgroundBlueSlot9to10(false);
        SetIsBackgroundBlueSlot10to11(false);
        SetIsBackgroundBlueSlot11to12(false);
        SetIsBackgroundBlueSlot12to1(false);
        SetIsBackgroundBlueSlot1to2(false); 
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetSlot8to9("AVAILABLE") : SetSlot8to9("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot8to9 == "" ?  SetIsBackgroundLimeSlot8to9(true) : SetIsBackgroundLimeSlot8to9(false) ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ? SetSlot9to10("AVAILABLE") : SetSlot9to10("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot9to10 == "" ?  SetIsBackgroundLimeSlot9to10(true) : SetIsBackgroundLimeSlot9to10(false) ;
        Doctors[selectedIndexTemp-1].slot10to11 == "" ? SetSlot10to11("AVAILABLE") : SetSlot10to11("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot10to11== "" ?  SetIsBackgroundLimeSlot10to11(true) : SetIsBackgroundLimeSlot10to11(false) ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ? SetSlot11to12("AVAILABLE") : SetSlot11to12("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot11to12 == "" ?  SetIsBackgroundLimeSlot11to12(true) : SetIsBackgroundLimeSlot11to12(false) ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ? SetSlot12to1("AVAILABLE") : SetSlot12to1("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot12to1 == "" ?  SetIsBackgroundLimeSlot12to1(true) : SetIsBackgroundLimeSlot12to1(false) ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ? SetSlot1to2("AVAILABLE") : SetSlot1to2("ALREADY BOOKED") ;
        Doctors[selectedIndexTemp-1].slot1to2 == "" ?  SetIsBackgroundLimeSlot1to2(true) : SetIsBackgroundLimeSlot1to2(false) ;
        SetIsBackgroundBlueSlot1to2(true);
        SetSelectedSlotTemp("slot1to2");
    });


    const ScheduleAppointment = (()=>{


    selectedSlotTemp == "NO_SLOT_SELECTED" ? alert("NO SLOT SELECTED!!!!") : (selectedSlotTemp == "slot8to9"?(Doctors[selectedIndexTemp-1].slot8to9=Patients[selectedIndexPatientTemp-1].id):(selectedSlotTemp == "slot9to10"?(Doctors[selectedIndexTemp-1].slot9to10=Patients[selectedIndexPatientTemp-1].id):(selectedSlotTemp == "slot10to11"?(Doctors[selectedIndexTemp-1].slot10to11=Patients[selectedIndexPatientTemp-1].id):(selectedSlotTemp == "slot11to12"?(Doctors[selectedIndexTemp-1].slot11to12=Patients[selectedIndexPatientTemp-1].id):(selectedSlotTemp == "slot12to1"?(Doctors[selectedIndexTemp-1].slot12to1=Patients[selectedIndexPatientTemp-1].id):(selectedSlotTemp == "slot1to2"?(Doctors[selectedIndexTemp-1].slot1to2=Patients[selectedIndexPatientTemp-1].id):(alert("NO SLOT SELECTED!!!!"))))))));
        

  axios({
    method:'post',
    url:'https://sample-hospital.herokuapp.com/doctor',
    data: {
        id : Doctors[selectedIndexTemp-1].id,
        dname : Doctors[selectedIndexTemp-1].dname,
        specialization : Doctors[selectedIndexTemp-1].specialization,
        qualification : Doctors[selectedIndexTemp-1].qualification,
        experience : Doctors[selectedIndexTemp-1].experience,
        contact : Doctors[selectedIndexTemp-1].contact,
        email : Doctors[selectedIndexTemp-1].email,
        image : Doctors[selectedIndexTemp-1].image,
        slot8to9 : Doctors[selectedIndexTemp-1].slot8to9,
        slot9to10 : Doctors[selectedIndexTemp-1].slot9to10,
        slot10to11 : Doctors[selectedIndexTemp-1].slot10to11,
        slot11to12 : Doctors[selectedIndexTemp-1].slot11to12,
        slot12to1 : Doctors[selectedIndexTemp-1].slot12to1,
        slot1to2 : Doctors[selectedIndexTemp-1].slot1to2
          }
    })
    .then((response)=> {
    console.log(response);
    response.status === 200 ? window.name = 'yyny': alert("ERROR ");
    }, (error) => {
    console.log(error);
    });
    
      });



  return (
    <div className='ScheduleAppDiv'>
          <div className='ScheduleAppInnerDiv'>
          <div className='ScheduleAppInnerDivTitle'>
                  SCHEDULE APPOINTMENT
          </div>
          <div className='ScheduleAppInnerDivTop'>
                <div className='ScheduleAppInnerDivTopSelect'>
                    <div className='ScheduleAppInnerDivTopSelectPatient'>
                        <select className='ScheduleAppInnerDivTopSelectPatientOptions' onChange={HandleOnChangeSelectedPatients}>
                             <option key="0" value="0">SELECT PATIENT</option>
                             {
                                Patients.map((Patient)=>(
                                    <option key={Patient.id} value={Patient.id+" : "+Patient.pname}>
                                        {Patient.id} {" : "} {Patient.pname}
                                    </option>
                                ))

                            }
                        </select>
                    </div>
                    <div className='ScheduleAppInnerDivTopSelectDoctor'>
                    <select className='ScheduleAppInnerDivTopSelectDoctorOptions' onChange={HandleOnChangeSelectedDoctors}>
                            <option key="0" value="0">SELECT DOCTOR</option>
                                {
                                    Doctors.map((Doctor,index)=>(
                                        <option key={index} value={Doctor.id+" : "+Doctor.dname}>
                                            {Doctor.id} {" : "} {Doctor.dname} 
                                        </option>
                                    ))

                                }
                        </select>
                    </div>
                </div>
                <div className='ScheduleAppInnerDivTopSlot' >
                    <div className='ScheduleAppInnerDivTopSlotTop'>
                        
                    <div className='ScheduleAppInnerDivTopSlotTopslot8to9'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner8to9' onClick={()=>{slot8to9=="STATUS...." ? (alert("PLEASE FIRST SELECT BOTH PATIENT AND DOCTOR !!!!!!")) : (slot8to9=="AVAILABLE"?clearSlotsExcept8to9():alert("SLOT AREADY BOOKED !!!!"))}}>
                                <div className={isBackgroundBlueSlot8to9 ? ('ScheduleAppInnerDivTopSlotTopslot8to9topBlueBackground') : ('ScheduleAppInnerDivTopSlotTopslot8to9topWhiteBackground') } >
                            8 AM TO 9 AM
                            </div>
                            <div className= { isBackgroundBlueSlot8to9 ? ('ScheduleAppInnerDivTopSlotTopslot8to9bottomBlueBackground') : ( isBackgroundLimeSlot8to9 ? 'ScheduleAppInnerDivTopSlotTopslot8to9bottomLimeBackground':'ScheduleAppInnerDivTopSlotTopslot8to9bottomOriginalBackground') }>
                                {slot8to9}
                            </div>
                            </div>
                        
                        </div>
                    
                        
                            <div className='ScheduleAppInnerDivTopSlotTopslot9to10'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner9to10' onClick={()=>{slot9to10=="STATUS...." ? (alert("PLEASE FIRST SELECT BOTH PATIENT AND DOCTOR !!!!!!")) : (slot9to10=="AVAILABLE"?clearSlotsExcept9to10():alert("SLOT AREADY BOOKED !!!!"))}}>
                                <div className={isBackgroundBlueSlot9to10 ? ('ScheduleAppInnerDivTopSlotTopslot9to10topBlueBackground') : ('ScheduleAppInnerDivTopSlotTopslot9to10topWhiteBackground') } >
                            9 AM TO 10 AM
                            </div>
                            <div className= { isBackgroundBlueSlot9to10 ? ('ScheduleAppInnerDivTopSlotTopslot9to10bottomBlueBackground') : ( isBackgroundLimeSlot9to10 ? 'ScheduleAppInnerDivTopSlotTopslot9to10bottomLimeBackground':'ScheduleAppInnerDivTopSlotTopslot9to10bottomOriginalBackground') }>
                                {slot9to10}
                            </div>
                            </div>
                        
                        </div>
                        <div className='ScheduleAppInnerDivTopSlotTopslot10to11'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner10to11' onClick={()=>{slot10to11=="STATUS...." ? (alert("PLEASE FIRST SELECT BOTH PATIENT AND DOCTOR !!!!!!")) : (slot10to11=="AVAILABLE"?clearSlotsExcept10to11():alert("SLOT AREADY BOOKED !!!!"))}}>
                                <div className={isBackgroundBlueSlot10to11 ? ('ScheduleAppInnerDivTopSlotTopslot10to11topBlueBackground') : ('ScheduleAppInnerDivTopSlotTopslot10to11topWhiteBackground') } >
                            10 AM TO 11 AM
                            </div>
                            <div className= { isBackgroundBlueSlot10to11 ? ('ScheduleAppInnerDivTopSlotTopslot10to11bottomBlueBackground') : ( isBackgroundLimeSlot10to11 ? 'ScheduleAppInnerDivTopSlotTopslot10to11bottomLimeBackground':'ScheduleAppInnerDivTopSlotTopslot10to11bottomOriginalBackground') }>
                                {slot10to11}
                            </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className='ScheduleAppInnerDivTopSlotBottom'>
                        <div className='ScheduleAppInnerDivTopSlotTopslot11to12'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner11to12' onClick={()=>{slot11to12=="STATUS...." ? (alert("PLEASE FIRST SELECT BOTH PATIENT AND DOCTOR !!!!!!")) : (slot11to12=="AVAILABLE"?clearSlotsExcept11to12():alert("SLOT AREADY BOOKED !!!!"))}}>
                                <div className={isBackgroundBlueSlot11to12 ? ('ScheduleAppInnerDivTopSlotTopslot11to12topBlueBackground') : ('ScheduleAppInnerDivTopSlotTopslot11to12topWhiteBackground') } >
                            11 AM TO 12 PM
                            </div>
                            <div className= { isBackgroundBlueSlot11to12 ? ('ScheduleAppInnerDivTopSlotTopslot11to12bottomBlueBackground') : ( isBackgroundLimeSlot11to12 ? 'ScheduleAppInnerDivTopSlotTopslot11to12bottomLimeBackground':'ScheduleAppInnerDivTopSlotTopslot11to12bottomOriginalBackground') }>
                                {slot11to12}
                            </div>
                            </div>
                        
                        </div>
                        <div className='ScheduleAppInnerDivTopSlotTopslot12to1'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner12to1' onClick={()=>{slot12to1=="STATUS...." ? (alert("PLEASE FIRST SELECT BOTH PATIENT AND DOCTOR !!!!!!")) : (slot12to1=="AVAILABLE"?clearSlotsExcept12to1():alert("SLOT AREADY BOOKED !!!!"))}}>
                                <div className={isBackgroundBlueSlot12to1 ? ('ScheduleAppInnerDivTopSlotTopslot12to1topBlueBackground') : ('ScheduleAppInnerDivTopSlotTopslot12to1topWhiteBackground') } >
                            12 PM TO 1 PM
                            </div>
                            <div className= { isBackgroundBlueSlot12to1 ? ('ScheduleAppInnerDivTopSlotTopslot12to1bottomBlueBackground') : ( isBackgroundLimeSlot12to1 ? 'ScheduleAppInnerDivTopSlotTopslot12to1bottomLimeBackground':'ScheduleAppInnerDivTopSlotTopslot12to1bottomOriginalBackground') }>
                                {slot12to1}
                            </div>
                            </div>
                        
                        </div>
                        <div className='ScheduleAppInnerDivTopSlotTopslot1to2'>
                            <div className='ScheduleAppInnerDivTopSlotTopInner1to2' onClick={()=>{slot1to2=="STATUS...." ? (alert("PLEASE FIRST SELECT BOTH PATIENT AND DOCTOR !!!!!!")) : (slot1to2=="AVAILABLE"?clearSlotsExcept1to2():alert("SLOT AREADY BOOKED !!!!"))}}>
                                <div className={isBackgroundBlueSlot1to2 ? ('ScheduleAppInnerDivTopSlotTopslot1to2topBlueBackground') : ('ScheduleAppInnerDivTopSlotTopslot1to2topWhiteBackground') } >
                            1 PM TO 2 PM
                            </div>
                            <div className= { isBackgroundBlueSlot1to2 ? ('ScheduleAppInnerDivTopSlotTopslot1to2bottomBlueBackground') : ( isBackgroundLimeSlot1to2 ? 'ScheduleAppInnerDivTopSlotTopslot1to2bottomLimeBackground':'ScheduleAppInnerDivTopSlotTopslot1to2bottomOriginalBackground') }>
                                {slot1to2}
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
          </div>
            <div className='ScheduleAppInnerDivBottom'>
            <Button id="Submit" onClick={()=>{ (selectedIndexPatientTemp!=-1 && selectedIndexTemp!=-1) ? ( ScheduleAppointment() ) : (alert("PLEASE FIRST SELECT BOTH PATIENT AND DOCTOR !!!!!!"))}} variant="contained" color="primary" fullwidth>SUBMIT</Button>
            </div>
          </div>
            
          </div>
  )
}

export default ScheduleAppointmentDiv
