import { s } from './Intro.styles';

export default function Intro() {
	return (
		<s.Wrapper>
			<span className='title'>Indrė Bujokaitė</span>
			<span className='subtitle'>Oil Painting</span>
			<s.StyledImage
				src='https://res.cloudinary.com/dowa8tjdi/image/upload/v1639426063/DSC_0949-min_2_gac2oy.jpg'
				alt='the back of a canvas board'
			/>
		</s.Wrapper>
	);
}
