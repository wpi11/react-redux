import todoReducer, { addTodo, removeTodo } from './todoSlice';

describe('todoSlice Function', () => {
	it('should have initial state', () => {
		const result = todoReducer(undefined, { type: '' });

		const expected: any[] = [];

		expect(result).toEqual(expected);
	});

	it('should add todos', () => {
		const mockTodos = { id: 1, text: 'One', completed: true };

		const result = todoReducer([], addTodo(mockTodos));

		const expected = { id: 1, text: 'One', completed: true };

		expect(result[0]).toEqual(expected);
	});

	it('should remove todo', () => {
		const mockTodos = [{ id: 1, text: 'One', completed: true }];

		const result = todoReducer(mockTodos, removeTodo(1));

		const expected = undefined;

		expect(result[0]).toEqual(expected);
	});
});
