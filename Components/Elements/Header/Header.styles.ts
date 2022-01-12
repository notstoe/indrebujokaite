import { brand } from '@helpers/brand';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledHeader = styled(motion.header)`
	position: sticky;
	top: 0;
	z-index: 1;

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 90%;
	max-width: 1500px;
	height: 10vh;
	max-height: 80px;

	margin: 0 auto;

	color: ${brand.white};

	font-family: 'Cormorant Garamond';

	div {
		flex: 0.7;

		text-align: center;
	}

	a {
		font-size: 1.2rem;
		cursor: pointer;

		:hover {
			color: ${brand.grey.light};
		}

		&.ownerName {
			font-size: 1.7rem;
			text-align: center;
		}
	}
`;

export const s = { StyledHeader };
