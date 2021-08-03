import {React, useEffect} from 'react';
import { getDevices } from '../../Modules/iotModule'
import {Column, Row, Cell} from '@enact/ui/Layout';
import {EventInfo,addEvent,getEventList} from '../../Modules/eventModule';
import Scroller from '@enact/sandstone/Scroller';
import TimePicker from '@enact/sandstone/TimePicker';
import Dropdown from '@enact/sandstone/Dropdown';


const RightDetail =(props)=>{
    const devices = [null].concat(getDevices());
    useEffect(()=>{
        console.log('detail');
        console.log(props.data);
    },[props.data]);
    if (props.data === null){
        let eventitem = new EventInfo(
            null,null,"event",null,
            props.page.args.targetDate.toUTCString(),
            props.page.args.targetDate.toUTCString()
        )
        return(
            <Column>
                <Cell size='13%'>
                    <Dropdown
                        defaultSelected={0}
                        inline
                        onSelect={({data,selected})=>{
                            if (selected == 0){
                                eventitem.device_id = null;
                            }
                            else{
                                eventitem.device_id = devices[selected-1].id;
                            }
                        }}
                    >
                        {devices.map(device=>{
                            if (device === null)
                                return `None`;
                            else
                                return `${device.name}(${device.id})`
                        })}
                    </Dropdown>
                </Cell>
                <Cell size='80%' >
                    <Column>
                        <Scroller
                            verticalScrollbar='visible'
                        >
                            <Cell>
                                <Row>
                                    <Cell>
                                        <div>start</div> 
                                        <TimePicker
                                            defaultValue={new Date(eventitem.start)}
                                            onChange={(data)=>{
                                                eventitem.start=data.value.toUTCString();
                                            }}
                                        ></TimePicker>
                                    </Cell>
                                    <Cell>
                                        <div>end</div> 
                                        <TimePicker
                                            defaultValue={new Date(eventitem.end)}
                                            onChange={(data)=>{
                                                eventitem.end=data.value.toUTCString();
                                            }}
                                        ></TimePicker>
                                    </Cell>
                                </Row>
                            </Cell>
                            <Cell>
                                <input 
                                    type="text" placeholder="Event title"
                                    defaultValue={'event'}
                                    onChange={(obj)=>{
                                        eventitem.title = obj.target.value;
                                    }}
                                ></input>
                                <textarea
                                    type="text"  cols="70" rows="4" 
                                    defaultValue={null}
                                    onChange={(obj)=>{
                                        eventitem.contents = obj.target.value;
                                    }}
                                ></textarea>
                            </Cell>
                        </Scroller>
                    </Column>
                </Cell>
                <Cell size='7%'>
                    <button type="button" onClick={()=>{
                        addEvent(eventitem, props.setEvents);
                        props.setData(null);
                    }}>Add</button>
                </Cell>
            </Column>
    
        );
    }
    else{
        let eventitem = JSON.parse(JSON.stringify(props.data));
        console.log('item');
        console.log(eventitem);
        console.log(devices.indexOf(eventitem.device_id));
        return(
            <Column>
                <Cell size='13%'>
                    <Dropdown
                        defaultSelected={devices.indexOf(eventitem.device_id)}
                        inline
                        onSelect={({data,selected})=>{
                            if (selected == 0){
                                eventitem.device_id = null;
                            }
                            else{
                                eventitem.device_id = devices[selected-1].id;
                            }
                        }}
                    >
                        {devices.map(device=>{
                            if (device === null)
                                return `None`;
                            else
                                return `${device.name}(${device.id})`
                        })}
                    </Dropdown>
                </Cell>
                <Cell size='80%' >
                    <Column>
                        <Scroller
                            verticalScrollbar='visible'
                        >
                            <Cell>
                                <Row>
                                    <Cell>
                                        <div>start</div> 
                                        <TimePicker
                                            defaultValue={new Date(eventitem.start)}
                                            onChange={(data)=>{
                                                eventitem.start=data.value.toUTCString();
                                            }}
                                        ></TimePicker>
                                    </Cell>
                                    <Cell>
                                        <div>end</div> 
                                        <TimePicker
                                            defaultValue={new Date(eventitem.end)}
                                            onChange={(data)=>{
                                                eventitem.end=data.value.toUTCString();
                                            }}
                                        ></TimePicker>
                                    </Cell>
                                </Row>
                            </Cell>
                            <Cell>
                                <input 
                                    type="text" placeholder="Event title"
                                    defaultValue={eventitem.title}
                                    onChange={(obj)=>{
                                        eventitem.title = obj.target.value;
                                    }}
                                ></input>
                                <textarea
                                    type="text"  cols="70" rows="4" 
                                    defaultValue={eventitem.contents}
                                    onChange={(obj)=>{
                                        eventitem.contents = obj.target.value;
                                    }}
                                ></textarea>
                            </Cell>
                        </Scroller>
                    </Column>
                </Cell>
                <Cell size='7%'>
                    <button type="button" onClick={()=>{
                    }}>Del</button>
                    <button type="button" onClick={()=>{
                    }}>Modify</button>
                </Cell>
            </Column>
        );
    }
}

export default RightDetail; 