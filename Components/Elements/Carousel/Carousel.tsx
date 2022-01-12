import useEmblaCarousel from 'embla-carousel-react';
import { s } from './Carousel.styles';

import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { Painting } from 'Components/Projects/Projects.types';

// TODO - add painting title, collection and author on individual hover
// TODO - add element on top of carousels indicating you can slide

export default function Carousel({
	collectionTitle,
	paintings,
}: {
	collectionTitle?: string;
	paintings?: Painting[];
}) {
	const [emblaRef] = useEmblaCarousel({
		dragFree: true,
		align: 'start',
		containScroll: 'trimSnaps',
	});

	const paintingsDivs = paintings?.map((painting) => {
		const optimizedUrl = getOptimizedCloudinaryUrl(
			painting.picture[0].url,
			'medium'
		);

		return (
			<a href='' key={painting.id} className='embla__slide'>
				<s.StyledImage src={optimizedUrl} alt="Indre's painting" />
			</a>
		);
	});

	return (
		<s.SingleCarouselWrapper>
			<h1>{collectionTitle}</h1>
			<s.CarouselWrapper ref={emblaRef}>
				<div>{paintingsDivs}</div>
			</s.CarouselWrapper>
		</s.SingleCarouselWrapper>
	);
}
