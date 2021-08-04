import { useState } from 'react';
import { Row, Cell, Column } from '@enact/ui/Layout';
import Button from '@enact/sandstone/Button';
import Panel from "@enact/sandstone/Panels";
import BodyText from '@enact/sandstone/BodyText';
import Input from '@enact/sandstone/Input';
import VirtualList from "@enact/sandstone/VirtualList";
import Item from '@enact/sandstone/Item';
import {getDevices, makeDummy} from '../../Modules/iotModule'

function ListItem({devices,index,setDevices}){
  //const statusList=['info','rename','remove']
  const [status,setStatus] = useState(0)
  let value=devices[index].name;
  switch(status){
    case(0):
    return(
      <Row key={index}>
        <Cell size='60%'>
          <Item
            size='small'
            onClick={()=>{
              setStatus(1);
            }}
          >{devices[index].name}({devices[index].id})</Item>
        </Cell>
        <Cell size='40%'>
          <Item
            size='small'
            onClick={()=>{
              setStatus(2);
            }}
          >{devices[index].connection.toString()}</Item>
        </Cell>
      </Row>
    )
    case(1):
    return(
      <Row key={index}>
        <Cell size='60%'>
          <Input
            size='small'
            defaultValue={devices[index].name}
            placeholder='device name'
            onComplete={(e)=>{
              value=e.value;
            }}/>
        </Cell>
        <Cell size='40%'>
          <Item
            size='small'
            onClick={(e)=>{
              let temp = devices.slice();
              temp[index].name=value;
              setDevices(temp);
              setStatus(0);
            }}
          >rename</Item>
        </Cell>
      </Row>
    )
    case(2):
    return(
      <Row key={index}>
        <Cell size='40%'>
          <BodyText size='100%' css={{height:'100%'}} centered={true}>
            Remove?
          </BodyText>
        </Cell>
        <Cell size='30%'>
          <Item
            size='small'
            onClick={(e)=>{
              let res = devices.slice();
              res.splice(index,1);
              setDevices(res);
              setStatus(0);
            }}
          >yes</Item>
        </Cell>
        <Cell size='30%'>
          <Item
            size='small'
            onClick={()=>{
              setStatus(0);
            }}
          >no</Item>
        </Cell>
      </Row>
    )
  }
}
//


function ListComponent(props){
  if(props.isSearch === true){
    return (
      <BodyText>Searching Device...</BodyText>
    );
  }
  else if (props.devices.length === 0){
    return (
      <BodyText style={{color:"white", marginTop:"10px", textAlign:
      "center"}}>There is no
      <br style={{height:"10px"}}></br> 
      connected device!</BodyText>
    );
  }
  else{
    return (
      <Panel {...props}>
        <VirtualList
          dataSize={props.devices.length}
          itemRenderer={({ index }) => (
            <ListItem index={index} devices={props.devices} setDevices={props.setDevices}/>
          )}
          itemSize={50}
        />
      </Panel>
    );
  }
}

//


function DeviceList(props){
  const [isSearch, setSearch] = useState(false);

  return(
    <div {...props}>
        <Column align='center' style={{height:'100%', width:'100%'}}>
          <Cell shrink>
            {/* <Heading showLine>Connected Devices</Heading> */}
          </Cell>
          <Cell>
            <ListComponent
              devices={props.devices}
              isSearch={isSearch}
              setDevices={props.setDevices}
            />
					</Cell>

          <Button
            onClick={()=>{
              setSearch(true);
              setTimeout(()=>{
                props.setDevices(getDevices());
                setSearch(false);
              },500)
            }}
            size='small'>
            Search Device</Button>
          {/* <Button size='small'>setting</Button> */}
        </Column>
    </div>
  )
}

export default DeviceList;