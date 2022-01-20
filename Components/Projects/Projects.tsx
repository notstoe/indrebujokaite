import { useInView } from '@hooks/useInView';
import {
	motion,
	MotionValue,
	useTransform,
	useViewportScroll,
	Variants,
} from 'framer-motion';
import { s } from './Projects.styles';

import { useEffect, useRef, useState } from 'react';
import Carousel from '../Elements/Carousel/Carousel';
import PaintingDisplay from '../Elements/PaintingDisplay/PaintingDisplay';

import { CollectionsPaintings, Painting } from 'pages/index.types';

interface ProjectsProps {
	collectionsPaintings: CollectionsPaintings[];
	featuredPaintings: Painting[];
}

const sectionTitleVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 1.05,
	},
	visible: { opacity: 1, scale: 1 },
};

export default function Projects({
	collectionsPaintings,
	featuredPaintings,
}: ProjectsProps) {
	const { scrollY } = useViewportScroll();

	const wrapperRef = useRef<HTMLDivElement>(null);

	const [scrollStart, setScrollStart] = useState<number>(0);
	const [scrollEnd, setScrollEnd] = useState<number>(0);

	const [elementRef, inView] = useInView<HTMLHeadingElement>(
		{ threshold: 0.35 },
		true
	);

	useEffect(() => {
		if (wrapperRef?.current) {
			const {
				y: elementY,
				height: elementHeight,
			} = wrapperRef.current.getBoundingClientRect();

			const calculatedScrollStart = Math.max(elementY - window.innerHeight, 0);
			const calculatedScrollEnd = elementY + elementHeight + 400;

			setScrollStart(calculatedScrollStart);
			setScrollEnd(calculatedScrollEnd);
		}
	}, [wrapperRef]);

	const horizontalSlide: MotionValue = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		['0%', '90%']
	);

	const ballScale = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		['1.2', '0.7']
	);

	const CarouselElements = collectionsPaintings?.map((collection, index) => {
		return (
			<Carousel
				key={index}
				paintings={collection.paintings}
				collectionTitle={collection.collectionTitle}
			/>
		);
	});

	return (
		<s.SectionWrapper id='projects'>
			<div className='sectionTitle' ref={wrapperRef}>
				<motion.h1
					ref={elementRef}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={sectionTitleVariants}
					transition={{ duration: 0.8 }}
				>
					PORTFOLIO
				</motion.h1>
				<s.BackgroundCircle style={{ scale: ballScale, x: horizontalSlide }} />
			</div>
			<PaintingDisplay featuredPaintings={featuredPaintings} />
			{CarouselElements}
		</s.SectionWrapper>
	);
}
