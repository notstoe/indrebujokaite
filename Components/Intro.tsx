import styled from "styled-components";

const StyledWrapper = styled.section`
	width: 85%;
	max-width: 69rem;
	height: 90vh;

	margin: 0 auto;

	text-align: right;

	display: flex;
	flex-direction: column;
	justify-content: center;

	position: relative;

	.title {
		font-size: 5.5rem;
		font-weight: normal;
		padding-right: 2.2rem;
		padding-top: 10rem;

		@media (max-width: 400px) {
			padding-right: 6vw;
		}
	}

	.subtitle {
		font-size: 1.4rem;
		font-weight: lighter;
	}
`;

const StyledImage = styled.img`
	position: absolute;

	z-index: -2;

	left: 0;
	right: 32%;

	margin: auto;

	width: 34rem;
	height: 30rem;

	@media (max-width: 450px) {
		right: 0;
		top: 18vh;

		width: 75vw;
		height: 65vw;
	}
`;

export default function Intro() {
	return (
		<StyledWrapper>
			<span className="title">Indrė Bujokaitė</span>
			<span className="subtitle">Oil Painting</span>
			<StyledImage
				src="https://res.cloudinary.com/dowa8tjdi/image/upload/v1639426063/DSC_0949-min_2_gac2oy.jpg"
				alt="the back of a canvas board"
			/>
		</StyledWrapper>
	);
}
