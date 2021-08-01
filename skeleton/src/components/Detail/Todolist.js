import {useRef, useState} from 'react';
import Todoitem from './Todoitem';
import ListForm from './ListForm';



const Todolist=(props)=>{

    const[show,setShowed]=useState(false);
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
            <div >
                <Todoitem item={item} key = {item.id}
                     remove_item={remove_item}>
                 </Todoitem>
            </div>
          
        );
    }):"No schedule ";

     function send(item){
        item=items
        return item;
    }


    const nextId=useRef(2);

    const add=(item)=>{
    
        setItem([
            ...items,
            item
        ])
        nextId.current+=1;
        
    };

   
    return(
        <div>
            <div>
                <button onClick={(e) => setShowed(false) } style={{borderRadius:"180px",
                width:"35px",height:"35px",fontSize:"20px",float:"left"}}>+</button>
                <button onClick={(e) => setShowed(true) }style={{borderRadius:"180px",
                width:"35px",height:"35px",fontSize:"20px",float:"right"}}>-</button>
            </div>
            <br></br>
            <br></br>
           
            <div style={show ? { display: "none" } : { display: "block" }}>     
            <ListForm add={add} >

            </ListForm>
            </div>
              {mapping}
            
         
        </div>
    );
    
}


export default Todolist;