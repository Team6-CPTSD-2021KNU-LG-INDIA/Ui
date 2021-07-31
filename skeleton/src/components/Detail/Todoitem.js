import React from 'react';
import styles from './Detailcss.module.css';


const Todoitem=({item,remove_item})=>{


    return(
        
        <div  className={"item",`${styles.TodoItem}`}  >
            
                <div className="starttime">Start time: {item.start_time},  End time: {item.end_time} </div>
                <div className="more">Purpose: {item.content}</div>

                <button className={"remove",`${styles.remove_btn}`} onClick={()=>remove_item(item.id)}>remove</button>
                
        </div>  
      
    );

};

export default Todoitem;
