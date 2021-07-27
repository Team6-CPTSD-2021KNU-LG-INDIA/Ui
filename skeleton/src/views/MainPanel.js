import Calendar from '../components/Calendar'
import Sidebar from '../components/toolbar/Sidebar'
import {Row, Cell} from '@enact/ui/Layout';

function MainPanel({depth,pageList,page,movePage, devices, setDevices}){
	return (
		<div style={{height:'100%'}}>
			<Row style={{height:'100%', width:'100%'}}>
				<Cell size='75%'>
					<Calendar style={{
						marginLeft:'1%',
						marginTop:'-2%',
						height:'101%',
						width:'98%',
					}}
						movePage={movePage} page={page} pageList={pageList}
					/>
				</Cell>
				<Cell size='25%'>
					<Sidebar
						movePage={movePage} page={page} pageList={pageList}
						devices={devices} setDevices={setDevices}
					/>
				</Cell>
			</Row>
		</div>
	);
}


export default MainPanel;
