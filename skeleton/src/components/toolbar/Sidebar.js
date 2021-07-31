import {Column, Cell} from '@enact/ui/Layout';
import BodyText from '@enact/sandstone/BodyText';
import DeviceList from './DeviceList';
import Button from '@enact/sandstone/Button';
import {Router ,Link} from 'react-router-dom';

function Sidebar(props){
  
    return(
      <div {...props} style={{backgroundColor:'darkslategray', height:'100%'}}>
        
        <Column>
          <Cell size="10%" style={{backgroundColor:''}}>
            <BodyText
              style={{height:'50%', width:'93%', fontSize:'3rem', paddingTop:'5%'}}
              centered={true}
            >Welcome!</BodyText>
          </Cell>
          <Cell size="70%">
              <DeviceList style={{height:'100%'}}
								movePage={props.movePage} page={props.page} pageList={props.pageList}
								devices={props.devices} setDevices={props.setDevices}
							/>
          </Cell>
          <Cell size="20%" style={{backgroundColor:''}}>
            <BodyText>weather</BodyText>            
            <div style={{}}>
          <Button size="small" icon="home" style={{height:"30px",fontSize:"20px",float:"right",marginTop:""} }
          onClick={function(){
            let path = props.page.path.slice(); path.pop();
            path.push('setting');
            props.movePage(path,{})}
          }
          >  repeat </Button>    
        
         <Button size="small" icon="home" style={{height:"30px",fontSize:"20px",float:"right",marginTop:""} }
          onClick={function(){
            let path = props.page.path.slice(); path.pop();
            path.push('crawling');
            props.movePage(path,{})}
          }
          >  Crawling </Button>    
         </div>
          </Cell>
         
        </Column>
      </div>
    )
}

export default Sidebar;