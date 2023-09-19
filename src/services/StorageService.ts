export const STORAGE_KEYS = {
	REDUX_STORE: '_redux_store',
};

export interface StorageAdapter {
	getItem(key: string): string | null;
	setItem(key: string, value: string): void;
	removeItem(key: string): void;
}

/**
 * Represents a service for interacting with storage using a storage adapter.
 */
class StorageService {
	storageAdapter: StorageAdapter;
	/**
	 * Creates a new StorageService instance.
	 * @param {StorageAdapter} storageAdapter - The storage adapter to use for storage operations.
	 */
	constructor(storageAdapter: StorageAdapter) {
		this.storageAdapter = storageAdapter;
	}

	/**
	 * Retrieves a value from storage based on the provided key.
	 * @param {string} key - The key to retrieve the value for.
	 * @returns {string | null} The retrieved value, or null if the key is not found.
	 */
	getItem(key: string): string | null {
		return this.storageAdapter.getItem(key);
	}

	/**
	 * Sets a value in storage for the given key.
	 * @param {string} key - The key to set the value for.
	 * @param {string} value - The value to be set.
	 */
	setItem(key: string, value: string) {
		this.storageAdapter.setItem(key, value);
	}

	/**
	 * Removes a value from storage based on the provided key.
	 * @param {string} key - The key to remove the value for.
	 */
	removeItem(key: string) {
		this.storageAdapter.removeItem(key);
	}
}

/**
 * An adapter for using the local storage mechanism.
 */
class LocalStorageAdapter implements StorageAdapter {
	/**
	 * Retrieves a value from local storage based on the provided key.
	 * @param {string} key - The key to retrieve the value for.
	 * @returns {string | null} The retrieved value, or null if the key is not found.
	 */
	getItem(key: string): string | null {
		return localStorage.getItem(key);
	}

	/**
	 * Sets a value in local storage for the given key.
	 * @param {string} key - The key to set the value for.
	 * @param {string} value - The value to be set.
	 */
	setItem(key: string, value: string) {
		localStorage.setItem(key, value);
	}

	/**
	 * Removes a value from local storage based on the provided key.
	 * @param {string} key - The key to remove the value for.
	 */
	removeItem(key: string) {
		localStorage.removeItem(key);
	}
}

class SessionStorageAdapter implements StorageAdapter {
	getItem(key: string): string | null {
		return sessionStorage.getItem(key);
	}

	setItem(key: string, value: string): void {
		sessionStorage.setItem(key, value);
	}

	removeItem(key: string): void {
		sessionStorage.removeItem(key);
	}
}

// Adapter instances to easily extend app with libraries outside of local / session storage
export const sessionStorageAdapter = new SessionStorageAdapter();
export const localStorageAdapter = new LocalStorageAdapter();

// Create instances with adapter for sessionStorage and localStorage
export const sessionStorageService = new StorageService(sessionStorageAdapter);
export const localStorageService = new StorageService(localStorageAdapter);

export const createStorageService = (
	storageType: 'localStorage' | 'sessionStorage'
) => {
	const selectedStorage =
		storageType === 'localStorage' ? localStorage : sessionStorage;
	return new StorageService(selectedStorage);
};
