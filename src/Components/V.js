import React from 'react';
import HookDiv1 from './HookDiv1';
import HookDiv2 from './HookDiv2';
import HookDiv3 from './HookDiv3';

function V() {
  return <div>
      {
                window.name==="1"?<HookDiv1/>:(window.name==="2"?<HookDiv2/>:<HookDiv3/>)
      }

  </div>;
}

export default V;

