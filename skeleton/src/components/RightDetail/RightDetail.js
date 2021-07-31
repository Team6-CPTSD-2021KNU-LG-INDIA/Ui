import {useState,React} from 'react';
import styles from './Rightcss.module.css'
import Right_Elc from './Right_Elc';
import Right_Main from './Right_main';
import { getDevices} from '../../Modules/iotModule';
import Todolists from './Todolists';


const RightDetail =(props)=>{

   
    return(
    
        <div className={`${styles.Right_template}`}>
          
            <Right_Elc>
            
            </Right_Elc>
            
            <Right_Main  events={props.events} page={props.page} >
            
            </Right_Main>

        </div>

    );

}

export default RightDetail; 