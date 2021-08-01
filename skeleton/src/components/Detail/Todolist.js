import {useRef, useState} from 'react';

import Button from '@enact/sandstone/Button';
import VirtualList from "@enact/sandstone/VirtualList";

const test = [{
    device_id:"1",
    title:"1",
    start:new Date(),
    end:new Date(),
}];

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
                        >{props.events[index].title+""}</Button>
                        <div>{props.events[index].start.toLocaleString()}
                        -{props.events[index].end.toLocaleString()}</div>
                    </div>
                )}
                itemSize={120}
            />
        </div>
    );
    
}


export default Todolist;