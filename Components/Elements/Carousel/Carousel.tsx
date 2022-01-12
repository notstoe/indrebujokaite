import useEmblaCarousel from 'embla-carousel-react';
import { s } from './Carousel.styles';

import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { Painting } from 'Components/Projects/Projects.types';
import { useInView } from '@hooks/useInView';
import { motion, Variants } from 'framer-motion';

// TODO - add painting title, collection and author on individual hover
// TODO - add element on top of carousels indicating you can slide

export default function Carousel({
	collectionTitle,
	paintings,
}: {
	collectionTitle?: string;
	paintings?: Painting[];
}) {
	const [elementRef, inView] = useInView<HTMLDivElement>(
		{ threshold: 0.4 },
		true
	);

	const [emblaRef] = useEmblaCarousel({
		dragFree: true,
		// containScroll: 'trimSnaps',
		align: 'center',
		startIndex: '1',
	});

	const carouselVariants: Variants = {
		title: { opacity: 0, y: -15 },
		singleCarousel: { opacity: 0, x: 40 },
		visible: { opacity: 1, x: 0, y: 0 },
	};

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
		<s.SingleCarouselWrapper ref={elementRef}>
			<motion.h1
				initial='hidden'
				animate={inView ? 'hidden' : 'title'}
				variants={carouselVariants}
				transition={{ duration: 1, delay: 0.2 }}
			>
				{collectionTitle}
			</motion.h1>
			<s.CarouselWrapper
				initial='hidden'
				animate={inView ? 'hidden' : 'singleCarousel'}
				variants={carouselVariants}
				transition={{ duration: 1.2 }}
				ref={emblaRef}
			>
				<div>{paintingsDivs}</div>
			</s.CarouselWrapper>
		</s.SingleCarouselWrapper>
	);
}
