import { brand } from '@helpers/brand';
import styled from 'styled-components';

const Footer = styled.footer`
	font-size: 1.1rem;
	font-weight: lighter;

	color: ${brand.grey.light};
	background: ${brand.black.base};

	width: 100%;

	position: absolute;
	bottom: 0;

	padding: 1.1rem 4rem;

	display: flex;
	justify-content: space-between;

	span a:hover {
		color: ${brand.white};
		text-decoration: underline;
	}
`;

export const s = { Footer };
