import { useRoutes } from 'react-router-dom';

import { lazy } from 'react';

import Loadable from '../components/Loader/Loadable';
import MainLayout from '../layouts/MainLayout';
import PodcastCardLayout from '../layouts/PodcastCardLayout';

const MainPage = Loadable(lazy(() => import('../pages/MainPage')));
const PodcastDetail = Loadable(lazy(() => import('../pages/PodcastDetails')));
const EpisodeDetail = Loadable(lazy(() => import('../pages/EpisodeDetails')));

const ListOfRoutes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <MainPage />
			},
            {
				path: 'podcast/:podcastId',
				element: <PodcastCardLayout />,
				children: [
					{
						path: '',
						element: <PodcastDetail />
					},
					{
						path: 'episode/:episodeId',
						element: <EpisodeDetail />
					}
				]
			},
		],
	},
	{
		path: '*',
		element: <h1>404 NOT FOUND</h1>,
	},
];

export default function Routes() {
	return useRoutes(ListOfRoutes);
}
