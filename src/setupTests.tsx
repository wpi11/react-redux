// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { AppState } from './types/AppState';
import { RenderHookOptions } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

// Create a redux store wrapper function
export const createReduxStoreWrapper = (
  initialState: AppState = { todos: [] },
): RenderHookOptions<unknown>['wrapper'] => {
  const store = configureStore<AppState, any>([])(initialState);
  return ({ children }) => <Provider store={store}>{children}</Provider>;
};