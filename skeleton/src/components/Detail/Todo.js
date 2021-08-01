import React,{useState} from 'react';
import styles from './Detailcss.module.css' 
import Todolist from './Todolist';

const Todo =(props ,{isShow})=>{
    return(
        <div className={`${styles.Todotemplate} `}>
            <div className={`${styles.list}`}>
                <Todolist  events={props.events} page={props.page} setFormdata={props.setFormdata}> 
                </Todolist>
            </div>
        </div>
        
    );
}

export default Todo;
