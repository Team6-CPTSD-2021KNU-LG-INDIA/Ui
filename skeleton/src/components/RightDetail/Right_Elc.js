import { useState } from "react"
import styles from './Rightcss.module.css'
import TimePicker from '@enact/sandstone/TimePicker';


const Right_Elc =(props)=>
{
     const [value,setValue]=useState("");
    
   return(


     <div className={`${styles.Right_elec}`}>
         electronic panel
         
    </div>
   );

};

export default Right_Elc;
