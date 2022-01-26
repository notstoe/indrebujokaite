import { brand } from '@helpers/brand';
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
`;

export const s = { TextWrapper };
