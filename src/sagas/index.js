import { fork, take, call, put, delay, takeLatest } from 'redux-saga/effects';

import {
	fetchListTaskSuccess,
	fetchListTaskFailed,
	filterTasksSuccess,
	filterTasksFailed
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';

import * as taskTypes from '../constants/task';
import { STATUS_CODE } from '../constants';

import { getList, filterTasks } from '../apis/task';

function* watchFetchListTaskAction() {
	while (true) {
		yield take(taskTypes.FETCH_TASKS);
		yield put(showLoading());
		const resp = yield call(getList);
		const { status, data } = resp;
		if (status === STATUS_CODE.SUCCESS) {
			yield put(fetchListTaskSuccess(data));
		} else {
			yield put(fetchListTaskFailed(data));
		}
		yield delay(500);
		yield put(hideLoading());
	}
}

function* watchCreateTaskAction() {
	yield take(taskTypes.FETCH_TASKS);
}

function* filterTasksSaga({payLoad}) {
	yield delay(500);
	const {keyWord} = payLoad;
	yield put(showLoading());
	const resp = yield call(filterTasks, keyWord);
	const {data, status} = resp;
	if (status === STATUS_CODE.SUCCESS) {
		yield put(filterTasksSuccess(data));
	} else {
		yield put(filterTasksFailed(data));
	}
	yield put(hideLoading());
}

function* rootSaga() {
	yield fork(watchFetchListTaskAction);
	yield fork(watchCreateTaskAction);
	yield takeLatest(taskTypes.FILTER_TASKS, filterTasksSaga)
}

export default rootSaga;
