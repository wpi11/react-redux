import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import { STORAGE_KEYS, createStorageService } from '../services/StorageService';

const storageService = createStorageService('sessionStorage');

// Load state from storage
const loadState = () => {
	try {
		const serializedState = storageService.getItem(STORAGE_KEYS.REDUX_STORE);
		if (serializedState === null) {
			return { todos: [] }; // Provide a default initial state here
		}
		return JSON.parse(serializedState);
	} catch (error) {
		console.error('Error loading state from storage:', error);
		return { todos: [] }; // Provide a default initial state here
	}
};

// Save state to storage after every action
const saveState = (state: unknown) => {
	try {
		const serializedState = JSON.stringify(state);
		storageService.setItem(STORAGE_KEYS.REDUX_STORE, serializedState);
	} catch (error) {
		console.error('Error saving state to storage:', error);
	}
};

const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
	preloadedState: loadState(),
});

// Save state to storage after every action
store.subscribe(() => {
	saveState(store.getState());
});

export default store;
