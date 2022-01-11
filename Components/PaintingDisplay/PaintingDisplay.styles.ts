import { until, Device } from '@helpers/media';

import { brand } from '@helpers/brand';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const DisplaysWrapper = styled(motion.section)`
	padding: 3rem 0;
`;

const SingleDisplayWrapper = styled.div<{ inverted: boolean }>`
	width: 90%;
	max-width: 1150px;

	margin: 0 auto;
	padding-top: 8rem;
	padding-bottom: 8rem;

	display: flex;
	justify-content: space-between;

	gap: 4rem;

	${({ inverted }) =>
		inverted &&
		css`
			div {
				order: 2;
			}
		`}

	> div {
		flex: 1;

		position: relative;

		display: flex;
		flex-direction: column;

		padding-top: 8.5%;

		font-size: 1.4rem;
		font-weight: lighter;

		.author {
			align-self: flex-end;
		}
	}

	@media ${until(Device.TabletLarge)} {
		flex-direction: column;

		div {
			order: 0;
			font-size: 1.2rem;
			align-self: center;
		}
	}
`;

const StyledImage = styled.img`
	width: 95%;
	max-width: 40rem;

	@media ${until(Device.TabletLarge)} {
		align-self: center;
	}
`;

const Title = styled(motion.span)`
	font-weight: normal;
	font-size: 3rem;
	align-self: center;

	@media ${until(Device.TabletLarge)} {
		padding-left: 2rem;
	}
`;

const BackgroundCircle = styled(motion.div)`
	display: block;
	position: absolute;

	z-index: -2;
	border-radius: 50%;

	background-color: ${brand.grey.detail};

	width: 13rem;
	height: 13rem;

	top: 13%;
	left: 11%;

	@media ${until(Device.Tablet)} {
		width: 10rem;
		height: 10rem;
	}
`;

export const s = {
	StyledImage,
	SingleDisplayWrapper,
	DisplaysWrapper,
	Title,
	BackgroundCircle,
};
