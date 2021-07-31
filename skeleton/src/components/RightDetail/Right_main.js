import { useState } from "react";
import styles from './Rightcss.module.css';
import Todoitem from "../Detail/Todoitem";
import Todolists from "./Todolists";

const Right_Main =(props)=>
{
   
   return(

     <div className={`${styles.Right_main}`}>
      
         <div>
           <Todolists></Todolists>
         </div>
      </div>
   );

};

export default Right_Main;
