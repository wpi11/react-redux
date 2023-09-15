import { renderHook } from '@testing-library/react';
import { useTodos } from './useTodos';
import { createReduxStoreWrapper } from '../setupTests';

describe('useTodos hook', () => {
	it('should return no todos', () => {
		const wrapper = createReduxStoreWrapper();

		const { result } = renderHook(() => useTodos(), { wrapper });

		const { todos } = result.current;

		expect(todos).toEqual([]);
	});

	it('should return 3 todos', () => {
		const wrapper = createReduxStoreWrapper({
			todos: [
				{ id: 1, text: 'One', completed: false },
				{ id: 2, text: 'Two', completed: false },
				{ id: 3, text: 'Three', completed: false },
			],
		});

		const { result } = renderHook(() => useTodos(), { wrapper });

		const { todos } = result.current;

		expect(todos).toHaveLength(3);
	});
});
