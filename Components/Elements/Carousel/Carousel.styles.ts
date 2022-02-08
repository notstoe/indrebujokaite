import { motion } from 'framer-motion';
import styled from 'styled-components';

const SingleCollectionDisplay = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	padding: 2rem 0;

	h2 {
		text-align: center;
		font-size: 2rem;
		font-weight: lighter;
	}
`;

const CarouselWrapper = styled(motion.div)`
	overflow: hidden;

	> div {
		display: flex;
	}
`;

export const s = {
	SingleCollectionDisplay,
	CarouselWrapper,
};
