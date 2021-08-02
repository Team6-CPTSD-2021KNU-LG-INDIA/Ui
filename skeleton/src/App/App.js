import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import MainPanel from '../views/MainPanel';
import Detail from '../views/Detail';
import Setting_P from '../views/setting_P';
import Crawling from '../views/Crawling';
import { useState } from 'react';
import {loadEventList} from '../Modules/eventModule'

function App(props){
	const [devices, setDevices] = useState([]);
	const [events, setEvents] = useState(null);
	const pageList=['calendar','detail','setting','crawling'];
	const [page, setPage] = useState({
		path:['calendar'],
		args:{
			initialDate:new Date(),
		},
	});
	if (!events){
		loadEventList(events).then(res=>{
			console.log(res);
			setEvents(res);
		});
	}
	
	function movePage(path, args){
		setPage({
			path: path,
			args: args,
		})
	}
	switch(page.path[0]){
		case('calendar'):
			return (<MainPanel
				depth={0}
				devices={devices} setDevices={setDevices}
				pageList={pageList} page={page} movePage={movePage}
				events={events} setEvents={setEvents}
			/>);
		case('detail'):
		return (<Detail
				depth={0} devices={devices}
				pageList={pageList} page={page} movePage={movePage}
				events={events} setEvents={setEvents}
			/>);
		case('setting'):
		return (
			<Setting_P depth={0} devices={devices}
			pageList={pageList} page={page} movePage={movePage}
			events={events} setEvents={setEvents}>
			</Setting_P>
		);
		case('crawling'):
		return (
			
			<Crawling depth={0} devices={devices}
			pageList={pageList} page={page} movePage={movePage}
			events={events} setEvents={setEvents}>
			</Crawling>
		);
		default:
	}
}

export default ThemeDecorator(App);
