import {Column, Cell} from '@enact/ui/Layout';
import BodyText from '@enact/sandstone/BodyText';
import DeviceList from './DeviceList';

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
								devices={devices} setDevices={setDevices}
							/>
          </Cell>
          <Cell size="20%" style={{backgroundColor:''}}>
            <BodyText>weather</BodyText>
          </Cell>
        </Column>
      </div>
    )
}

export default Sidebar;