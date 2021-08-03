import React,{useState} from 'react';
import styles from './Detailcss.module.css' 
import Todolist from './Todolist';

const Todo =(props)=>{
    return(
        <Todolist  events={props.events} page={props.page} setData={props.setData}> 
        </Todolist>
    );
}

export default Todo;
