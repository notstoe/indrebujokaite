import styled from 'styled-components';
import PaintingDisplay from './PaintingDisplay/PaintingDisplay';
import Carousel from './Carousel/Carousel';
import { until, Device } from '@helpers/media';
import { brand } from '@helpers/brand';

const SectionWrapper = styled.section`
	.sectionTitle {
		position: relative;

		margin-top: 10.5rem;

		width: 100%;
		height: 90vh;

		display: flex;
		justify-content: center;

		h1 {
			align-self: center;
			font-size: 10rem;
			font-weight: lighter;
		}

		&::before {
			content: '';
			display: block;
			position: absolute;

			top: 50%;
			transform: translateY(-50%);
			left: 59.5%;

			width: 21rem;
			height: 21rem;

			z-index: 0;

			border-radius: 50%;

			background-color: ${brand.grey.dark};
		}
	}

	@media ${until(Device.Tablet)} {
		.sectionTitle {
			height: 55vh;

			h1 {
				font-size: 6.5rem;
				line-height: normal;
			}

			&::before {
				left: 52.5%;

				width: 10rem;
				height: 10rem;
			}
		}
	}

	@media ${until(Device.MobileLarge)} {
		.sectionTitle {
			h1 {
				font-size: 4.5rem;
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

	span {
		display: block;
		width: 30px;
		height: 30px;
		border-bottom: 5px solid ${brand.grey.light};
		border-right: 5px solid ${brand.white};
		transform: rotate(45deg);
		margin: -10px;
		animation: animate 2s infinite;
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

	@media ${until(Device.MobileLarge)} {
		bottom: 2rem;

		span {
			width: 20px;
			height: 20px;
			border-bottom: 4px solid ${brand.grey.light};
			border-right: 4px solid ${brand.white};
		}
	}
`;

const s = { SectionWrapper, ArrowCSS };

export default function Projects() {
	return (
		<s.SectionWrapper>
			<div className='sectionTitle'>
				<h1>PROJECTS</h1>
				<s.ArrowCSS>
					<span></span>
					<span></span>
					<span></span>
				</s.ArrowCSS>
			</div>
			<PaintingDisplay />
			<Carousel collection='Landscapes' />
			<Carousel collection='Contemporary_Fine_Art' />
			<Carousel collection='Modern_Blocks' />
		</s.SectionWrapper>
	);
}