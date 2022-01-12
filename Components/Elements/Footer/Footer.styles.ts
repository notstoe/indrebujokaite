import { brand } from '@helpers/brand';
import styled from 'styled-components';

const Footer = styled.footer`
	position: absolute;

	bottom: 0;

	width: 100%;
	padding: 1.1rem 4rem;

	display: flex;
	justify-content: space-between;

	font-size: 1.1rem;
	font-weight: lighter;

	color: ${brand.grey.light};
	background: ${brand.black.base};

	span a:hover {
		color: ${brand.white};
		text-decoration: underline;
	}
`;

export const s = { Footer };
