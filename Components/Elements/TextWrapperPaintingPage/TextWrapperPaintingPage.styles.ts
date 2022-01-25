import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const TextWrapper = styled(motion.div)<{ alignRight?: boolean }>`
	font-size: 1.7rem;

	display: flex;
	flex-direction: column;

	margin-bottom: 7rem;

	${({ alignRight }) =>
		alignRight
			? css`
					text-align: right;

					p {
						align-self: flex-end;
					}
			  `
			: css`
					text-align: left;
			  `}

	h2 {
		position: relative;
		padding-bottom: 3rem;

		font-weight: lighter;

		color: ${brand.grey.light};
	}

	p {
		font-size: 1.45rem;

		max-width: 24rem;
		padding-top: 0.56rem;
	}

	.phone {
		padding-right: 1rem;
	}
`;

const BackgroundCircle = styled(motion.div)<{
	radius: { normal: string; mobile: string };
	positioning: {
		top: string;
		left: string;
		topMobile?: string | '';
		leftMobile?: string | '';
	};
}>`
	display: block;
	position: absolute;

	z-index: -2;
	border-radius: 50%;

	background-color: ${brand.grey.detail};

	width: ${({ radius }) => radius.normal};
	height: ${({ radius }) => radius.normal};
	top: ${({ positioning }) => positioning.top};
	left: ${({ positioning }) => positioning.left};

	@media ${until(Device.Tablet)} {
		width: ${({ radius }) => radius.mobile};
		height: ${({ radius }) => radius.mobile};
		top: ${({ positioning }) => positioning.topMobile};
		left: ${({ positioning }) => positioning.leftMobile};
	}
`;

export const s = { TextWrapper, BackgroundCircle };
