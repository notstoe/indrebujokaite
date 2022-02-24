import { Variants } from 'framer-motion';
import Image from 'next/image';

import RollingTitle from '../Elements/RollingTitle/RollingTitle';
import TextBlock from 'Components/Elements/TextBlock/TextBlock';
import { s } from './About.styles';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { useInView } from '@hooks/useInView';
import { AboutMeInfo } from 'types/index.types';

const imgVariants: Variants = {
	hidden: {
		opacity: 0,
		x: -80,
		transition: { duration: 0.8 },
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.8 },
	},
};

interface AboutProps {
	aboutData: AboutMeInfo;
}

export default function About({ aboutData }: AboutProps) {
	const [elementRefImg, inViewImg] = useInView<HTMLDivElement>(
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
			<TextBlock content={aboutData.about_me_txt} alignleft={false} />
			<s.ImageWrapper
				initial='hidden'
				ref={elementRefImg}
				variants={imgVariants}
				transition={{ duration: 0.8 }}
				animate={inViewImg ? 'visible' : 'hidden'}
			>
				<Image
					src={optimizedUrl}
					layout='fill'
					objectFit='contain'
					objectPosition='left'
					alt="Indre's picture"
				/>
			</s.ImageWrapper>
			<RollingTitle title='MY VISION' altMode={true} />
			<TextBlock content={aboutData.my_vision_txt} alignleft={true} />
		</s.SectionWrapper>
	);
}
