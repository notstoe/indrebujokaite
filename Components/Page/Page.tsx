import Footer from 'Components/Elements/Footer/Footer';
import Header from 'Components/Elements/Header/Header';
import Image from 'next/image';

import PropTypes from 'prop-types';

import { s } from './Page.styles';
import { Variants } from 'framer-motion';

const noiseVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
};

export default function Page({ children }: any) {
	return (
		<s.PageWrapper>
			<s.GlobalStyles />
			<s.NoisyBg initial='hidden' animate='visible' variants={noiseVariants}>
				<Image
					src='https://res.cloudinary.com/dowa8tjdi/image/upload/v1639673525/upload-4fb97271-7cb7-4746-9c56-87e24141d41a_yvrwds.gif'
					alt='old tv static'
					className='noise'
					layout='fill'
				/>
			</s.NoisyBg>

			<Header />
			<s.ContentWrapper>{children}</s.ContentWrapper>

			<Footer />
		</s.PageWrapper>
	);
}

Page.propTypes = {
	children: PropTypes.any,
};
