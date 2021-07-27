import React,{useState} from 'react';
import styles from './Detailcss.module.css' 
import TodoInsert from './TodoInsert';
import Todolist from '../RightDetail/Todolist';
import Todoitem from '../RightDetail/Todoitem';
const Todo =(props)=>{
    

    return(
        <div className={`${styles.Todotemplate} `}>
            <div className={`${styles.titlen}` }> 
                Today-List
            </div>
            
             <div className={`${styles.content},`}>
                
            </div>

            
    
        </div>
    );
}

export default Todo;
