import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
// import { gql, useQuery } from "@apollo/client";

import Header from '../Components/Header';
import Intro from '../Components/Intro';
import About from '../Components/About';
import Projects from '../Components/Projects';
import brand from '@helpers/brand';
import { until, Device } from '@helpers/media';

// import { DataI } from "./index.types";

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
		background: ${brand.black};
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

const HomePageWrapper = styled.main`
	position: relative;

	width: 100%;
	min-height: 100%;

	z-index: 0;

	.background {
		content: '';
		position: fixed;
		width: 100%;
		height: 100vh;
		z-index: -1;

		.bgcolor {
			position: absolute;
			background: ${brand.black};
			width: 100%;
			height: 100%;
			z-index: 1;
		}

		.noise {
			position: absolute;
			width: 100%;
			height: 100%;

			opacity: 0.05;
			z-index: 2;
		}
	}

	.contentWrapper {
		color: ${brand.white};
		font-family: 'Cormorant Garamond';
		font-weight: normal;
		font-size: 2rem;
	}
`;

const s = { HomePageWrapper };

export default function Home() {
	// 	const ALL_PAINTINGS_QUERY = gql`
	// 		query ALL_PAINTINGS {
	// 			paintings {
	// 				Title
	// 				Price
	// 				Picture {
	// 					url
	// 				}
	// 			}
	// 		}
	// 	`;

	// const { data, loading, error } = useQuery<DataI>(ALL_PAINTINGS_QUERY);

	// if (loading) return <div>Loading...</div>;
	// if (error) return <div>{JSON.stringify(error)}</div>;

	return (
		<s.HomePageWrapper>
			<GlobalStyles />
			<div className="background">
				<div className="bgcolor" />
				<Image
					src="https://res.cloudinary.com/dowa8tjdi/image/upload/v1639673525/upload-4fb97271-7cb7-4746-9c56-87e24141d41a_yvrwds.gif"
					alt="old tv static"
					className="noise"
					layout="fill"
				/>
			</div>

			<Header />
			<div className="contentWrapper">
				<Intro />
				<About />
				<Projects />
			</div>

			<footer></footer>
		</s.HomePageWrapper>
	);
}
