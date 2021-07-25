import React,{useState} from 'react';
import styles from './Detailcss.module.css' 
import TodoInsert from './TodoInsert';
import Todolist from './Todolist';

const Todo =(props)=>{
    

    return(
        <div className={`${styles.Todotemplate} `}>
            <div className={`${styles.titlen}` }> 
                Today-List
            </div>
            
             <div className={`${styles.content},`}>
                 <Todolist >

                </Todolist>
            </div>

            
    
        </div>
    );
}

export default Todo;
