import React from 'react';
import styles from './Rightcss.module.css'
import Right_Elc from './Right_Elc';
import Right_Main from './Right_main';


const RightDetail =()=>{

    return(
    
        <div className={`${styles.Right_template}`}>
            right pannel
            
            <Right_Elc>

            </Right_Elc>
            
            <Right_Main>
                    
            </Right_Main>

        </div>

    );

}

export default RightDetail; 