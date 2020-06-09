import * as modalConstants from '../constants/modal';

export const showModal = () => ({
	type: modalConstants.SHOW_MODAL
});

export const hideModal = () => ({
	type: modalConstants.HIDE_MODAL
});
