import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useTodos } from './hooks/useTodos';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
	const client = new QueryClient();
	// this component should only care about todos
	const { todos, handleAddTodo, handleRemoveTodo } = useTodos();

	return (
		<QueryClientProvider client={client}>
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

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
