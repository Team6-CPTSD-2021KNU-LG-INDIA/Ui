import {Column, Cell} from '@enact/ui/Layout';
import BodyText from '@enact/sandstone/BodyText';
import DeviceList from './DeviceList';
import Weather_Info from '../Weather';
function Sidebar(props){
  
    return(
      <div {...props} style={{backgroundColor:'darkslategray', height:'100%'}}>
        
        <Column>
          {/* <Cell size="10%" style={{backgroundColor:''}}>
            <BodyText
              style={{height:'30%', width:'93%', fontSize:'3rem', paddingTop:'0'}}
              centered={true}
            >welcome</BodyText>
          </Cell> */}
          <Cell size="60%">
              <DeviceList style={{height:'100%'}}
								movePage={props.movePage} page={props.page} pageList={props.pageList}
								devices={props.devices} setDevices={props.setDevices}
							/>
          </Cell>
          <Cell size="40%" style={{height:"100%"}}>
            <BodyText>weather</BodyText>            
            <Weather_Info>

            </Weather_Info>
          </Cell>
         
        </Column>
      </div>
    )
}

export default Sidebar;