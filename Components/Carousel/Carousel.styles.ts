import { Device, until } from '@helpers/media';
import styled from 'styled-components';

const SingleCarouselWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	padding: 2rem 0;

	h1 {
		text-align: center;
		font-size: 2rem;
		font-weight: lighter;
	}
`;

const CarouselWrapper = styled.div`
	overflow: hidden;

	> div {
		display: flex;

		.embla__slide {
			position: relative;
			flex: 0 0 20%;
		}
	}
`;

const StyledImage = styled.img`
	height: 49vh;
	max-height: 400px;

	transition: opacity 0.2s ease-out;

	padding: 1rem 0.5rem;

	:hover {
		opacity: 0.2;
	}

	@media (${until(Device.Tablet)}) {
		height: 35vh;
	}
`;

export const s = { StyledImage, SingleCarouselWrapper, CarouselWrapper };
