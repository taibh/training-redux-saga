import React from 'react';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalLoading from '../../components/global-loading/index';
import TaskBoard from '../task-board/index';
import configureStore from '../../redux/configureStore';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../../common/theme';
const store = configureStore();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<div className="App">
					<TaskBoard />
					<GlobalLoading />
				</div>
				<ToastContainer />
			</Provider>
		</ThemeProvider>
	);
}

export default App;
