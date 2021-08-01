import {useRef, useState} from 'react';
import Todoitem from './Todoitem';
import Button from '@enact/sandstone/Button';
import VirtualList from "@enact/sandstone/VirtualList";



const Todolist=(props)=>{
    return(
        <div>
            <Button
                size="small"
                onClick={()=>{
                    props.setFormdata(null);
                }}
            >ADD</Button>
            <VirtualList
                dataSize={props.events.length}
                itemRenderer={({ index }) => (
                    <div>
                        <Button
                            index={index}
                            size="small"
                            onClick={()=>{
                                props.setFormdata(props.events[index]);
                            }}
                        >{props.events[index].title}</Button>
                        <div>{props.events[index].start}-{props.events[index].end}</div>
                    </div>
                )}
                itemSize={100}
            />
        </div>
    );
    
}


export default Todolist;