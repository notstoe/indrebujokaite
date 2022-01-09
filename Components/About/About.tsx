import { gql, useQuery } from '@apollo/client';

import RollingTitle from '../RollingTitle/RollingTitle';

import { s } from './About.styles';
import { ss } from 'Components/Loading/loading.styles';
import { DataA } from './About.types';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { motion, Variants } from 'framer-motion';
import { useInView } from '@hooks/useInView';

const descriptionVariants: Variants = {
	hiddenLeft: { opacity: 0, x: -80 },
	hiddenRight: { opacity: 0, x: 80 },
	visible: { opacity: 1, x: 0 },
};

export default function About() {
	const [elementRef, inView] = useInView<HTMLSpanElement>(
		{ threshold: 0.45 },
		true
	);

	const [elementRef2, inView2] = useInView<HTMLSpanElement>(
		{ threshold: 0.35 },
		true
	);

	const [elementRefImg, inViewImg] = useInView<HTMLImageElement>(
		{ threshold: 0.4 },
		true
	);

	const ABOUT_ME_QUERY = gql`
		query ABOUT_ME_TXT {
			about {
				about_me_txt
				my_vision_txt
				ProfilePic {
					url
				}
			}
		}
	`;

	const { data, loading, error } = useQuery<DataA>(ABOUT_ME_QUERY);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const url = data?.about.ProfilePic.url;

	const optimizedUrl = getOptimizedCloudinaryUrl(url, 'medium');

	return (
		<s.SectionWrapper>
			<RollingTitle title='ABOUT ME' altMode={false} />
			<div className='description'>
				<motion.span
					ref={elementRef}
					initial='hiddenRight'
					animate={inView ? 'visible' : 'hidden'}
					variants={descriptionVariants}
					transition={{ type: 'tween', duration: 0.7 }}
				>
					{data?.about.about_me_txt}
				</motion.span>
			</div>
			<s.StyledImage
				src={optimizedUrl}
				alt="Artist's Profile"
				ref={elementRefImg}
				initial='hiddenLeft'
				animate={inViewImg ? 'visible' : 'hidden'}
				variants={descriptionVariants}
				transition={{ type: 'tween', duration: 0.7 }}
			/>
			<RollingTitle title='MY VISION' altMode={true} />
			<motion.div
				className='description'
				style={{ justifyContent: 'flex-start' }}
			>
				<motion.span
					ref={elementRef2}
					initial='hiddenLeft'
					animate={inView2 ? 'visible' : 'hidden'}
					variants={descriptionVariants}
					transition={{ type: 'tween', duration: 0.7 }}
					style={{ textAlign: 'left' }}
				>
					{data?.about.my_vision_txt}
				</motion.span>
			</motion.div>
		</s.SectionWrapper>
	);
}
