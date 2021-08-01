import {Panel,Header} from '@enact/sandstone/Panels';
import Todo from '../components/Detail/Todo';
import { useState } from 'react';
import Scroller from '@enact/sandstone/Scroller';
import {Row, Cell} from '@enact/ui/Layout';
import RightDetail from '../components/RightDetail/RightDetail';


const Detail= (props)=>{
    const [formdata,setFormdata] = useState(null);
    return(
        <Row style={{height:'100%', width:'100%' , backgroundColor:'rgb(83, 144, 149)'}}>
            <Panel>
                <Header onClose={()=>{
                    let path = props.page.path.slice(); path.pop();
                    path.push('calendar');
                    props.movePage(path,{initialDate:props.page.args.targetDate});
                }} title={props.page.args.targetDate.toString()} >
                    <Todo events={props.events} page={props.page} setFormdata={setFormdata}>
                    </Todo>
                    <RightDetail events={props.events} page={props.page} formdata={formdata}>                              
                    </RightDetail>
                </Header>
                
            </Panel>
        </Row>
    );

}

export default Detail;