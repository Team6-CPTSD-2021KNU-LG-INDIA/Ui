import React, { useState } from "react";
import styles from './datepick.module.css';



const Datepick_ = () => {
   
    
    const[start_date,setStart]=useState();
    const[end_date,setEnd]=useState();
    const[start_time,setTimeStart]=useState();
    const[end_time,setTimeEnd]=useState();
    const[content_,setContent]=useState();


    const [items,setItems]=useState([{
     
        start_date: '',
        end_date:'',
        start_time:'',
        end_time:'',
        content_:""
    }]);


    
   
    const add=(e)=>{
        e.preventDefault();
     
        setItems([
    
            ...items,{
                start_time: start_time,
                end_time:end_time,
                end_date: end_date,
                start_date:start_date,
                content_:content_ 
        }]);
        setStart("");
        setEnd("");
        setTimeStart("");
        setTimeEnd("");
        setContent("");

    };

      return(
          
           
        <div className={`${styles.datepickform}`}>
            This is repeat setting
            <div className={`${styles.datepickform2}`}>
                
                <form onSubmit={add} >
                    <input type="date" style={{border:"none",color: "black",marginLeft:"50px",fontSize:"30px",background:"none"}}
                    value={start_date} onChange={e=>setStart(e.target.value)}>
                    </input><br />
                    
                    <input type="date" style={{border:"none",color: "black",marginLeft:"50px",fontSize:"30px",background:"none"}
                }  value={end_date} onChange={e=>setEnd(e.target.value)}> 
                    </input><br />
                    <br /><br />
                    <input type="time" style={{border:"none",color: "black",marginLeft:"50px",fontSize:"30px",background:"none"}
                } value={start_time} onChange={e=>setTimeStart(e.target.value)}>

                    </input><br />
                    <input type="time" style={{border:"none",color: "black",marginLeft:"50px",fontSize:"30px",background:"none"}}
                    value={end_time} onChange={e=>setTimeEnd(e.target.value)}>

                    </input>
                    <br />
                    <textarea  style={{border:"none",color: "black"}}
                    value={content_} onChange={e=>setContent(e.target.value)}>

                    </textarea>
                    <br />
                    <button type="submit" >
                        submit
                    </button>
                    <br />
                </form>
                
            </div>
         </div>
      );
    
}

export default Datepick_;