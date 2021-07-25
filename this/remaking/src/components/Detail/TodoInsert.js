import React from 'react';
import styles from './Detailcss.module.css';


const TodoInsert=()=>{

    return(

      
            <div className={`${styles.TodoInsert}`}>
                {/*<input className={`${styles.Todoinput}`} placeholder="Please enter what to do "></input>*/}
          
                <button type="submit">
                        button
                </button>
            </div>
  
    );
}

export default TodoInsert;