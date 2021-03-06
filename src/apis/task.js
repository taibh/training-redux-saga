import axiosService from '../common/axiosService';

import { API_ENDPOINT } from '../constants/index';

const url = 'tasks';

export const getList = () => {
	return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const filterTasks = (q) => {
	return axiosService.get(`${API_ENDPOINT}/${url}?search=${q}`);
}
