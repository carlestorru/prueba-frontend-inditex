import { Outlet, useLocation } from 'react-router-dom';
import Card from '../components/Card';

export default function PodcastCardLayout() {
	const { state: data } = useLocation();
	return (
		<main className='flex flex-row max-sm:flex-col justify-evenly p-4 gap-2'>
			<section>
				<Card>
					<div className='flex flex-col gap-2 p-2 w-[300px]'>
						<div className='border-b-[1px] border-gray-400'>
							<img
								className='w-full p-1'
								src={data['im:image'][2].label}
								alt={data.id.attributes['im:id']}
							/>
						</div>
						<div className='border-b-[1px] border-gray-400 p-2'>
							<h3 className='font-bold text-xl'>{data['im:name'].label}</h3>
							<h4 className='font-normal italic'>
								by {data['im:artist'].label}
							</h4>
						</div>
						<div>
							<h5 className='font-bold text-wrap'>Description:</h5>
							<p>{data.summary.label}</p>
						</div>
					</div>
				</Card>
			</section>

			<Outlet />
		</main>
	);
}
