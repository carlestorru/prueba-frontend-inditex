import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Si estás usando React Router
import App from '../App';
import MainPage from '../pages/MainPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { act } from 'react';

const queryClient = new QueryClient();

test('renders app with header component', async () => {
	let container;

	await act(async () => {
		const { container: renderedContainer } = render(
			<QueryClientProvider client={queryClient}>
				<MemoryRouter initialEntries={['/']}>
					<App />
				</MemoryRouter>
			</QueryClientProvider>,
		);

		container = renderedContainer;
	});

	const headerElement = container.querySelector('header');
	expect(headerElement).toBeInTheDocument();

	const linkElement = screen.getByRole('link', { name: 'Podcaster' });
	expect(linkElement).toBeInTheDocument();
});
