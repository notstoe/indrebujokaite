import { MotionValue, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { s } from './RollingTitle.styles';

import { RollingTitleProps } from './RollingTitle.types';

export default function RollingTitle({ title, altMode }: RollingTitleProps) {
	const { scrollY } = useViewportScroll();
	const wrapperRef = useRef<HTMLDivElement>(null);

	const [scrollStart, setScrollStart] = useState<number>(0);
	const [scrollEnd, setScrollEnd] = useState<number>(0);

	useEffect(() => {
		if (wrapperRef?.current) {
			const { y: elementY, height: elementHeight } =
				wrapperRef.current.getBoundingClientRect();

			setScrollStart(Math.max(elementY - window.innerHeight, 0));
			setScrollEnd(elementY + elementHeight + window.innerHeight);
		}
	}, [wrapperRef]);

	const ballScale = useTransform(
		scrollY,
		[scrollStart, scrollEnd],
		['.8', '1']
	);

	const verticalSlide = (isInverse?: boolean): MotionValue => {
		if (isInverse) {
			return useTransform(scrollY, [scrollStart, scrollEnd], ['-100%', '0%']);
		}

		return useTransform(scrollY, [scrollStart, scrollEnd], ['100%', '0%']);
	};

	const horizontalSlide = (isInverse?: boolean): MotionValue => {
		if (isInverse) {
			return useTransform(scrollY, [scrollStart, scrollEnd], ['0', '25%']);
		}

		return useTransform(scrollY, [scrollStart, scrollEnd], ['0', '-25%']);
	};

	return (
		<s.Wrapper
			ref={wrapperRef}
			altMode={altMode}
			onClick={() => console.log({ scrollStart, scrollEnd })}
		>
			<s.Text style={{ x: horizontalSlide(altMode) }}>
				<span>{title}</span>
			</s.Text>
			<s.Text style={{ x: horizontalSlide(!altMode) }}>
				<span>{title}</span>
			</s.Text>
			<s.Text style={{ x: horizontalSlide(altMode) }}>
				<span>{title}</span>
			</s.Text>

			<s.BackgroundCircle
				style={{ scale: ballScale, y: verticalSlide(altMode) }}
			/>
		</s.Wrapper>
	);
}
