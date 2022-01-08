import Image from 'next/image';

import Header from '../Components/Header/Header';
import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';

import { s } from './index.styles';
import Contact from 'Components/Contact/Contact';
import Footer from 'Components/Footer/Footer';

// TODO - loader before page opens

export default function Home() {
	return (
		<s.HomePageWrapper>
			<s.GlobalStyles />
			<div className='background'>
				<div className='bgcolor' />
				<Image
					src='https://res.cloudinary.com/dowa8tjdi/image/upload/v1639673525/upload-4fb97271-7cb7-4746-9c56-87e24141d41a_yvrwds.gif'
					alt='old tv static'
					className='noise'
					layout='fill'
				/>
			</div>

			<Header />
			<s.ContentWrapper>
				<Intro />
				<About />
				<Projects />
				<Contact />
			</s.ContentWrapper>

			<Footer />
		</s.HomePageWrapper>
	);
}
