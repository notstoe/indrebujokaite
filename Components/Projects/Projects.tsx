/* eslint-disable react-hooks/rules-of-hooks */
import { useInView } from '@hooks/useInView';
import {
	motion,
	MotionValue,
	useTransform,
	useViewportScroll,
	Variants,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import Carousel from '../Carousel/Carousel';
import PaintingDisplay from '../PaintingDisplay/PaintingDisplay';

import { s } from './Projects.styles';

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

	return (
		<s.SectionWrapper>
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
			<Carousel collection='Landscapes' />
			<Carousel collection='Contemporary_Fine_Art' />
			<Carousel collection='Modern_Blocks' />
		</s.SectionWrapper>
	);
}
