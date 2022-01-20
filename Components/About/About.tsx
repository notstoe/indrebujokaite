import RollingTitle from '../Elements/RollingTitle/RollingTitle';

import { s } from './About.styles';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { motion, Variants } from 'framer-motion';
import { useInView } from '@hooks/useInView';
import { AboutMeInfo } from 'pages/index.types';

const sectionVariants: Variants = {
	hiddenLeft: { opacity: 0, x: -80 },
	hiddenRight: { opacity: 0, x: 80 },
	visible: { opacity: 1, x: 0 },
};

const animationTransition = { type: 'tween', duration: 0.7 };

export default function About({ aboutData }: { aboutData: AboutMeInfo }) {
	const [elementRef, inView] = useInView<HTMLSpanElement>(
		{ threshold: 0.4 },
		true
	);

	const [elementRef2, inView2] = useInView<HTMLSpanElement>(
		{ threshold: 0.4 },
		true
	);

	const [elementRefImg, inViewImg] = useInView<HTMLImageElement>(
		{ threshold: 0.4 },
		true
	);

	const optimizedUrl = getOptimizedCloudinaryUrl(
		aboutData.ProfilePic.url,
		'medium'
	);

	return (
		<s.SectionWrapper id='about'>
			<RollingTitle title='ABOUT ME' altMode={false} />
			<s.TxtWrapper>
				<motion.span
					ref={elementRef}
					initial='hiddenRight'
					animate={inView ? 'visible' : 'hiddenRight'}
					variants={sectionVariants}
					transition={animationTransition}
				>
					{aboutData.about_me_txt}
				</motion.span>
			</s.TxtWrapper>
			<s.StyledImage
				src={optimizedUrl}
				alt="Indre's picture"
				ref={elementRefImg}
				initial='hiddenLeft'
				animate={inViewImg ? 'visible' : 'hiddenLeft'}
				variants={sectionVariants}
				transition={animationTransition}
			/>
			<RollingTitle title='MY VISION' altMode={true} />
			<s.TxtWrapper alignLeft>
				<motion.span
					ref={elementRef2}
					initial='hiddenLeft'
					animate={inView2 ? 'visible' : 'hiddenLeft'}
					variants={sectionVariants}
					transition={animationTransition}
				>
					{aboutData.my_vision_txt}
				</motion.span>
			</s.TxtWrapper>
		</s.SectionWrapper>
	);
}
