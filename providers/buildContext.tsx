import React, { createContext, useContext } from 'react';

export const buildContext = <T,>(useStateHook: () => T) => {
	type UseStateHookType = ReturnType<typeof useStateHook>;

	const Context = createContext<UseStateHookType | undefined>(undefined);

	const Provider: React.FC = ({ children }) => {
		const value = useStateHook();
		return <Context.Provider value={value}>{children}</Context.Provider>;
	};

	const useStateContext = () => {
		const context = useContext<UseStateHookType | undefined>(Context);
		if (context === undefined) {
			throw new Error('Custom useState hook must be used within a Provider');
		}
		return context;
	};

	return {
		Provider,
		Context,
		useStateContext,
	};
};
