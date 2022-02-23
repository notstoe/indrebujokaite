import { useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { s } from './RollingTitle.styles';

interface RollingTitleProps {
	title: string;
	altMode: boolean;
}

export default function RollingTitle({ title, altMode }: RollingTitleProps) {
	const { scrollY } = useViewportScroll();
	const wrapperRef = useRef<HTMLDivElement>(null);

	const [scrollStart, setScrollStart] = useState<number>(0);
	const [scrollEnd, setScrollEnd] = useState<number>(0);

	const [opacityStart, setOpacityStart] = useState<number>(0);
	const [opacityIn, setOpacityIn] = useState<number>(0);
	const [opacityOut, setOpacityOut] = useState<number>(0);
	const [opacityEnd, setOpacityEnd] = useState<number>(0);

	useEffect(() => {
		if (wrapperRef?.current) {
			const {
				top,
				height: elementHeight,
			} = wrapperRef.current.getBoundingClientRect();

			const elementY = top + window.scrollY;
			const calculatedScrollStart = elementY - window.innerHeight;
			const calculatedScrollEnd = elementY + elementHeight;

			setScrollStart(calculatedScrollStart);
			setScrollEnd(calculatedScrollEnd);

			setOpacityStart(calculatedScrollStart + elementHeight * 0.25);
			setOpacityIn(calculatedScrollStart + elementHeight);
			setOpacityOut(calculatedScrollEnd - elementHeight * 0.5);
			setOpacityEnd(calculatedScrollEnd - elementHeight * 0.15);
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

	const verticalSlideOutputRange = (slideDown?: boolean): Array<string> => {
		if (slideDown) {
			return ['-100%', '0%'];
		} else {
			return ['100%', '0%'];
		}
	};

	const verticalSlide = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		verticalSlideOutputRange(altMode)
	);

	const horizontalSlideOutputRange = (alignLeft?: boolean): Array<string> => {
		if (alignLeft) {
			return ['0%', '50%'];
		} else {
			return ['0%', '-50%'];
		}
	};

	const horizontalSlideEdge = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		horizontalSlideOutputRange(altMode)
	);

	const horizontalSlideMiddle = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		horizontalSlideOutputRange(!altMode)
	);

	return (
		<s.Wrapper ref={wrapperRef} altMode={altMode}>
			<s.Title style={{ x: horizontalSlideEdge, opacity: textOpacity }}>
				{title}
			</s.Title>
			<s.Title style={{ x: horizontalSlideMiddle }}>{title}</s.Title>
			<s.Title style={{ x: horizontalSlideEdge, opacity: textOpacity }}>
				{title}
			</s.Title>

			<s.BackgroundCircle style={{ scale: ballScale, y: verticalSlide }} />
		</s.Wrapper>
	);
}
