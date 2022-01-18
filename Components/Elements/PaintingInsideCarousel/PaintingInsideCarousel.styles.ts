import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Painting = styled.a`
	position: relative;

	:hover {
		${() => StyledImage} {
			opacity: 0.15;
		}
	}
`;

const StyledImage = styled.img`
	height: 23rem;
	padding: 1rem 0.5rem;

	transition: opacity 0.5s ease-out;

	@media (${until(Device.Tablet)}) {
		height: 21rem;
	}
`;

const PaintingHoverInfo = styled(motion.div)`
	position: absolute;
	left: 0%;
	top: 0%;

	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 1.3rem;

	color: ${brand.grey.light};

	span {
		padding-bottom: 0.5rem;
	}

	.title {
		color: ${brand.white};
		font-size: 1.9rem;
	}

	.collection {
		padding-right: 10%;
	}

	.author {
		padding-left: 47%;
	}
`;

export const s = {
	StyledImage,
	PaintingHoverInfo,
	Painting,
};
