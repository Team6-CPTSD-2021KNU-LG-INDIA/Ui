import {React,useState,useRef} from 'react';

const ListForm = ({add})=>
{

    const [starttime_,setSDate]=useState();
    const [endtime_,setEDate]=useState();
    const [content_,setContent]=useState();
    const [id_,setId]=useState();

    const nextId=useRef(2);

    const resetForm=()=>
    {
        setSDate("");
        setEDate("");
        setContent("");
    };
    
    const onSubmit=(e)=>
    {
       
        e.preventDefault();
        add({
            id:nextId.current,
            start_time: starttime_,
            end_time: endtime_,
            content:content_,
        });
        nextId.current+=1;
        resetForm();
    };

   
    return(
     
            <form onSubmit={onSubmit}>

                <input type="time"  style={{border:"none",color: "blue",fontSize:"10px",}}
                value={starttime_}
                onChange={e=>setSDate(e.target.value)}>
                </input>
                
                <input type="time"  style={{border:"none",color: "blue",marginLeft:"4px",fontSize:"10px",}}
                 value={endtime_}
                onChange={e=>setEDate(e.target.value)}>
                </input><br></br>
               
                <input type="text"  placeholder="content" value={content_}
                onChange={e=>setContent(e.target.value)}>
                </input><br></br>

                <button type="submit"  style={{border:"white",background:"none"}}>Add</button>  
            </form>
    );
};

export default ListForm;