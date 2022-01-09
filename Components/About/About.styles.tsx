import styled from 'styled-components';
import { Device, until } from '@helpers/media';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
	display: flex;
	flex-direction: column;

	width: 100%;
	max-width: 1500px;
	margin: 0 auto;

	padding: 0;

	font-weight: lighter;

	.description {
		align-self: center;

		display: flex;
		justify-content: flex-end;

		text-align: right;

		width: 100%;
		max-width: 76rem;

		padding: 0 1rem;

		overflow: hidden;
	}

	.description span {
		width: 85%;
		max-width: 25rem;
		line-height: 1.9rem;
		font-size: 1.35rem;
	}
`;

const StyledImage = styled(motion.img)`
	align-self: flex-start;

	width: 50%;
	max-width: 25rem;

	padding: 10rem 0 0 3rem;

	@media (${until(Device.Tablet)}) {
		padding-left: 1rem;
	}
`;

export const s = { StyledImage, SectionWrapper };
