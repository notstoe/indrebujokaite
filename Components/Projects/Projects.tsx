import PaintingDisplay from '../PaintingDisplay/PaintingDisplay';
import Carousel from '../Carousel/Carousel';
import { s } from './Projects.styles';

export default function Projects() {
	return (
		<s.SectionWrapper>
			<div className='sectionTitle'>
				<h1>PROJECTS</h1>
			</div>
			<PaintingDisplay />
			<Carousel collection='Landscapes' />
			<Carousel collection='Contemporary_Fine_Art' />
			<Carousel collection='Modern_Blocks' />
		</s.SectionWrapper>
	);
}
