import Card from '../../../components/Card';

export default function PodcastCard({ data }) {
	return (
		<div className='flex flex-col items-center text-center m-auto'>
			<img
				className='rounded-full -mb-8 z-10 h-20 w-20'
				src={data['im:image'][0].label}
				alt={data['im:name'].label}
			/>
			<div className='w-[250px]'>
				<Card>
					<h3 className='pt-10 font-bold uppercase'>{data['im:name'].label}</h3>
					<h4 className='text-base text-gray-500'>{`Author: ${data['im:artist'].label}`}</h4>
				</Card>
			</div>
		</div>
	);
}
