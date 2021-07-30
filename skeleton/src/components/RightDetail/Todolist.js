import {useRef, useState} from 'react';
import Todoitem from './Todoitem';
import styles from './Rightcss.module.css'
import alarm_img from '../image/alarm.png'
import repeat_img from '../image/repeat.png'
import Checkbox from '@enact/sandstone/Checkbox';
import Todo from '../Detail/Todo';


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

            <div>
            
                <Todoitem item={item} key = {item.id}
                remove_item={remove_item}>

                </Todoitem>
            </div>
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

                <div>
                    <div style={{fontSize:"20px", paddingLeft:"30px"}}>
                        Start
                            <input type="time" style={{border:"none",color: "brown",fontSize:"25px",paddingLeft:"30px"}}
                                value={starttime_} onChange={e=>setSDate(e.target.value)}>        
                            </input> 
                    
                            <img className={`${styles.alarm_img}`} src={alarm_img } width='30' height='30'/>
                            <Checkbox> </Checkbox>
                            <br></br>
                        
                    </div>

                    <div style={{fontSize:"20px", paddingLeft:"30px"}}>
                            End
                            <input type="time" style={{border:"none",color: "brown", fontSize:"25px", paddingLeft:"30px"}}
                                value={endtime_} onChange={e=>setEDate(e.target.value)}>
                            </input>

                            <img className={`${styles.repeat_img}`} src={repeat_img} width='30' height='30'/>
                            <Checkbox> </Checkbox>
                            <br></br>
                    </div> 
                    <div calssName={`${styles.input_}`}>
                    
                    <textarea type="text"  placeholder="content" value={content_} cols="50" rows="4" style={{margin:"10px",paddingLeft:"30px"}}
                        onChange={e=>setContent(e.target.value)}>

                    </textarea>
                    <button type="submit" style={{backgroundColor:'indianred'}}>Add</button>
                </div>

                </div>


            </form>
                {mapping}
        </div>
    );
}



export default Todolist;