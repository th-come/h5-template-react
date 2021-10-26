
import React, { createContext, useReducer, useContext } from 'react';
import reducers from '@/Reducer/reducer';

const initialState = {
	user: { name: 'th', age: 25 },
	params: { key: 'birthday', date: '20200916' }
}
const Context = createContext()

export const useStore = () => useContext(Context)

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducers, initialState)
	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	)
}