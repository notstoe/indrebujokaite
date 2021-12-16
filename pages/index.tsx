import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
// import { gql, useQuery } from "@apollo/client";

import Header from "../Components/Header";
import Intro from "../Components/Intro";
import About from "../Components/About";

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

	:root {
		/* Project color variables */
		--fullwhite: #ffffff;
		--light-grey: #c4c4c4;
		--dark-grey: #c4c4c439;
		--bg-black: #000000be;
	}

	main {
		background: var(--bg-black);
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

	@media (max-width: 1080px) {
		html {
			font-size: 87.5%;
		}
	}

	@media (max-width: 720px) {
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

	.background {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;

		.bgcolor {
			position: absolute;
			background: var(--bg-black);
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
		color: var(--fullwhite);
		font-family: "Cormorant Garamond";
		font-weight: normal;
		font-size: 2rem;
	}
`;

const s = { PageWrapper };

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

	// const paintings = data?.paintings.map((painting, index) => (
	// 	<div key={index}>
	// 		{painting.Title + " " + painting.Price}
	// 		<img
	// 			src={painting.Picture[1].url}
	// 			style={{ width: "200px" }}
	// 			alt={painting.Title}
	// 		/>
	// 		<img
	// 			src={painting.Picture[0].url}
	// 			style={{ width: "200px" }}
	// 			alt={painting.Title}
	// 		/>
	// 	</div>
	// ));

	return (
		<s.PageWrapper>
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
			</div>

			<footer></footer>
		</s.PageWrapper>
	);
}
