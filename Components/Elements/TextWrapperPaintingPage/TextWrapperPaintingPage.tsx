import { useInView } from '@hooks/useInView';
import { Variants } from 'framer-motion';
import { s } from './TextWrapperPaintingPage.styles';
import { s as ss } from 'Components/SinglePainting/SinglePainting.styles';

interface TextWrapperPaintingPageProps {
	children: any;
	title: string;
	fromLeft: boolean;
	circleOptions: {
		positioning: {
			top: string;
			left: string;
			topMobile: string;
			leftMobile: string;
		};
		radius: { normal: string; mobile: string };
	};
}

const circleVariants: Variants = {
	hidden: { scale: 0, y: -15, opacity: 0 },
	visible: { scale: 1, y: 0, opacity: 1 },
};

const textTransition = { type: 'tween', duration: 1 };
const circleTransition = { duration: 1.5, delay: 0.6 };

export default function TextWrapperPaintingPage({
	children,
	title,
	fromLeft,
	circleOptions,
}: TextWrapperPaintingPageProps) {
	const [elementRef, inView] = useInView<HTMLDivElement>({ threshold: 0.45 });

	const txtWrapperVariants: Variants = {
		hidden: { opacity: 0, x: fromLeft ? -80 : 80 },
		visible: { opacity: 1, x: 0 },
	};

	const { radius, positioning } = circleOptions;

	return (
		<s.TextWrapper
			ref={elementRef}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			variants={txtWrapperVariants}
			transition={textTransition}
			alignRight={!fromLeft}
		>
			<h2>
				{title}
				<ss.BackgroundCircle
					variants={circleVariants}
					transition={circleTransition}
					radius={radius}
					positioning={positioning}
				/>
			</h2>
			{children}
		</s.TextWrapper>
	);
}
