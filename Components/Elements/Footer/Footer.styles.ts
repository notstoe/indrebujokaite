import { brand } from '@helpers/brand';
import { Device, until } from '@helpers/media';
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

	@media ${until(Device.MobileLarge)} {
		padding: 1rem;
	}
`;

export const s = { Footer };
