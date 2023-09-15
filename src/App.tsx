import logo from './logo.svg';
import './App.css';
import { useTodos } from './hooks/useTodos';

function App() {
	// this component should only care about todos
	const { todos, handleAddTodo, handleRemoveTodo } = useTodos();

	return (
		<div className='App' data-testid='app-root'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<button
					onClick={() =>
						handleAddTodo({ id: 1, text: 'do tailwind', completed: true })
					}>
					Add Todo
				</button>
				<button onClick={() => handleRemoveTodo(1)}>Remove Todo</button>

				<pre> {JSON.stringify(todos, null, 2)}</pre>
			</header>
		</div>
	);
}

export default App;

// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, removeTodo } from './store/slices/todoSlice';
// import { AppState } from './types/AppState';

// // this component uses redux hooks directly
// function App() {
// 	const dispatch = useDispatch();
// 	const todos = useSelector((state: AppState) => state.todos);

// 	const handleAddTodo = () => {
// 		const todo = { id: 1, text: 'do tailwind', completed: true };
// 		dispatch(addTodo(todo));
// 	};

// 	const handleRemoveTodo = () => {
// 		dispatch(removeTodo(1));
// 	};

// 	return (
// 		<div className='App' data-testid='app-root'>
// 			<button onClick={handleAddTodo}>Add Todo</button>
// 			<button onClick={handleRemoveTodo}>Remove Todo</button>
// 			<pre>{JSON.stringify(todos, null, 2)}</pre>
// 		</div>
// 	);
// }

// export default App;
