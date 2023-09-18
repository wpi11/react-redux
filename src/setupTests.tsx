import '@testing-library/jest-dom';
import React from 'react';
import { AppState } from './types/AppState';
import { RenderHookOptions } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

// Create a redux store wrapper function
export const createReduxStoreWrapper = (
	initialState: AppState = { todos: [] }
): RenderHookOptions<unknown>['wrapper'] => {
	const store = configureStore<AppState, any>([])(initialState);
	return ({ children }) => <Provider store={store}>{children}</Provider>;
};
