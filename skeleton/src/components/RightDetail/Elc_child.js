import React from 'react';
import RadioItem from '@enact/sandstone/RadioItem';
import { useState,useRef } from 'react/cjs/react.development';



const Elc_child = (props) => {
    
    if(props.deviceInfo.id===5||props.deviceInfo.id===6)
    {
    return (
    <RadioItem style={{height:"30px" ,width:"500px",display:"flex"} } >
    <div >
        {props.increase}{props.number}
       {props.deviceInfo.id} {props.deviceInfo.name}
    
    </div>
   
    </RadioItem>
    );
    }else{
      return (
        <RadioItem style={{height:"30px" ,width:"500px",display:"flex"} } >
        <div>
          
           {props.deviceInfo.id} {props.deviceInfo.name}
           
        </div>
        </RadioItem>
        );
    }
 }





export default Elc_child;