import styled from "styled-components";

const SectionWrapper = styled.section`
	.sectionTitle {
		position: relative;

		margin-top: 10.5rem;

		h1 {
			position: absolute;

			top: 50%;
			transform: translateY(-50%);

			width: 100%;
			text-align: center;

			font-size: 10rem;
			font-weight: lighter;

			@media (max-width: 615px) {
				font-size: 6.5rem;
				line-height: normal;
			}

			@media (max-width: 450px) {
				font-size: 4.5rem;
			}
		}

		&::before {
			content: "";
			display: block;
			position: absolute;

			top: 50%;
			transform: translateY(-50%);
			left: 59.5%;

			width: 21rem;
			height: 21rem;

			z-index: 0;

			border-radius: 50%;

			background-color: var(--dark-grey);

			@media (max-width: 600px) {
				left: 52.5%;

				width: 10rem;
				height: 10rem;
			}
		}
	}
`;

const StyledImageBg = styled.img`
	position: relative;
	z-index: -2;

	width: 100%;
`;

const s = { SectionWrapper, StyledImageBg };

export default function Projects() {
	return (
		<s.SectionWrapper>
			<div className="sectionTitle">
				<h1>PROJECTS</h1>
				<s.StyledImageBg
					src="https://res.cloudinary.com/dowa8tjdi/image/upload/v1641400988/1373062_v9kwuq.jpg"
					alt="woman with black hair"
				/>
			</div>
			{/* TODO - finish projects section, insert 3 example paintings*/}
			{/* <div>New Painting goes Here</div> */}
		</s.SectionWrapper>
	);
}
