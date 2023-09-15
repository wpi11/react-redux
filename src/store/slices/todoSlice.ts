import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/Todo';
import { AppState } from '../../types/AppState';

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	} as AppState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		removeTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter((t) => t.id !== action.payload);
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
