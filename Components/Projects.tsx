import styled from "styled-components";
import PaintingDisplay from "./PaintingDisplay";
import Carousel from "./Carousel/Carousel";

const SectionWrapper = styled.section`
	.sectionTitle {
		position: relative;

		margin-top: 10.5rem;

		width: 100%;
		height: 90vh;

		display: flex;
		justify-content: center;

		@media (max-width: 600px) {
			height: 55vh;
		}

		h1 {
			align-self: center;
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

const ArrowCSS = styled.div`
	position: absolute;
	bottom: 6rem;
	left: 50%;
	transform: translateY(0, -50%);

	opacity: 0.4;

	@media (max-width: 500px) {
		bottom: 2rem;
	}

	span {
		display: block;
		width: 30px;
		height: 30px;
		border-bottom: 5px solid var(--light-grey);
		border-right: 5px solid var(--fullwhite);
		transform: rotate(45deg);
		margin: -10px;
		animation: animate 2s infinite;

		@media (max-width: 500px) {
			width: 20px;
			height: 20px;
			border-bottom: 4px solid var(--light-grey);
			border-right: 4px solid var(--fullwhite);
		}
	}

	span:nth-child(2) {
		animation-delay: -0.2s;
	}

	span:nth-child(3) {
		animation-delay: -0.4s;
	}

	@keyframes animate {
		0% {
			opacity: 0;
			transform: rotate(45deg) translate(-20px, -20px);
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: rotate(45deg) translate(20px, 20px);
		}
	}
`;

const s = { SectionWrapper, ArrowCSS };

export default function Projects() {
	return (
		<s.SectionWrapper>
			<div className="sectionTitle">
				<h1>PROJECTS</h1>
				<s.ArrowCSS>
					<span></span>
					<span></span>
					<span></span>
				</s.ArrowCSS>
			</div>
			<PaintingDisplay />
			<Carousel />
		</s.SectionWrapper>
	);
}
