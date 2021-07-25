import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';
import MainPanel from '../views/MainPanel';
import Detail from '../views/Detail';
import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<Panels>
				<Detail>
					This is content list
				</Detail>
			</Panels>
		</div>
	)
});

export default ThemeDecorator(App);
