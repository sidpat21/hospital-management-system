import React from 'react'
import '../App.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Topbar() {
    return (
        <div className='topbar'>
            <div className='logo'>
            <LocalHospitalIcon className="svg_icons"/>
            </div>
            <div className='search'>
                KLS HOSPITAL MANAGEMENT SYSTEM
            </div>
            <div className='account'>
                <AccountCircleIcon className="accountIcon"/>
            </div>
            <div className='nameAndRole'>
                    <h4>Sample <br></br>Admin</h4>
            </div>
        </div>
    )
}

export default Topbar
