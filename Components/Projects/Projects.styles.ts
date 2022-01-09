import styled from 'styled-components';
import { until, Device } from '@helpers/media';
import { brand } from '@helpers/brand';

const SectionWrapper = styled.section`
	.sectionTitle {
		position: relative;

		margin-top: 2.5rem;

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

			z-index: -2;

			border-radius: 50%;

			background-color: ${brand.grey.detail};
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

export const s = { SectionWrapper };
