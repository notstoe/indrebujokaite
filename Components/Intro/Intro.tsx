import { motion } from 'framer-motion';
import { s } from './Intro.styles';

const titleVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { delay: 0.5, duration: 1.2 },
	},
};

const subtitleVariants = {
	hidden: { x: '+10vw', opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 1.8, delay: 1 },
	},
};

export default function Intro() {
	return (
		<s.Wrapper>
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
				Oil Painting
			</motion.span>
			<s.StyledImage
				src='https://res.cloudinary.com/dowa8tjdi/image/upload/v1641758923/indrebujokaite/medium_test2darker_170f3b96b5.jpg'
				alt='the back of a canvas board'
			/>
		</s.Wrapper>
	);
}
