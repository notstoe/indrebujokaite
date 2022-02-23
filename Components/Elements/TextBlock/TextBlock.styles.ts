import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const TxtWrapper = styled(motion.div)<{ alignleft?: string }>`
	align-self: center;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;

	text-align: right;

	width: 100%;
	max-width: 76rem;

	padding: 0 1rem;

	p {
		width: 85%;
		max-width: 25rem;
		line-height: 1.9rem;
		font-size: 1.35rem;
		padding-top: 0.5rem;
	}

	${({ alignleft }) =>
		alignleft &&
		css`
			align-items: flex-start;

			p {
				text-align: left;
			}
		`};
`;

export const s = { TxtWrapper };
