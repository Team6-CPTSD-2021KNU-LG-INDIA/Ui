import {useState,React} from 'react';
import styles from './Rightcss.module.css'
import Right_Elc from './Right_Elc';
import Right_Main from './Right_main';
import { getDevices} from '../../Modules/iotModule';



const RightDetail =()=>{

    let temp=[];
    temp=getDevices();
    return(
    
        <div className={`${styles.Right_template}`}>
          
            <Right_Elc>
              {temp}
            </Right_Elc>
            
            <Right_Main >
                    
            </Right_Main>

        </div>

    );

}

export default RightDetail; 