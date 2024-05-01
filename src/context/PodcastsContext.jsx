import { createContext, useState, useContext, useEffect } from 'react';
import useFetchPodcasts from '../hooks/useFetchPodcasts';

const PodcastsContext = createContext();

export function PodcastsProvider({ children }) {
	const [podcasts, setPodcasts] = useState([]);
	const { isLoading, error, data } = useFetchPodcasts();

	if (error) {
		console.error(error.message);
	}

	useEffect(() => {
		if (!isLoading) setPodcasts(data);
	}, [isLoading]);

	const searchFilterPodcasts = (text) => {
		const textToLowerCase = text.toLowerCase();
		const filteredPodcasts = data.filter(
			(el) =>
				el['im:name'].label.toLowerCase().includes(textToLowerCase) ||
				el['im:artist'].label.toLowerCase().includes(textToLowerCase),
		);
		setPodcasts(filteredPodcasts);
	};

	return (
		<PodcastsContext.Provider
			value={[podcasts, isLoading, searchFilterPodcasts]}>
			{children}
		</PodcastsContext.Provider>
	);
}

export function usePodcasts() {
	const context = useContext(PodcastsContext);
	return context;
}
