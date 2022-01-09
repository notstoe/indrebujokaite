import { s } from './Intro.styles';

export default function Intro() {
	return (
		<s.Wrapper>
			<span className='title'>Indrė Bujokaitė</span>
			<span className='subtitle'>Oil Painting</span>
			<s.StyledImage
				src='https://res.cloudinary.com/dowa8tjdi/image/upload/v1641753914/indrebujokaite/medium_DSC_0949_min_2_f74b3e753c.jpg'
				alt='the back of a canvas board'
			/>
		</s.Wrapper>
	);
}
