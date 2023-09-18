import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/Todo';
import { AppState } from '../../types/AppState';

const todoSlice = createSlice({
	name: 'todos',
	initialState: [] as AppState['todos'],
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.push(action.payload);
		},
		removeTodo: (state, action: PayloadAction<number>) => {
			return state.filter((t) => t.id !== action.payload);
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
