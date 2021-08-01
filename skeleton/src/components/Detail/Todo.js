import React,{useState} from 'react';
import styles from './Detailcss.module.css' 
import Todolist from './Todolist';

const Todo =(props)=>{
    return(
        <div>
            <Todolist  events={props.events} page={props.page}> 
            </Todolist>
        </div>
        
    );
}

export default Todo;
