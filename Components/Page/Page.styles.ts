import styled, { createGlobalStyle } from 'styled-components';
import { brand } from '@helpers/brand';
import { until, Device } from '@helpers/media';

const GlobalStyles = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
		box-sizing: border-box;
	}

	main {
		background: ${brand.black.bg};
	}

	html {
		scroll-behavior: smooth;
	}

	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol,
	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none;
	}

	body,
	input,
	textarea,
	button {
		font: inherit;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media ${until(Device.TabletLarge)} {
		html {
			font-size: 87.5%;
		}
	}

	@media ${until(Device.Tablet)} {
		html {
			font-size: 75%;
		}
	}
`;

const PageWrapper = styled.main`
	position: relative;

	width: 100%;
	min-height: 100%;

	z-index: 0;

	font-family: 'Cormorant Garamond';
`;

const ContentWrapper = styled.div`
	color: ${brand.white};

	font-weight: normal;
	font-size: 2rem;

	overflow: hidden;
	min-height: 100vh;
`;

const NoisyBg = styled.div`
	content: '';
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: -1;

	.noise {
		position: absolute;
		width: 100%;
		height: 100%;

		opacity: 0.07;
		z-index: 2;
	}
`;

export const s = {
	PageWrapper,
	ContentWrapper,
	GlobalStyles,
	NoisyBg,
};
