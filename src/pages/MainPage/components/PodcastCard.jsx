import Card from '../../../components/Card';

export default function PodcastCard({ data }) {
	return (
		<div className='m-auto flex flex-col items-center text-center transition duration-300 hover:scale-110'>
			<img
				className='z-10 -mb-8 h-20 w-20 rounded-full'
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
