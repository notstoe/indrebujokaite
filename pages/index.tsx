import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from 'Components/Contact/Contact';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Indreta Art</title>
			</Head>
			<Intro />
			<About />
			<Projects />
			<Contact />
		</>
	);
}
