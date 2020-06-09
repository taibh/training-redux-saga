import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
	return {
		type: taskConstants.FETCH_TASKS
	};
};

export const fetchListTaskSuccess = data => {
	console.log(123)
	return {
		type: taskConstants.FETCH_TASKS_SUCCESS,
		payLoad: {
			data
		}
	};
};

export const fetchListTaskFailed = error => {
	return {
		type: taskConstants.FETCH_TASKS_FAILED,
		payLoad: {
			error
		}
	};
};

export const fetchListTaskRequest = () => {
	return dispatch => {
		dispatch(fetchListTask());
	};
};

export const filterTasks = keyWord => ({
	type: taskConstants.FILTER_TASKS,
	payLoad: {
		keyWord
	}
});

export const filterTasksSuccess = data => ({
	type: taskConstants.FILTER_TASKS_SUCCESS,
	payLoad: {
		data
	}
});

export const filterTasksFailed = error => ({
	type: taskConstants.FILTER_TASKS_FAILED,
	payLoad: {
		error
	}
});
