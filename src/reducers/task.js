import * as taskConstants from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
	listTask: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case taskConstants.FETCH_TASKS: {
			return {
				...state,
				listTask: []
			};
		}
		case taskConstants.FETCH_TASKS_SUCCESS: {
			const {data} = action.payLoad;
			return {
				...state,
				listTask: data
			};
		}
		case taskConstants.FETCH_TASKS_FAILED: {
			const { error } = action.payLoad;
			toastError(error);
			return {
				...state,
				listTask: []
			};
		}
		case taskConstants.FILTER_TASKS_SUCCESS: {
			const { data } = action.payLoad;
			return {...state, listTask: data};
		}
		case taskConstants.FILTER_TASKS_FAILED: {
			const { error } = action.payLoad;
			toastError(error);
			return {
				...state
			}
		}
		default:
			return state;
	}
};

export default reducer;
