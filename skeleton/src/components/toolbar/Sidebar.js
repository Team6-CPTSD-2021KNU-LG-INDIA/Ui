import {Column, Cell} from '@enact/ui/Layout';
import BodyText from '@enact/sandstone/BodyText';
import DeviceList from './DeviceList';

function Sidebar(props){
    return(
      <div {...props} style={{backgroundColor:'DarkRed', height:'90%', paddingTop:'60px', marginTop:'20px', marginBottom:'50px'}}>
        <Column>
          <Cell size="10%" style={{backgroundColor:''}}>
            <BodyText
              style={{height:'50%', width:'93%', fontSize:'2rem', paddingTop:'5%'}}
              centered={true}
            >Welcome!</BodyText>
          </Cell>
          <Cell size="70%">
              <DeviceList style={{height:'70%'}}
								movePage={props.movePage} page={props.page} pageList={props.pageList}
								devices={props.devices} setDevices={props.setDevices}
							/>
          </Cell>
          <Cell size="20%" style={{backgroundColor:'cornsilk'}}>
            <BodyText style={{color:'black'}}>weather</BodyText>
          </Cell>
        </Column>
      </div>
    )
}

export default Sidebar;