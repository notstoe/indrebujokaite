import styled from 'styled-components';
import { until, Device } from '@helpers/media';
import { brand } from '@helpers/brand';
import { motion } from 'framer-motion';

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
	}

	@media ${until(Device.Tablet)} {
		.sectionTitle {
			height: 55vh;

			h1 {
				font-size: 6.5rem;
				line-height: normal;
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

const BackgroundCircle = styled(motion.div)`
	display: block;
	position: absolute;

	z-index: -2;
	border-radius: 50%;

	background-color: ${brand.grey.detail};

	width: 20rem;
	height: 20rem;

	top: 25%;
	left: 25%;

	@media ${until(Device.Tablet)} {
		top: 32%;

		width: 10rem;
		height: 10rem;
	}
`;

export const s = { SectionWrapper, BackgroundCircle };
