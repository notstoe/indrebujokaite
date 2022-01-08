import { gql, useQuery } from '@apollo/client';

import RollingTitle from '../RollingTitle';

import { s } from './About.styles';
import { DataA } from './About.types';

export default function About() {
	const ABOUT_ME_QUERY = gql`
		query ABOUT_ME_TXT {
			about {
				about_me_txt
				my_vision_txt
				ProfilePic {
					url
				}
			}
		}
	`;

	const { data, loading, error } = useQuery<DataA>(ABOUT_ME_QUERY);

	if (loading)
		return (
			<div style={{ textAlign: 'center', fontSize: '2rem', padding: '5rem' }}>
				Loading...
			</div>
		);
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	return (
		<s.SectionWrapper>
			<RollingTitle title='ABOUT ME' altMode={false} />
			<div className='description'>
				<span>{data?.about.about_me_txt}</span>
			</div>
			<s.StyledImage src={data?.about.ProfilePic.url} alt="Artist's Profile" />
			<RollingTitle title='MY VISION' altMode={true} />
			<div className='description'>
				<span>{data?.about.my_vision_txt}</span>
			</div>
		</s.SectionWrapper>
	);
}
