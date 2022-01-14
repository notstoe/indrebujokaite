import Footer from 'Components/Elements/Footer/Footer';
import Header from 'Components/Elements/Header/Header';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { s } from './Page.styles';

export default function Page({ children }: any) {
	return (
		<s.PageWrapper>
			<s.GlobalStyles />
			<s.NoisyBg>
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
