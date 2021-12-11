import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
// import { gql, useQuery } from "@apollo/client";

import Header from "../Components/Header";

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
		--dark-grey: #c4c4c4;
		--fullblack: #000000;
	}

	main {
		background: var(--fullblack);
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

	*,
	*:before,
	*:after {
		box-sizing: inherit;
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
			font-size: 93.75%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}
`;

const StyledWrapper = styled.main`
	position: relative;

	width: 100vw;
	min-height: 100vh;

	.noise {
		opacity: 0.05;
		width: 100%;
		height: 100%;

		position: absolute;
	}

	header {
		/* z-index: 9999; */
	}

	.contentWrapper {
		/* z-index: 9999; */
		color: white;
	}
`;

export default function Home() {
	// const Home: NextPage = () => {
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
		<StyledWrapper>
			<GlobalStyles />
			<Image
				src="https://d3n32ilufxuvd1.cloudfront.net/59ee0858278cca00855b0b53/1287165/upload-4fb97271-7cb7-4746-9c56-87e24141d41a.gif"
				alt="old tv static"
				className="noise"
				layout="fill"
			/>

			<Header />
			<div className="contentWrapper">Hello World!</div>

			<footer></footer>
		</StyledWrapper>
	);
}
