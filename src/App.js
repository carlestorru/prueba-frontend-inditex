import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtoolsPanel } from 'react-query/devtools';

import Routes from './routes';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes />
			<ReactQueryDevtoolsPanel />
		</QueryClientProvider>
	);
}

export default App;
