import RollingTitle from '../Elements/RollingTitle/RollingTitle';

import { s } from './About.styles';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { motion, Variants } from 'framer-motion';
import { useInView } from '@hooks/useInView';
import { AboutMeInfo } from 'types/index.types';

const sectionVariants: Variants = {
	hiddenLeft: { opacity: 0, x: -80 },
	hiddenRight: { opacity: 0, x: 80 },
	visible: { opacity: 1, x: 0 },
};

const animationTransition = { type: 'tween', duration: 0.7 };

export default function About({ aboutData }: { aboutData: AboutMeInfo }) {
	const [elementRef, inView] = useInView<HTMLParagraphElement>(
		{ threshold: 0.4 },
		true
	);

	const [elementRef2, inView2] = useInView<HTMLParagraphElement>(
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

	// considering line breaks from string that comes back from backend
	const aboutMeTxtArrayWithLineBreaks: Array<string> = aboutData.about_me_txt.split(
		'\n'
	);

	const aboutMeTxtPTags = aboutMeTxtArrayWithLineBreaks.map((lineStr, index) =>
		index === 1 ? (
			<motion.p
				ref={elementRef}
				initial='hiddenRight'
				animate={inView ? 'visible' : 'hiddenRight'}
				variants={sectionVariants}
				transition={animationTransition}
				key={index}
			>
				{lineStr}
			</motion.p>
		) : (
			<motion.p
				initial='hiddenRight'
				animate={inView ? 'visible' : 'hiddenRight'}
				variants={sectionVariants}
				transition={animationTransition}
				key={index}
			>
				{lineStr}
			</motion.p>
		)
	);

	const myVisionTxtArrayWithLineBreaks: Array<string> = aboutData.my_vision_txt.split(
		'\n'
	);

	const myVisionTxtPTags = myVisionTxtArrayWithLineBreaks.map(
		(lineStr, index) =>
			index === 1 ? (
				<motion.p
					ref={elementRef2}
					initial='hiddenRight'
					animate={inView2 ? 'visible' : 'hiddenRight'}
					variants={sectionVariants}
					transition={animationTransition}
					key={index}
				>
					{lineStr}
				</motion.p>
			) : (
				<motion.p
					initial='hiddenRight'
					animate={inView2 ? 'visible' : 'hiddenRight'}
					variants={sectionVariants}
					transition={animationTransition}
					key={index}
				>
					{lineStr}
				</motion.p>
			)
	);

	return (
		<s.SectionWrapper id='about'>
			<RollingTitle title='ABOUT ME' altMode={false} />
			<s.TxtWrapper>{aboutMeTxtPTags}</s.TxtWrapper>
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
			<s.TxtWrapper alignLeft>{myVisionTxtPTags}</s.TxtWrapper>
		</s.SectionWrapper>
	);
}
