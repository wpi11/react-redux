import { render, screen } from '@testing-library/react';
import App from './App';
import { createReduxStoreWrapper } from './setupTests';

describe('App component', () => {
	it('should render app root component', () => {
		const wrapper = createReduxStoreWrapper();
		render(<App />, { wrapper });

		const appRoot = screen.getByTestId(/app-root/i);
		expect(appRoot).toBeInTheDocument();
	});

	it('should render react-query devtools', () => {
		const wrapper = createReduxStoreWrapper();
		render(<App />, { wrapper });

		const devTools = screen.getByTestId(/react-query-devtools/i);
		expect(devTools).toBeInTheDocument();
	});
});
