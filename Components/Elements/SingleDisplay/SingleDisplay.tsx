import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { useInView } from '@hooks/useInView';
import { Painting } from 'Components/Projects/Projects.types';
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

	const paintingCollection = painting.painting_collection.collectionTitle;
	const optimizedUrl = getOptimizedCloudinaryUrl(
		painting.picture[0].url,
		'large'
	);

	const circleVariants: Variants = {
		hidden: { scale: 0, y: -15, opacity: 0 },
		visible: { scale: 1, y: 0, opacity: 1 },
	};

	const txtVariants = (inverted?: boolean): Variants => {
		if (inverted) {
			return {
				hidden: { x: 80, opacity: 0 },
				visible: { x: 0, opacity: 1 },
			};
		} else {
			return {
				hidden: { x: -80, opacity: 0 },
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
					transition={{ duration: 1, delay: 0.6 }}
					variants={circleVariants}
				/>
				<motion.span
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					transition={{ duration: 1.5, delay: inverted ? 0.2 : 0.6 }}
					variants={txtVariants(inverted)}
				>
					{paintingCollection}
				</motion.span>
				<s.Title
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					transition={{ duration: 1.5, delay: 0.4 }}
					variants={txtVariants(inverted)}
				>
					{painting.title}
				</s.Title>
				<motion.span
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					transition={{ duration: 1.5, delay: inverted ? 0.6 : 0.2 }}
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
