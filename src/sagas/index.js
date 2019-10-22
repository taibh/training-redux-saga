import { fork, take, call, put } from 'redux-saga/effects';

import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';
import * as taskTypes from '../constants/task';
import { STATUS_CODE } from '../constants';
import { getList } from '../apis/task';

function* rootSaga() {
	yield fork(watchFetchListTaskAction);
	yield fork(watchCreateTaskAction);
}

function* watchFetchListTaskAction() {
	while (true) {
		yield take(taskTypes.FETCH_TASK);
		const resp = yield call(getList);
		const { status, data } = resp;
		if (status === STATUS_CODE.SUCCESS) {
			yield put(fetchListTaskSuccess(data));
		} else {
			yield put(fetchListTaskFailed(data));
		}
	}
}

function* watchCreateTaskAction() {
	yield take(taskTypes.FETCH_TASK);
	console.log('watchCreateTaskAction');
}

export default rootSaga;
