import './App.scss';
import './App.css';
import { renderRoutes } from 'react-router-config';
import route from "@/router/index";
import { HashRouter } from 'react-router-dom';
import { ContextProvider } from './store/contextProvider'

function App() {
	return (
		<ContextProvider>
			<HashRouter>
				{renderRoutes(route)}
			</HashRouter>
		</ContextProvider>
	)
}

export default App;
