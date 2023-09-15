import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../store/slices'; // Import specific actions
import { AppState } from '../types/AppState';
import { Todo } from '../types/Todo';

export const useTodos = () => {
	const todos = useSelector((state: AppState) => state.todos);
	const dispatch = useDispatch();

	const handleAddTodo = (todo: Todo) => {
		dispatch(addTodo(todo)); // Dispatch the action directly with the todo object
	};

	const handleRemoveTodo = (id: number) => {
		dispatch(removeTodo(id)); // Dispatch the action with an object containing 'id'
	};

	return { todos, handleAddTodo, handleRemoveTodo };
};
