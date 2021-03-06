import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { useState } from 'react';

import { Painting } from 'types/index.types';

import { s } from './PaintingInsideCarousel.styles';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const hoverInfoVariants: Variants = {
	hidden: { y: -15, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export default function PaintingInsideCarousel({
	collectionTitle,
	painting,
}: {
	collectionTitle?: string;
	painting: Painting;
}) {
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const optimizedUrl = getOptimizedCloudinaryUrl(
		painting.picture[0].url,
		'medium'
	);

	return (
		<Link passHref href={`/painting/${painting.id}`}>
			<s.Painting
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<s.StyledImage src={optimizedUrl} alt={`${painting.title} painting`} />
				{isHovered && (
					<s.PaintingHoverInfo
						initial='hidden'
						animate={isHovered ? 'visible' : 'hidden'}
					>
						<motion.span
							variants={hoverInfoVariants}
							transition={{ type: 'tween', duration: 0.8, delay: 0.4 }}
							className='collection'
						>
							{collectionTitle}
						</motion.span>
						<motion.span
							transition={{ duration: 0.8, delay: 0.2 }}
							variants={hoverInfoVariants}
							className='title'
						>
							{painting.title}
						</motion.span>
						<motion.span
							transition={{ duration: 0.8 }}
							variants={hoverInfoVariants}
							className='author'
						>
							Indrė Bujokaitė
						</motion.span>
					</s.PaintingHoverInfo>
				)}
			</s.Painting>
		</Link>
	);
}
