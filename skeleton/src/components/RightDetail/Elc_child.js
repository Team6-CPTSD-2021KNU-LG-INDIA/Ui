import React from 'react';
import RadioItem from '@enact/sandstone/RadioItem';
import { useState,useRef } from 'react/cjs/react.development';



const Elc_child = (props) => {
    
   
    return (
    <RadioItem style={{height:"30px" ,width:"500px",display:"flex"} } >
    <div >
        
       {props.deviceInfo.id} {props.deviceInfo.name}
    
    </div>
   
    </RadioItem>
    );
 }





export default Elc_child;