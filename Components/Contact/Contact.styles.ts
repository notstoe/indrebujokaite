import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 90%;
	max-width: 80rem;

	margin: 0 auto;

	height: 45rem;

	h3 {
		position: relative;

		max-width: 40rem;
		padding: 5rem 0;

		font-size: 10rem;
		font-weight: lighter;
	}

	@media ${until(Device.Tablet)} {
		flex-direction: column;

		padding-bottom: 10rem;

		h3 {
			font-size: 6.5rem;
			text-align: center;
			order: -1;
		}
	}

	@media ${until(Device.MobileLarge)} {
		h3 {
			font-size: 4.5rem;
		}
	}
`;

const ContactInfo = styled(motion.div)`
	flex: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;

	font-size: 1.6rem;
	font-weight: lighter;

	height: 50%;

	color: ${brand.grey.light};

	.white {
		color: ${brand.white};
		font-size: 1.8rem;
		margin-bottom: 4rem;
	}

	span {
		line-height: 2.2rem;
		margin-bottom: 1.2rem;
	}

	@media ${until(Device.Tablet)} {
		.author {
			padding-left: 0;
		}

		span {
			text-align: center;
			margin-bottom: 0.8rem;
		}

		.white {
			margin-bottom: 2rem;
		}
	}
`;

const ExternalLinks = styled(motion.div)`
	margin-top: 2.8rem;

	a {
		padding-right: 0.5rem;

		:hover {
			color: ${brand.white};
		}
	}
	@media ${until(Device.Tablet)} {
		text-align: center;
	}
`;

const BackgroundCircle = styled(motion.div)`
	display: block;
	position: absolute;

	z-index: -2;
	border-radius: 50%;

	background-color: ${brand.grey.detail};

	width: 23rem;
	height: 23rem;

	top: 18%;
	left: 17%;

	@media ${until(Device.Tablet)} {
		top: 37%;
		right: 13%;

		width: 13rem;
		height: 13rem;
	}
`;

const SvgEmailWrapper = styled.button.attrs({ type: 'button' })`
	display: inline-block;

	margin-left: 1rem;

	color: ${brand.grey.light};

	background: 0;
	outline: 0;
	border: 0;
	padding-right: 1rem;

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

	left: 100%;
	top: 50%;
	transform: translate(-10%, -50%);

	border: 1px solid ${brand.grey.light};
	padding: 0.2rem 1rem;

	font-size: 1.1rem;
	text-transform: uppercase;

	opacity: 0;

	transition: all 0.3s ease-out;

	pointer-events: none;
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

export const s = {
	Wrapper,
	ContactInfo,
	ExternalLinks,
	BackgroundCircle,
	SvgEmailWrapper,
	TxtHelper,
	SvgFbWrapper,
	SvgIgWrapper,
};
