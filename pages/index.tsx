import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from 'Components/Contact/Contact';

// TODO - loader before page opens

export default function Home() {
	return (
		<>
			<Intro />
			<About />
			<Projects />
			<Contact />
		</>
	);
}
