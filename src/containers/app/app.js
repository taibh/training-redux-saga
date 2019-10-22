import React from 'react';

import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TaskBoard from '../task-board/index';
import configureStore from '../../redux/configureStore';

const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<TaskBoard />
			</div>
			<ToastContainer />
		</Provider>
	);
}

export default App;
