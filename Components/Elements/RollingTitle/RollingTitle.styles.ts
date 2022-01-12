import { brand } from '@helpers/brand';
import styled, { css } from 'styled-components';
import { until, Device } from '@helpers/media';
import { motion } from 'framer-motion';

const Wrapper = styled.div<{ altMode: boolean }>`
	display: flex;
	flex-direction: column;

	position: relative;

	padding-top: 10rem;
	padding-bottom: 10rem;
	overflow: hidden;

	${({ altMode }) =>
		altMode
			? css`
					${BackgroundCircle} {
						bottom: 2%;
						right: 50%;
					}

					${Text} {
						text-align: left;

						&:nth-child(2) {
							text-align: right;
						}
					}
			  `
			: css`
					${BackgroundCircle} {
						top: 8%;
						right: 25%;
					}
			  `}
`;

const Text = styled(motion.p)`
	font-size: 10rem;
	line-height: 10rem;

	text-align: right;
	color: ${brand.grey.dark};

	&:nth-child(2) {
		text-align: left;
		color: ${brand.white};
	}

	@media ${until(Device.Tablet)} {
		font-size: 6.5rem;
		line-height: normal;
	}

	@media ${until(Device.MobileLarge)} {
		font-size: 4.5rem;
	}
`;

const BackgroundCircle = styled(motion.div)`
	display: block;
	position: absolute;

	z-index: -2;

	width: 23rem;
	height: 23rem;

	border-radius: 50%;

	background-color: ${brand.grey.detail};

	@media ${until(Device.Tablet)} {
		width: 18rem;
		height: 18rem;
	}
`;

export const s = { Wrapper, Text, BackgroundCircle };
