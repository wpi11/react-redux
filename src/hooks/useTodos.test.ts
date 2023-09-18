/**
 * @module useTodos.test
 * @description This module contains tests for the useTodos custom hook.
 */

import { renderHook } from '@testing-library/react';
import { useTodos } from './useTodos';
import { createReduxStoreWrapper } from '../setupTests';

/**
 * Test suite for the useTodos hook.
 */
describe('useTodos hook', () => {
	/**
	 * Test case for the useTodos hook when it should return no todos.
	 */
	it('should return no todos', () => {
		const wrapper = createReduxStoreWrapper();

		const { result } = renderHook(() => useTodos(), { wrapper });

		const { todos } = result.current;

		expect(todos).toEqual([]);
	});

	/**
	 * Test case for the useTodos hook when it should return 3 todos.
	 */
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
