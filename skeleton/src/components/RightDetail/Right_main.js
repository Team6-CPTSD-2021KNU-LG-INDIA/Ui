import { useState } from "react";
import styles from './Rightcss.module.css';
import DatePicker from '@enact/sandstone/DatePicker';
import Todolist from "./Todolist";

const Right_Main =(props)=>
{
   
   return(

     <div className={`${styles.Right_main}`}>
      
         <div>
         <Todolist >
                  
         </Todolist>
         </div>
      </div>
   );

};

export default Right_Main;
