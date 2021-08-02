import {useRef, useState} from 'react';

import Button from '@enact/sandstone/Button';
import VirtualList from "@enact/sandstone/VirtualList";

const Todolist=(props)=>{
    return(
        <div>
            <Button
                size='large'
                onClick={()=>{
                    props.setData(null);
                }}
            >ADD</Button>
            <VirtualList
                dataSize={props.events.length}
                itemRenderer={({ index }) => (
                    <div>
                        <Button
                            key={index}
                            size='large'
                            onClick={()=>{
                                props.setData(props.events[index]);
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