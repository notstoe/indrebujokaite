import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 95%;
	max-width: 95rem;
	padding: 5rem 8rem 5rem 8rem;
	margin: 0 auto;

	font-weight: lighter;

	@media ${until(Device.TabletLarge)} {
		padding: 3rem 0;
	} ;
`;

const PaintingDisplay = styled.div`
	display: flex;
	justify-content: center;

	gap: 2rem;

	margin-bottom: 7rem;

	> section {
		position: relative;

		width: 25rem;

		display: flex;
		flex-direction: column;

		padding-top: 8.5%;

		font-size: 1.2rem;
		font-weight: lighter;

		color: ${brand.grey.light};

		.author {
			align-self: flex-end;
		}
	}
	@media ${until(Device.LaptopLarge)} {
		flex-direction: column;
		align-items: center;

		> section {
			margin-bottom: 3.5rem;
		}
	}
`;

const Title = styled(motion.h1)`
	font-weight: normal;
	font-size: 2.2rem;
	align-self: center;

	color: ${brand.white};

	@media ${until(Device.TabletLarge)} {
		padding-left: 2rem;
	}
`;

const StyledImageWrapper = styled(motion.div)`
	position: relative;

	width: 95%;
	max-width: 40rem;
	height: 28rem;
`;

const TextWrapper = styled(motion.div)<{ alignright?: boolean }>`
	font-size: 1.7rem;

	display: flex;
	flex-direction: column;

	margin-bottom: 7rem;

	${({ alignright }) =>
		alignright
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
		padding-top: 0.5rem;
	}

	span {
		padding-top: 1.2rem;
	}

	.phone {
		padding-right: 1rem;
	}
`;

const SvgEmailWrapper = styled.button.attrs({ type: 'button' })`
	display: inline-block;

	margin-left: 1rem;

	color: ${brand.grey.light};

	background: 0;
	outline: 0;
	border: 0;
	padding: 0 1rem;

	position: relative;

	svg {
		width: 1.2rem;
	}

	&:hover {
		color: ${brand.white};
		cursor: pointer;

		${() => TxtHelper} {
			opacity: 1;

			transform: translate(0, -50%);

			pointer-events: all;
		}
	}
`;

const TxtHelper = styled.div`
	position: absolute;

	right: 100%;
	top: 50%;
	transform: translate(10%, -50%);

	border: 1px solid ${brand.grey.light};
	padding: 0.7rem 1rem;

	font-size: 1.1rem;
	text-transform: uppercase;

	opacity: 0;

	transition: all 0.3s ease-out;

	pointer-events: none;
`;

const ThumbnailsWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	gap: 0.8rem;

	@media ${until(Device.LaptopLarge)} {
		flex-direction: row;
		align-items: center;
	}
`;

const StyledThumbnail = styled.div`
	position: relative;

	width: 5rem;
	height: 4rem;

	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}

	transition: opacity 0.2s;
`;

const ExternalLinks = styled(motion.div)`
	margin-top: 1.8rem;

	a {
		padding-right: 0.5rem;

		:hover {
			color: ${brand.white};
		}
	}
`;

const SvgFbWrapper = styled.a`
	color: ${brand.grey.light};

	svg {
		width: 1.8rem;
	}
`;

const SvgIgWrapper = styled.a`
	color: ${brand.grey.light};

	svg {
		width: 1.8rem;
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

export const s = {
	Wrapper,
	Title,
	StyledImageWrapper,
	PaintingDisplay,
	TextWrapper,
	BackgroundCircle,
	SvgEmailWrapper,
	TxtHelper,
	ThumbnailsWrapper,
	StyledThumbnail,
	ExternalLinks,
	SvgFbWrapper,
	SvgIgWrapper,
};
