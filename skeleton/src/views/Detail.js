import {Panel,Header} from '@enact/sandstone/Panels';
import Todo from '../components/Detail/Todo';
import {Column, Row, Cell} from '@enact/ui/Layout';
import RightDetail from '../components/RightDetail/RightDetail';
import { useState } from 'react/cjs/react.development';


const Detail= (props)=>{
    const [data,setData] = useState(null);
    return(
        <Column style={{height:'100%', width:'100%' , backgroundColor:'rgb(83, 144, 149)'}}>
        <Cell size='15%'>
            <Header
            size='small'
            onClose={()=>{
                let path = props.page.path.slice(); path.pop();
                path.push('calendar');
                props.movePage(path,{initialDate:props.page.args.targetDate});
            }} title={props.page.args.targetDate.toString()} >
            </Header>
        </Cell>
        
        <Cell size='85%'> 
            <Row style={{height:'100%'}}>
                <Cell size='20%'>
                    <Todo events={props.events} page={props.page} setData={setData}></Todo>
                </Cell>
                <Cell size='80%'>
                    <RightDetail events={props.events}  page={props.page} setEvents={props.setEvents} data={data}></RightDetail>
                </Cell>
            </Row>
        </Cell>
        </Column>
    );

}

export default Detail;