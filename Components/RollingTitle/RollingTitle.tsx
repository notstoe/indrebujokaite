/* eslint-disable react-hooks/rules-of-hooks */
import { MotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { s } from './RollingTitle.styles';

import { RollingTitleProps } from './RollingTitle.types';

export default function RollingTitle({ title, altMode }: RollingTitleProps) {
	const { scrollY } = useViewportScroll();
	const wrapperRef = useRef<HTMLDivElement>(null);

	const [scrollStart, setScrollStart] = useState<number>(0);
	const [scrollEnd, setScrollEnd] = useState<number>(0);

	const [opacityStart, setOpacityStart] = useState(0);
	const [opacityIn, setOpacityIn] = useState(0);
	const [opacityOut, setOpacityOut] = useState(0);
	const [opacityEnd, setOpacityEnd] = useState(0);

	useEffect(() => {
		if (wrapperRef?.current) {
			const {
				y: elementY,
				height: elementHeight,
			} = wrapperRef.current.getBoundingClientRect();

			const calculatedScrollStart = Math.max(elementY - window.innerHeight, 0);
			const calculatedScrollEnd = elementY + elementHeight;

			setScrollStart(calculatedScrollStart);
			setScrollEnd(calculatedScrollEnd);

			setOpacityStart(calculatedScrollStart + elementHeight / 4);
			setOpacityIn(calculatedScrollStart + elementHeight);
			setOpacityOut(calculatedScrollEnd - elementHeight / 2);
			setOpacityEnd(calculatedScrollEnd);
		}
	}, [wrapperRef]);

	const ballScale = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		['.5', '1']
	);

	const textOpacity = useTransform(
		scrollY,
		[opacityStart, opacityIn, opacityOut, opacityEnd],
		[0, 1, 1, 0]
	);

	const verticalSlide = (isInverse?: boolean): MotionValue => {
		if (isInverse) {
			return useTransform(scrollY, [scrollStart, scrollEnd], ['-100%', '0%']);
		}

		return useTransform(scrollY, [scrollStart, scrollEnd], ['100%', '0%']);
	};

	const horizontalSlide = (isInverse?: boolean): MotionValue => {
		if (isInverse) {
			return useTransform(scrollY, [scrollStart, scrollEnd], ['0', '50%']);
		}

		return useTransform(scrollY, [scrollStart, scrollEnd], ['0', '-50%']);
	};

	return (
		<s.Wrapper ref={wrapperRef} altMode={altMode}>
			<s.Text style={{ x: horizontalSlide(altMode), opacity: textOpacity }}>
				{title}
			</s.Text>
			<s.Text style={{ x: horizontalSlide(!altMode) }}>{title}</s.Text>
			<s.Text style={{ x: horizontalSlide(altMode), opacity: textOpacity }}>
				{title}
			</s.Text>

			<s.BackgroundCircle
				style={{ scale: ballScale, y: verticalSlide(altMode) }}
			/>
		</s.Wrapper>
	);
}
