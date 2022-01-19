import { gql, useQuery } from '@apollo/client';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { ss } from 'Components/Elements/Loading/loading.styles';
import { motion, Variants } from 'framer-motion';
import { s } from './Intro.styles';
import { DataIntro } from './Intro.types';

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

const ABOUT_ME_QUERY = gql`
	query ABOUT_ME_TXT {
		about {
			background_intro_picture {
				url
			}
		}
	}
`;

export default function Intro() {
	const { data, loading, error } = useQuery<DataIntro>(ABOUT_ME_QUERY);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const url = data?.about.background_intro_picture.url;

	const optimizedUrl = getOptimizedCloudinaryUrl(url, 'medium');

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
