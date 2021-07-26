import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import MainPanel from '../views/MainPanel';
import Detail from '../views/Detail';
import { useState } from 'react';

function App(props){
	const [devices, setDevices] = useState([]);
	const pageList=['calendar','detail','setting'];
	const [page, setPage] = useState({
		path:['calendar'],
		args:null,
	});

	function movePage(path, args){
		setPage({
			path: path,
			args: args,
		})
	}
	switch(page.path[0]){
		case('calendar'):
			return (<MainPanel stype={{backgroundColor:'gray'}}
				depth={0}
				devices={devices} setDevices={setDevices}
				pageList={pageList} page={page} movePage={movePage}
			/>);
		case('detail'):
		return (<Detail
				depth={0} devices={devices}
				pageList={pageList} page={page} movePage={movePage}
			/>);
		case('setting'):
		return (
			<div {...props}>
			</div>
		);
		default:
	}
}

export default ThemeDecorator(App);
