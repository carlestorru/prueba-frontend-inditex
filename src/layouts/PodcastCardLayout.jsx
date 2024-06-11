import { Outlet, Link, useLocation } from 'react-router-dom';
import Card from '../components/Card';

export default function PodcastCardLayout() {
	const { state: data } = useLocation();
	return (
		<main className='flex flex-row justify-evenly gap-2 p-4 max-sm:flex-col'>
			<section>
				<Card>
					<div className='flex w-[300px] flex-col gap-2 p-2'>
						<div className='border-b-[1px] border-gray-400'>
							<Link
								to={`/podcast/${data.id.attributes['im:id']}`}
								state={{ ...data }}>
								<img
									className='w-full p-1'
									src={data['im:image'][2].label}
									alt={data.id.attributes['im:id']}
								/>
							</Link>
						</div>
						<div className='border-b-[1px] border-gray-400 p-2'>
							<Link
								to={`/podcast/${data.id.attributes['im:id']}`}
								state={{ ...data }}>
								<h3 className='text-xl font-bold'>{data['im:name'].label}</h3>
								<h4 className='font-normal italic'>
									by {data['im:artist'].label}
								</h4>
							</Link>
						</div>
						<div>
							<h5 className='text-wrap font-bold'>Description:</h5>
							<p>{data.summary.label}</p>
						</div>
					</div>
				</Card>
			</section>

			<Outlet />
		</main>
	);
}
