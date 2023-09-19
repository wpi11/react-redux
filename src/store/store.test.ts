import { STORAGE_KEYS } from '../services/StorageService';
import store, { loadState, saveState, storageService } from './store';

describe('Redux Store', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('loadState should load default state', () => {
		const defaultState = { id: 1, text: 'loadState', completed: false };

		// Mock the storageService.getItem function to simulate empty storage
		jest.spyOn(storageService, 'getItem').mockReturnValue(null);

		const result = loadState(defaultState);

		// Verify that the getItem method was called with the correct key
		expect(storageService.getItem).toHaveBeenCalledWith(
			STORAGE_KEYS.REDUX_STORE
		);

		expect(result).toEqual(defaultState);
	});

	it('loadState should load storage state', () => {
		const defaultState = { id: 1, text: 'loadState2', completed: false };

		// Mock the storageService.getItem function to simulate empty storage
		jest
			.spyOn(storageService, 'getItem')
			.mockReturnValue(JSON.stringify(defaultState));

		const result = loadState(defaultState);

		// Verify that the getItem method was called with the correct key
		expect(storageService.getItem).toHaveBeenCalledWith(
			STORAGE_KEYS.REDUX_STORE
		);

		expect(result).toEqual(defaultState);
	});

	it('saveState should save state to storage service', async () => {
		const stateToSave = [{ id: 2, text: 'default', completed: false }];

		// Mock the storageService.setItem function
		const setItemMock = jest.spyOn(storageService, 'setItem');

		saveState(stateToSave);

		// Verify that the setItem method was called with the correct key and serialized state
		expect(setItemMock).toHaveBeenCalledWith(
			STORAGE_KEYS.REDUX_STORE,
			JSON.stringify(stateToSave)
		);
	});

	it('saveState should save state to storage after every action', async () => {
		const mockState = {
			todos: [
				{ id: 3, text: 'Updated', completed: true },
				// Add any other todos as needed to match your state structure
			],
		};

		// Define an action that represents a change in state (adjust this based on your actual actions)
		const action = {
			type: 'addTodo',
			payload: mockState.todos,
		};

		// Mock the storageService.setItem function
		const setItemMock = jest.spyOn(storageService, 'setItem');

		// Mock store getState method
		const mockGetState = jest.spyOn(store, 'getState');

		mockGetState.mockReturnValue(mockState);

		// Dispatch the action
		store.dispatch(action);

		// Verify that the setItem method was called with the correct key and serialized state
		expect(setItemMock).toHaveBeenCalledWith(
			STORAGE_KEYS.REDUX_STORE,
			JSON.stringify(mockState) // Serialize the entire state, not just the action payload
		);

		expect(mockGetState).toHaveBeenCalledTimes(1);

		// Clean up the mock to restore original behavior
		setItemMock.mockRestore();
	});
});
