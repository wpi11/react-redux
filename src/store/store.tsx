/**
 * @module ReduxStore
 * @description This module handles the configuration and management of the Redux store.
 */

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import { STORAGE_KEYS, createStorageService } from '../services/StorageService';
import { AppState } from '../types/AppState';

// Define initial state (optional)
const initialState: AppState = {
	todos: [{ id: 1, text: 'asdf', completed: false }],
};

// Define the storage service for Redux state persistence.
const storageService = createStorageService('localStorage');

/**
 * Load state from storage.
 *
 * @template T - The type of state being loaded.
 * @param {T} defaultState - The default state to use if nothing is found in storage.
 * @returns {T} The loaded state or the default state if not found or an error occurs.
 */
const loadState = <T,>(defaultState: T): T => {
	try {
		const serializedState = storageService.getItem(STORAGE_KEYS.REDUX_STORE);
		if (serializedState === null) {
			return defaultState; // Provide a default initial state here
		}
		return { ...JSON.parse(serializedState), ...defaultState };
	} catch (error) {
		console.error('Error loading state from storage:', error);
		return defaultState; // Provide a default initial state here
	}
};

/**
 * Save state to storage after every action.
 *
 * @template T - The type of state being saved.
 * @param {T} state - The state to be saved.
 */
const saveState = <T,>(state: T) => {
	try {
		const serializedState = JSON.stringify(state);
		storageService.setItem(STORAGE_KEYS.REDUX_STORE, serializedState);
	} catch (error) {
		console.error('Error saving state to storage:', error);
	}
};

// Redux store instance configuration.
const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
	preloadedState: loadState(initialState),
});

// Save state to storage after every action.
store.subscribe(() => {
	saveState(store.getState());
});

export default store;
