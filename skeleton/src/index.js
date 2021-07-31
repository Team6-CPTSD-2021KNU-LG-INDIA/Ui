import {render} from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const appElement = (
<BrowserRouter>
<App />
</BrowserRouter>	);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
