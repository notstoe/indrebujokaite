import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';

import { motion, Variants } from 'framer-motion';

import { s } from './Intro.styles';

const titleVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delay: 0.5, duration: 1.5 },
	},
};

const subtitleVariants: Variants = {
	hidden: { x: 30, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 1.5, delay: 1 },
	},
};

interface IntroProps {
	backgroundImgUrl: string;
}

export default function Intro({ backgroundImgUrl }: IntroProps) {
	const optimizedUrl = getOptimizedCloudinaryUrl(backgroundImgUrl, 'large');

	return (
		<s.Wrapper id='home'>
			<motion.span
				variants={titleVariants}
				initial='hidden'
				animate='visible'
				className='title'
			>
				Indrė Bujokaitė
			</motion.span>
			<motion.span
				variants={subtitleVariants}
				initial='hidden'
				animate='visible'
				className='subtitle'
			>
				Acrylic Painting
			</motion.span>
			<s.StyledImage src={optimizedUrl} alt='the back of a canvas board' />
		</s.Wrapper>
	);
}
