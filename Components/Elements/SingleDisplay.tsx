import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { useInView } from '@hooks/useInView';
import { Painting } from 'Components/PaintingDisplay/PaintingDisplay.types';
import { motion, Variants } from 'framer-motion';

import { s } from './SingleDisplay.styles';

export default function SingleDisplay({
	painting,
	inverted,
}: {
	painting: Painting;
	inverted: boolean;
}) {
	const [elementRef, inView] = useInView<HTMLTableSectionElement>(
		{
			threshold: 0.35,
		},
		true
	);

	const collectionType = painting.collection_type.split('_').join(' ');

	const optimizedUrl = getOptimizedCloudinaryUrl(
		painting.picture[0].url,
		'large'
	);

	const circleVariants: Variants = {
		hidden: { scale: 0, y: -15 },
		visible: { scale: 1, y: 0 },
	};

	const txtVariants = (inverted?: boolean): Variants => {
		if (inverted) {
			return {
				firstSpan: { x: '25vw', opacity: 0 },
				secSpan: { x: '18vw', opacity: 0 },
				lastSpan: { x: '10vw', opacity: 0 },
				visible: { x: 0, opacity: 1 },
			};
		} else {
			return {
				firstSpan: { x: '-10vw', opacity: 0 },
				secSpan: { x: '-18vw', opacity: 0 },
				lastSpan: { x: '-25vw', opacity: 0 },
				visible: { x: 0, opacity: 1 },
			};
		}
	};

	const imageVariants: Variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<s.SingleDisplay ref={elementRef} inverted={inverted}>
			<div>
				<s.BackgroundCircle
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					transition={{ duration: 0.5, delay: 0.8 }}
					variants={circleVariants}
				/>
				<motion.span
					initial='hidden'
					animate={inView ? 'visible' : 'firstSpan'}
					transition={{ duration: inverted ? 0.7 : 0.3, delay: 0.5 }}
					variants={txtVariants(inverted)}
				>
					{collectionType}
				</motion.span>
				<s.Title
					initial='hidden'
					animate={inView ? 'visible' : 'secSpan'}
					transition={{ duration: 0.5, delay: 0.5 }}
					variants={txtVariants(inverted)}
				>
					{painting.title}
				</s.Title>
				<motion.span
					initial='hidden'
					animate={inView ? 'visible' : 'lastSpan'}
					transition={{ duration: inverted ? 0.3 : 0.7, delay: 0.5 }}
					variants={txtVariants(inverted)}
					className='author'
				>
					Indrė Bujokaitė
				</motion.span>
			</div>
			<s.StyledImage
				src={optimizedUrl}
				alt={`${painting.title} painting`}
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}
				transition={{ duration: 0.6 }}
				variants={imageVariants}
			/>
		</s.SingleDisplay>
	);
}
