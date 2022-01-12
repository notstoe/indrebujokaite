import { gql, useQuery } from '@apollo/client';

import { s } from './PaintingDisplay.styles';
import { ss } from 'Components/Elements/Loading/loading.styles';

import { DataFeaturedPaintings } from './PaintingDisplay.types';
import SingleDisplay from 'Components/Elements/SingleDisplay/SingleDisplay';

export default function PaintingDisplay() {
	const FEATURED_PAINTINGS_QUERY = gql`
		query FEATURED_PAINTINGS {
			featuredPainting {
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

	const { data, loading, error } = useQuery<DataFeaturedPaintings>(
		FEATURED_PAINTINGS_QUERY
	);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const featuredPaintingsDivs = data?.featuredPainting.paintings.map(
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

	return <s.DisplaysWrapper>{featuredPaintingsDivs}</s.DisplaysWrapper>;
}
