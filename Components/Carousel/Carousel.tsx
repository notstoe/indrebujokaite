import { gql, useQuery } from '@apollo/client';

import useEmblaCarousel from 'embla-carousel-react';
import { s } from './Carousel.styles';
import { ss } from 'Components/Loading/loading.styles';

import { DataP } from './Carousel.types';

export default function Carousel({ collection }: { collection: string }) {
	const COLLECTION_PAINTINGS_QUERY = gql`
		query COLLECTION_PAINTINGS_FILTER($collection: String!) {
			paintings(
				where: { collection_type: $collection }
				sort: "createdAt:desc"
			) {
				id
				collection_type
				picture {
					url
				}
			}
		}
	`;

	const [emblaRef] = useEmblaCarousel({
		dragFree: true,
		align: 'start',
		containScroll: 'trimSnaps',
	});

	const { data, loading, error } = useQuery<DataP>(COLLECTION_PAINTINGS_QUERY, {
		variables: { collection },
	});

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const paintingsDivs = data?.paintings.map((painting) => {
		return (
			<div key={painting.id} className='embla__slide'>
				<s.StyledImage src={painting.picture[0].url} alt="Indreta's painting" />
			</div>
		);
	});

	return (
		<s.SingleCarouselWrapper>
			<h1>{collection.split('_').join(' ')}</h1>
			<s.CarouselWrapper ref={emblaRef}>
				<div>{paintingsDivs}</div>
			</s.CarouselWrapper>
		</s.SingleCarouselWrapper>
	);
}
