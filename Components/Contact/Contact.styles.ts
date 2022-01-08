import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';
import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 90%;
	max-width: 80rem;

	margin: 0 auto;

	height: 45rem;

	h1 {
		position: relative;

		max-width: 40rem;
		padding: 5rem 0;

		font-size: 10rem;
		font-weight: lighter;

		&::before {
			content: '';
			display: block;
			position: absolute;

			top: 18%;
			right: 17%;

			width: 23rem;
			height: 23rem;

			z-index: -2;

			border-radius: 50%;

			background-color: ${brand.grey.dark};
		}
	}

	@media ${until(Device.Tablet)} {
		flex-direction: column;

		padding-bottom: 10rem;

		h1 {
			font-size: 6.5rem;
			text-align: center;
			order: -1;

			&::before {
				top: 37%;
				right: 13%;

				width: 13rem;
				height: 13rem;
			}
		}
	}
`;

const ContactInfo = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	font-size: 1.6rem;

	height: 50%;

	.author {
		color: ${brand.grey.light};
		padding-left: 1.7rem;
	}

	span {
		line-height: 2.2rem;
	}

	@media ${until(Device.Tablet)} {
		.author {
			padding-left: 0;
		}

		span {
			text-align: center;
		}
	}
`;

const ExternalLinks = styled.div`
	a {
		padding-right: 0.5rem;

		:hover {
			color: ${brand.grey.light};
		}
	}
	@media ${until(Device.Tablet)} {
		text-align: center;
	}
`;

export const s = { Wrapper, ContactInfo, ExternalLinks };