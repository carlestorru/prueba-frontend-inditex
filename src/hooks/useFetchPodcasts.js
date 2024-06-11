// import { useEffect, useState } from 'react';
import fetchAllOrigins from '../services/fetchAllOrigins';
import { useQuery } from 'react-query';

const URL = `${process.env.REACT_APP_ITUNES_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;

export default function useFetchPodcasts() {
	return useQuery({
		queryKey: ['podcasts'],
		queryFn: async () => {
			const res = await fetchAllOrigins(URL);
			const parsedData = JSON.parse(res.contents);
			const podcasts = parsedData.feed.entry;
			return podcasts;
		},
		staleTime: 1000 * 60 * 60 * 24, // 24 hours in millis
		refetchInterval: 1000 * 60 * 60 * 24, // 24 hours in millis
	});
}
