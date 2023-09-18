export type StorageServiceType = typeof sessionStorage | typeof localStorage;

export const STORAGE_KEYS = {
	REDUX_STORE: '_redux_store',
};

class StorageService {
	storage: StorageServiceType;

	constructor(storage: StorageServiceType) {
		this.storage = storage;
	}

	getItem(key: string) {
		return this.storage.getItem(key);
	}

	setItem(key: string, value: string) {
		this.storage.setItem(key, value);
	}

	removeItem(key: string) {
		this.storage.removeItem(key);
	}
}

// Create instances for sessionStorage and localStorage
export const sessionStorageService = new StorageService(sessionStorage);
export const localStorageService = new StorageService(localStorage);

export const createStorageService = (
	storageType: 'localStorage' | 'sessionStorage'
) => {
	const selectedStorage =
		storageType === 'localStorage' ? localStorage : sessionStorage;
	return new StorageService(selectedStorage);
};
