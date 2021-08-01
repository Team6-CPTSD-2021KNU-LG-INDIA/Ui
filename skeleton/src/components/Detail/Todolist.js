import {useRef, useState} from 'react';
import Todoitem from './Todoitem';
import Button from '@enact/sandstone/Button';
import VirtualList from "@enact/sandstone/VirtualList";



const Todolist=(props)=>{
    return(
        <div>
            <Button
                size='large'
                onClick={()=>{
                }}
            >ADD</Button>
            <VirtualList
                dataSize={props.events.length}
                itemRenderer={({ index }) => (
                    <div>
                        <Button
                            index={index}
                            size='large'
                            onClick={()=>{
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