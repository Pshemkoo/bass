import { useCallback, useState } from 'react';

type ReturnValues = {
	isLoading: boolean;
	showLoader: () => void;
	hideLoader: () => void;
	loadingChange: (func: () => unknown) => void;
	asyncLoadingChange: <T>(func: () => Promise<T>) => Promise<T>;
};

const useLoading = (): ReturnValues => {
	const [isLoading, setIsLoading] = useState(false);

	const showLoader = useCallback(() => {
		setIsLoading(true);
	}, []);

	const hideLoader = useCallback(() => {
		setIsLoading(false);
	}, []);

	const loadingChange = useCallback(
		(callback: () => unknown) => {
			showLoader();
			const data = callback();
			hideLoader();
			return data;
		},
		[showLoader, hideLoader]
	);

	const asyncLoadingChange = useCallback(
		async <T>(callback: () => Promise<T>): Promise<T> => {
			showLoader();
			try {
				const result = await callback();
				hideLoader();
				return result;
			} catch (error) {
				hideLoader();
				throw new Error(error);
			}
		},
		[showLoader, hideLoader]
	);

	return {
		isLoading,
		showLoader,
		hideLoader,
		loadingChange,
		asyncLoadingChange,
	};
};

export default useLoading;
