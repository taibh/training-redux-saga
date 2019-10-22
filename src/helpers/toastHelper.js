import { toast } from 'react-toastify';

export const toastError = error => {
	console.log(error);
	let message = null;
	if (error && error.message) {
		({message} = error);
	}
	if (message) {
		toast.error(message);
	}
};
