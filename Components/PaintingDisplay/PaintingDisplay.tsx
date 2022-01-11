import { gql, useQuery } from '@apollo/client';

import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';

import { s } from './PaintingDisplay.styles';
import { ss } from 'Components/Loading/loading.styles';
import { motion, Variants } from 'framer-motion';

import { DataD } from './PaintingDisplay.types';

import { useInView } from '@hooks/useInView';

export default function PaintingDisplay() {
	const [elementRef, inView] = useInView<HTMLTableSectionElement>(
		{
			threshold: 0.2,
		},
		true
	);

	const DISPLAY_PAINTINGS_QUERY = gql`
		query DISPLAY_PAINTINGS {
			displayPaintings {
				paintings {
					id
					title
					collection_type
					picture {
						url
					}
				}
			}
		}
	`;

	const { data, loading, error } = useQuery<DataD>(DISPLAY_PAINTINGS_QUERY);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const DisplayVariants: Variants = {
		hidden: { opacity: 0, x: -10 },
		visible: { x: 0, opacity: 1 },
	};

	const circleVariants: Variants = {
		hidden: { scale: 0, y: -15 },
		visible: { scale: 1, y: 0 },
	};

	const txtVariants: Variants = {
		stopFirst: { x: '-10vw', opacity: 0 },
		stop2nd: { x: '-18vw', opacity: 0 },
		stopLast: { x: '-25vw', opacity: 0 },
		visible: { x: 0, opacity: 1 },
	};

	const displayPaintingsDivs = data?.displayPaintings[0].paintings.map(
		(painting, index) => {
			const collectionType = painting.collection_type.split('_').join(' ');

			const optimizedUrl = getOptimizedCloudinaryUrl(
				painting.picture[0].url,
				'large'
			);

			return (
				<s.SingleDisplayWrapper key={painting.id} inverted={index % 2 !== 0}>
					<div>
						<s.BackgroundCircle
							initial='hidden'
							animate={inView ? 'visible' : 'hidden'}
							transition={{ duration: 0.5, delay: 1.5 }}
							variants={circleVariants}
						/>
						<motion.span
							initial='hidden'
							animate={inView ? 'visible' : 'stopFirst'}
							transition={{ duration: 0.3, delay: 0.5 }}
							variants={txtVariants}
						>
							{collectionType}
						</motion.span>
						<s.Title
							initial='hidden'
							animate={inView ? 'visible' : 'stop2nd'}
							transition={{ duration: 0.5, delay: 0.5 }}
							variants={txtVariants}
						>
							{painting.title}
						</s.Title>
						<motion.span
							initial='hidden'
							animate={inView ? 'visible' : 'stopLast'}
							transition={{ duration: 0.7, delay: 0.5 }}
							variants={txtVariants}
							className='author'
						>
							Indrė Bujokaitė
						</motion.span>
					</div>
					<s.StyledImage
						src={optimizedUrl}
						alt={`${painting.title} painting`}
					/>
				</s.SingleDisplayWrapper>
			);
		}
	);

	return (
		<s.DisplaysWrapper
			ref={elementRef}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			variants={DisplayVariants}
			transition={{ duration: 0.5, delayChildren: 1 }}
		>
			{displayPaintingsDivs}
		</s.DisplaysWrapper>
	);
}
