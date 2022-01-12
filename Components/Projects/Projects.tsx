// TODO - request from client, more collection types option
// TODO - individual pages for each painting

/* eslint-disable react-hooks/rules-of-hooks */
import { gql, useQuery } from '@apollo/client';
import { useInView } from '@hooks/useInView';
import { ss } from 'Components/Elements/Loading/loading.styles';
import {
	motion,
	MotionValue,
	useTransform,
	useViewportScroll,
	Variants,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Carousel from '../Elements/Carousel/Carousel';
import PaintingDisplay from '../Elements/PaintingDisplay/PaintingDisplay';

import { s } from './Projects.styles';
import { DataCollections } from './Projects.types';

export default function Projects() {
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

	const horizontalSlide = (): MotionValue =>
		useTransform(scrollY, [scrollStart, scrollEnd], ['0%', '90%']);

	const ballScale = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		['1.2', '0.7']
	);

	const sectionTitleVariants: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: { opacity: 1 },
	};

	const COLLECTIONS_PAINTINGS_QUERY = gql`
		query COLLECTIONS_PAINTINGS {
			collectionsPaintings(sort: "createdAt:asc") {
				collectionTitle
				paintings(sort: "createdAt:desc") {
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

	const { data, loading, error } = useQuery<DataCollections>(
		COLLECTIONS_PAINTINGS_QUERY
	);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	console.log(data);

	const CarouselElements = data?.collectionsPaintings.map(
		(collection, index) => {
			return (
				<Carousel
					key={index}
					paintings={collection.paintings}
					collectionTitle={collection.collectionTitle}
				/>
			);
		}
	);

	return (
		<s.SectionWrapper id='projects'>
			<div className='sectionTitle' ref={wrapperRef}>
				<motion.h1
					ref={elementRef}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={sectionTitleVariants}
					transition={{ duration: 0.4 }}
				>
					PROJECTS
				</motion.h1>
				<s.BackgroundCircle
					style={{ scale: ballScale, x: horizontalSlide() }}
				/>
			</div>
			<PaintingDisplay />
			{CarouselElements}
		</s.SectionWrapper>
	);
}
