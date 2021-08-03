import {React, useEffect} from 'react';
import { getDevices } from '../../Modules/iotModule'
import {Column, Row, Cell} from '@enact/ui/Layout';
import {EventInfo,addEvent,getEventList} from '../../Modules/eventModule';
import Scroller from '@enact/sandstone/Scroller';
import TimePicker from '@enact/sandstone/TimePicker';
import Dropdown from '@enact/sandstone/Dropdown';


const RightDetail =(props)=>{
    let eventitem;
    if (props.data === null){
        eventitem = new EventInfo(
            null,null,"event",null,
            props.page.args.targetDate.toUTCString(),
            props.page.args.targetDate.toUTCString()
        )
    }
    else{
        eventitem = JSON.parse(JSON.stringify(props.data));
    }
    console.log(eventitem);
    const devices = getDevices();
    const contents = (<textarea
         type="text"  cols="30" rows="4" 
         defaultValue={eventitem.contents}
         onChange={(obj)=>{
             eventitem.contents = obj.target.value;
         }}
         ></textarea>)
    const title = (
        <input 
        style={{width:"180px"}}
        type="text" placeholder="Event title"
        defaultValue={eventitem.title}
        onChange={(obj)=>{
            eventitem.title = obj.target.value;
        }}
        ></input>)
    const targetdevice=(
        <Dropdown
            defaultSelected={(()=>{
                if (eventitem.device_id == null){
                    return 0;
                }
                for(let i=1; i<devices.length+1; i++){
                    if (devices[i].id == eventitem.device_id){
                        return i;
                    }
                }
            })()}
            inline
            onSelect={({data,selected})=>{
                if (selected == 0){
                    eventitem.device_id = null;
                }
                else{
                    eventitem.device_id = devices[selected-1].id;
                }
            }}
            //title="Target Device"
        >
        {['None'].concat(devices.map(device=>{
            return `${device.name}(${device.id})`
        }))}
        </Dropdown>
    );
    const startTime=(<TimePicker
        defaultValue={new Date(eventitem.start)}
        onChange={(data)=>{
            eventitem.start=data.value.toUTCString();
        }}
    ></TimePicker>);
    const endTime=(<TimePicker
        defaultValue={new Date(eventitem.start)}
        onChange={(data)=>{
            eventitem.end=data.value.toUTCString();
        }}
    ></TimePicker>);
    return(
        <Column>
            <Cell size='13%'>
                {targetdevice}
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
                                    {startTime}
                                </Cell>
                                <Cell>
                                    <div>end</div> 
                                    {endTime}
                                </Cell>
                            </Row>
                        </Cell>
                        <Cell>
                            <div>
                            {title}
                            </div>

                            <div>
                            {contents}
                            <button style={{fontSize:"15px", color:"black", backgroundColor:"grey",display:"flex"}}type="button" onClick={()=>{
                    addEvent(eventitem, props.setEvents);
                }}>Add</button>
                            </div>
                        </Cell>
                    </Scroller>
                </Column>
            </Cell>
            {/*<Cell size='7%'>

            </Cell>*/}
        </Column>

    );

}

export default RightDetail; 