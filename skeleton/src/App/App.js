import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import MainPanel from '../views/MainPanel';
import Detail from '../views/Detail';
import { useState } from 'react';
import {getEventList} from '../Modules/eventModule'

function App(props){
	const [devices, setDevices] = useState([]);
	const [events, setEvents] = useState();//(getEventList());
	const pageList=['calendar','detail','setting'];
	const [page, setPage] = useState({
		path:['calendar'],
		args:{
			initialDate:new Date(),
		},
	});
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
			<div {...props}>hi</div>
		);
		default:
	}
}

export default ThemeDecorator(App);
