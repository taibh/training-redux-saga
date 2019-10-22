import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
	return {
		type: taskConstants.FETCH_TASK
	};
};

export const fetchListTaskSuccess = data => {
	return {
		type: taskConstants.FETCH_TASK_SUCCESS,
		payLoad: {
			data
		}
	};
};

export const fetchListTaskFailed = error => {
	return {
		type: taskConstants.FETCH_TASK_FAILED,
		payLoad: {
			error
		}
	};
};

export const fetchListTaskRequest = () => {
	return dispatch => {
		dispatch(fetchListTask());
		taskApis.getList().then(response => {
			dispatch(fetchListTaskSuccess(response.data));
		}).catch(error => {
			dispatch(fetchListTaskFailed(error));
		});
	};
};
