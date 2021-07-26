import {useRef, useState} from 'react';
import Todoitem from './Todoitem';


const Todolist=()=>{

    const [starttime_,setSDate]=useState();
    const [endtime_,setEDate]=useState();
    const [content_,setContent]=useState();
    const [id_,setId]=useState();

    const [items,setItem]=useState([
        {id:1,start_time:"12:00",end_time:"20:00",content:"Go Library"}
    
    ]);


    const remove_item=(id)=>{
        setItem(items.filter(item=>{
            return item.id !== id
        }));
    }

    const mapping=items.length? items.map(item=>{
        
        return(
            <Todoitem item={item} key = {item.id}
            remove_item={remove_item}>

            </Todoitem>
        );
    }):"No schedule ";

    // {useEffect(()=>{
    //     console.log('render');

    // });}
    
    const nextId=useRef(2);

    const add=(e)=>{
        e.preventDefault();
        
        setItem([
    
            ...items,{
                id:nextId.current,
            start_time: starttime_,
            end_time: endtime_,
            content:content_,
        }])
        nextId.current+=1;
        setSDate("");
        setEDate("");
        setContent("");
    };

  
    return(
        <div >
            <form onSubmit={add}>
                <input type="text" placeholder="start time" value={starttime_}
                onChange={e=>setSDate(e.target.value)}>
                </input><br></br>
                <input type="text" placeholder="end time" value={endtime_}
                onChange={e=>setEDate(e.target.value)}>
                </input><br></br>
                <input type="text"  placeholder="content" value={content_}
                onChange={e=>setContent(e.target.value)}>
                </input><br></br>
                
                <button type="submit">Add</button>
                
            </form>
                {mapping}
        </div>
    );
}

export default Todolist;