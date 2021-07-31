import React,{useState} from 'react';
import styles from './Detailcss.module.css' 
import Todolist from './Todolist';

const Todo =(props ,{isShow})=>{


    return(
        <div className={`${styles.Todotemplate} `}>
         
                {/* <FullCalendar
                    plugins={[listPlugin]}
                    initialDate={props.page.args.targetDate}
                    initialView='listDay'
                    height='100%'
                    headerToolbar='false'
                    footerToolbar='false'
                    nowIndicator= 'true'
                    eventOverlap='true'
                    events={props.events}
                    style={{fontsize:"12px"}}
                    >
                </FullCalendar> */}
           
            <div className={`${styles.list}`}>
                <Todolist  events={props.events} page={props.page} > 

                </Todolist>
                </div>
        </div>
        
    );
}

export default Todo;
