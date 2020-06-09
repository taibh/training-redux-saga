import * as modalConstants from '../constants/modal';

const initialState = {
	open: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case modalConstants.SHOW_MODAL:
			return {
				...state,
				open: true
			}
		case modalConstants.HIDE_MODAL:
			return {
				...state,
				open: false
			}
		default:
			return state;
	}
}

export default reducer;
