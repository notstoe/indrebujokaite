import styled from 'styled-components';
import { Device, until } from '@helpers/media';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 93.75rem;
	margin: 0 auto;

	padding: 0;

	font-weight: lighter;

	overflow: hidden;
`;

const ImageWrapper = styled(motion.div)`
	position: relative;

	align-self: flex-start;

	height: 500px;
	width: 50%;
	max-width: 21rem;

	margin: 10rem 0 0 7rem;

	@media (${until(Device.Tablet)}) {
		margin-left: 1rem;
	}
`;

export const s = { SectionWrapper, ImageWrapper };
