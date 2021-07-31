import {useRef, useState} from 'react';
import Todoitem from '../Detail/Todoitem';
import styles from './Rightcss.module.css'
import alarm_img from '../image/alarm.png'
import repeat_img from '../image/repeat.png'
import Checkbox from '@enact/sandstone/Checkbox';
import Todo from '../Detail/Todo';


const Todolists=(props)=>{

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

    const mapping=items.length ? items.map(item=>{
        
        return(
            <div>
                <Todoitem item={item} key = {item.id}
                remove_item={remove_item}>

                </Todoitem>
            </div>
        );
    }):"No schedule ";


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

                <div >
    
                    <div>
                        start:   
                        <input type="time" style={{border:"none",color: "blue",marginLeft:"50px",fontSize:"30px",}}
                        value={props.event}
                        onChange={e=>setSDate(e.target.value)}
                        
                        >        
                        </input>                
                        <img className={`${styles.alarm_img}`} src={alarm_img }width='40' height='40'  />
                        <Checkbox> </Checkbox>
                        
                        <br></br>
                        
                    </div>
                    <div >
                        End:
                        <input type="time" style={{border:"none",color: "blue",marginLeft:"50px",fontSize:"30px"} }
                        
                        value={endtime_}
                        onChange={e=>setEDate(e.target.value)}>
                        </input>
                        <img className={`${styles.repeat_img}`} src={repeat_img} width='50' height='50'/>
                        <Checkbox> </Checkbox>
                        <br></br>
                    </div>
                </div>

                <br></br>
                <div calssName={`${styles.input_}`}>
                    
                    <textarea type="text"  value={""} cols="70" rows="4" style={{margin:"10px",}}
                    onChange={e=>setContent(e.target.value)}>
                    </textarea><br></br>
                </div>
                
                <button type="submit">Add</button>
            </form>
           
        </div>
    );
}



export default Todolists;