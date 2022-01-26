import { brand } from '@helpers/brand';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Overlay = styled(motion.div)`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;

	width: 100%;
	height: 100%;

	background: rgba(0, 0, 0, 0.8);

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1.4rem;
	color: ${brand.white};

	cursor: zoom-out;
`;

const ImageWrapper = styled(motion.div)`
	position: relative;

	width: 95%;
	max-width: 60rem;
	height: 40rem;
`;

export const s = { Overlay, ImageWrapper };
