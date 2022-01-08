import styled from 'styled-components';
import { until, Device } from '@helpers/media';

const Wrapper = styled.section`
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
	}

	.subtitle {
		font-size: 1.4rem;
		font-weight: lighter;
	}

	@media ${until(Device.MobileLarge)} {
		.title {
			padding-right: 6vw;
		}
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

	@media ${until(Device.MobileLarge)} {
		right: 0;
		top: 18vh;

		width: 75vw;
		height: 65vw;
	}
`;

export const s = { Wrapper, StyledImage };
