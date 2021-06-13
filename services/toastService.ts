import { toast } from 'react-toastify';

class ToastService {
	success = (successMsg: string) => {
		toast.success(successMsg);
	};

	error = (errorMsg: string) => {
		toast.error(errorMsg);
	};

	open = (successMsg: string, errorMsg: string) => (status: unknown) => {
		if (status) {
			toast.success(successMsg);
			return;
		}
		toast.error(errorMsg);
	};
}

const toastService = new ToastService();

export default toastService;
