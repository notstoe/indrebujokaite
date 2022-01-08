import { gql, useQuery } from '@apollo/client';

import useEmblaCarousel from 'embla-carousel-react';
import { s } from './Carousel.styles';
import { ss } from 'Components/Loading/loading.styles';

import { DataP } from './Carousel.types';

// TODO - add painting title, collection and author on individual hover
// TODO - add element on top of carousels indicating you can slide
// TODO - optimize image loading from different sizes on cloudinary uri

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
			<a href='' key={painting.id} className='embla__slide'>
				<s.StyledImage src={painting.picture[0].url} alt="Indreta's painting" />
			</a>
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
