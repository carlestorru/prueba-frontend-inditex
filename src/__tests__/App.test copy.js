import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import App from '../App';

const queryClient = new QueryClient();

const Wrapper = ({ children }) => {
	return (
		<MemoryRouter initialEntries={['/']}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</MemoryRouter>
	);
};

describe('App', () => {
	it('renders properly', () => {
		render(<App />, { wrapper: Wrapper });
		const main = screen.getByRole('main');
		expect(main).toBeInTheDocument();
	});
});
