import { gql, useQuery } from '@apollo/client';

import { s } from './PaintingDisplay.styles';
import { ss } from 'Components/Loading/loading.styles';

import { DataD } from './PaintingDisplay.types';

export default function PaintingDisplay() {
	const DISPLAY_PAINTINGS_QUERY = gql`
		query DISPLAY_PAINTINGS {
			displayPaintings {
				paintings {
					id
					title
					collection_type
					picture {
						url
					}
				}
			}
		}
	`;

	const { data, loading, error } = useQuery<DataD>(DISPLAY_PAINTINGS_QUERY);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const displayPaintingsDivs = data?.displayPaintings[0].paintings.map(
		(painting, index) => {
			const collectionType = painting.collection_type.split('_').join(' ');

			return (
				<s.SingleDisplayWrapper key={painting.id} inverted={index % 2 !== 0}>
					<div>
						<span>{collectionType}</span>
						<s.Title>{painting.title}</s.Title>
						<span className='author'>Indrė Bujokaitė</span>
					</div>
					<s.StyledImage
						src={painting.picture[0].url}
						alt={`${painting.title} painting`}
					/>
				</s.SingleDisplayWrapper>
			);
		}
	);

	return <s.DisplaysWrapper>{displayPaintingsDivs}</s.DisplaysWrapper>;
}
