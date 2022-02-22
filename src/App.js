import './App.scss';
import './App.css';
import { renderRoutes } from 'react-router-config';
import routes from "@/router/index";
import { HashRouter } from 'react-router-dom';
import { ContextProvider } from './store/contextProvider'

function App() {
	return (
		<ContextProvider>
			<HashRouter>
				{renderRoutes(routes)}
			</HashRouter>
		</ContextProvider>
	)
}

export default App;
