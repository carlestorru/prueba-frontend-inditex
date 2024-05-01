import { createContext, useState, useContext, useEffect } from 'react';
import useFetchPodcasts from '../hooks/useFetchPodcasts';

const PodcastsContext = createContext();

export function PodcastsProvider({ children }) {
	const [podcasts, setPodcasts] = useState([]);
	const [data, isFetching] = useFetchPodcasts();

	useEffect(() => {
		if (!isFetching) setPodcasts(data);
		console.log(data);
	}, [isFetching]);

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
			value={[podcasts, isFetching, searchFilterPodcasts]}>
			{children}
		</PodcastsContext.Provider>
	);
}

export function usePodcasts() {
	const context = useContext(PodcastsContext);
	return context;
}
