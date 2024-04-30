import Card from '../../components/Card';

export default function PodcastCard({ data }) {
	return (
		<div className='flex flex-col items-center text-center m-auto'>
			<img
				className='rounded-full -mb-8 z-10 h-20 w-20'
				src={data['im:image'][0].label}
				alt={data['im:name'].label}
			/>
			<Card>
				<div className='pt-10'>
					<h3 className='font-bold uppercase'>{data['im:name'].label}</h3>
					<h4 className='text-base text-gray-500'>{`Author: ${data['im:artist'].label}`}</h4>
				</div>
			</Card>
		</div>
	);
}
