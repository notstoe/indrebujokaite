import { gql, useQuery } from '@apollo/client';
import { ss } from 'Components/Loading/loading.styles';
import { s } from './Contact.styles';
import { DataC } from './Contact.types';

export default function Contact() {
	const CONTACT_INFO_QUERY = gql`
		query CONTACT_INFO {
			contact {
				name
				email
				phone
				location_based
				shipping_info
				instagram
				facebook
			}
		}
	`;

	const { data, loading, error } = useQuery<DataC>(CONTACT_INFO_QUERY);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	return (
		<s.Wrapper>
			<s.ContactInfo>
				<span className='author'>{data?.contact.name}</span>
				<span>
					Email: <br />
					{data?.contact.email}
				</span>
				<span>
					Phone:
					<br /> {data?.contact.phone}
				</span>
				<span>{data?.contact.location_based}</span>
				<s.ExternalLinks>
					<a href={data?.contact.instagram}>Ig</a>
					<a href={data?.contact.facebook}>Fb</a>
				</s.ExternalLinks>
			</s.ContactInfo>
			<h1>GET IN TOUCH</h1>
		</s.Wrapper>
	);
}
