import {React} from 'react';
import { getDevices } from '../../Modules/iotModule'
import {Column, Row, Cell} from '@enact/ui/Layout';
import {EventInfo,addEvent} from '../../Modules/eventModule';
import Scroller from '@enact/sandstone/Scroller';
import TimePicker from '@enact/sandstone/TimePicker';
import Dropdown from '@enact/sandstone/Dropdown';


const RightDetail =(props)=>{
    const devices = getDevices();
    const eventitem = new EventInfo(
        null,null,null,null,
        props.page.args.targetDate.toUTCString(),
        props.page.args.targetDate.toUTCString()
    )
    const contents = (<textarea
         type="text"  cols="70" rows="4" 
         onChange={(obj)=>{
             eventitem.contents = obj.target.value;
         }}
         ></textarea>)
    const title = (<input 
        type="text" placeholder="Event title"
        onChange={(obj)=>{
            eventitem.title = obj.target.value;
        }}
        ></input>)
    const targetdevice=(
        <Dropdown
            defaultSelected={0}
            inline
            onSelect={({data,selected})=>{
                eventitem.device_id = devices[selected].id;
            }}
            //title="Target Device"
        >
        {['None'].concat(devices.map(device=>{
            return `${device.name}(${device.id})`
        }))}
        </Dropdown>
    );
    const startTime=(<TimePicker
        defaultValue={props.page.args.targetDate}
        onChange={(data)=>{
            eventitem.start=data.value.toUTCString();
        }}
    ></TimePicker>);
    const endTime=(<TimePicker
        defaultValue={props.page.args.targetDate}
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
                            {title}
                            {contents}
                        </Cell>
                    </Scroller>
                </Column>
            </Cell>
            <Cell size='7%'>
                <button type="button" onClick={()=>{
                    addEvent(eventitem, props.setEvents);
                }}>Add</button>
            </Cell>
        </Column>

    );

}

export default RightDetail; 