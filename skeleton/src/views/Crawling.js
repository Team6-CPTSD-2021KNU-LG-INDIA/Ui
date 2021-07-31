import React from 'react';
import { Row } from '@enact/ui/Layout';
import { Panel,Header } from '@enact/sandstone/Panels';
import Crawtemplate from '../components/Crawling/Crawtemplate';

const Crawling =(props)=>{
    
    

    return (
        <Row style={{height:'100%', width:'100%' , backgroundColor:'whitesmoke'}}>

        <Panel>
            <Header  onClose={()=>{
            let path = props.page.path.slice(); path.pop();
            path.push('calendar');
            props.movePage(path,{initialDate:props.page.args.targetDate});
        }} >
            </Header>
            <Crawtemplate >
                
            </Crawtemplate>
        </Panel>
         </Row> 
    );
}  

export default Crawling; 