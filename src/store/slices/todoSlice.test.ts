import todoReducer, { addTodo, removeTodo } from './todoSlice';

describe('todoSlice Function', () => {
	it('should have initial state', () => {
		const result = todoReducer(undefined, { type: '' });
		const expected = { todos: [] };

		expect(result).toEqual(expected);
	});

	it('should add todos', () => {
		const mockTodos = { id: 1, text: 'One', completed: true };

		const result = todoReducer({ todos: [] }, addTodo(mockTodos));

		const expected = { id: 1, text: 'One', completed: true };

		expect(result.todos[0]).toEqual(expected);
	});

	it('should remove todo', () => {
		const mockTodos = { id: 1, text: 'One', completed: true };

		const result = todoReducer({ todos: [mockTodos] }, removeTodo(1));

		const expected = undefined;

		expect(result.todos[0]).toEqual(expected);
	});
});
