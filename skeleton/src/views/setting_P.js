import React from 'react';
import {Panel,Header} from '@enact/sandstone/Panels';
import {Row, Cell} from '@enact/ui/Layout';
import Datepick_ from '../components/Setting/Datepick_';
import { Scroller } from '@fullcalendar/react';
import styles from '../components/Setting/datepick.module.css';

const setting_P=(props)=>{
    return(
        <Row style={{height:'100%', width:'100%' , backgroundColor:'rgb(83, 144, 149)'}}>

            <Panel>
                <Header  onClose={()=>{
                let path = props.page.path.slice(); path.pop();
                path.push('calendar');
                props.movePage(path,{initialDate:props.page.args.targetDate});
            }} >

                <div styles={`${styles.datepickform}`}>
                    <Datepick_>
                        
                    </Datepick_>
                </div>
            
                </Header>
            </Panel>
        </Row>   
    );
};

export default setting_P;