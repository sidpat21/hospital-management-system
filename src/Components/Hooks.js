import { appendOwnerState } from '@mui/material';
import React, { useState } from 'react'
import HookDiv1 from './HookDiv1';
import HookDiv2 from './HookDiv2';
import HookDiv3 from './HookDiv3';

function Hooks() {
    const [show,SetShow] = useState("2");
    return (
        <div className='hookMainDiv'>
            <div>
            <button className="hookBtnDiv1" onClick={()=>SetShow("1")}>div1</button>
            <button className="hookBtnDiv2" onClick={()=>SetShow("2")}>div2</button>
            <button className="hookBtnDiv3" onClick={()=>SetShow("3")}>div3</button>
            </div>
            <div>
            {
                
            }
            </div>
        </div>
    )
}

export default Hooks
