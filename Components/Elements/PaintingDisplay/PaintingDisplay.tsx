import { gql, useQuery } from '@apollo/client';

import { s } from './PaintingDisplay.styles';
import { ss } from 'Components/Elements/Loading/loading.styles';

import { DataDisplay } from './PaintingDisplay.types';
import SingleDisplay from 'Components/Elements/SingleDisplay/SingleDisplay';

export default function PaintingDisplay() {
	const DISPLAY_PAINTINGS_QUERY = gql`
		query DISPLAY_PAINTINGS {
			displayPaintings {
				paintings {
					id
					title
					painting_collection {
						collectionTitle
					}
					picture {
						url
					}
				}
			}
		}
	`;

	const { data, loading, error } = useQuery<DataDisplay>(
		DISPLAY_PAINTINGS_QUERY
	);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const displayPaintingsDivs = data?.displayPaintings[0].paintings.map(
		(painting, index) => {
			return (
				<SingleDisplay
					key={painting.id}
					painting={painting}
					inverted={index % 2 !== 0}
				/>
			);
		}
	);

	return <s.DisplaysWrapper>{displayPaintingsDivs}</s.DisplaysWrapper>;
}
