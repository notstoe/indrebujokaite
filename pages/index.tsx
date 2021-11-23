import type { NextPage } from "next";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

const Home: NextPage = () => {
	const ALL_PAINTINGS_QUERY = gql`
		query ALL_PAINTINGS {
			paintings {
				Title
				Price
				Picture {
					url
				}
			}
		}
	`;

	const { data, loading, error } = useQuery(ALL_PAINTINGS_QUERY);

	if (loading) return "Loading...";
	if (error) return JSON.stringify(error);

	// console.log({ data });

	// const paintings = data.paintings.map((painting, index) => (
	// 	<div key={index}>
	// 		{painting.Title + " " + painting.Price}
	// 		<img src={painting.Picture[0].url} style={{ width: "200px" }}></img>
	// 		<img src={painting.Picture[1].url} style={{ width: "200px" }}></img>
	// 	</div>
	// ));

	return (
		<div>
			<Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>

			<main></main>

			<footer></footer>
		</div>
	);
};

export default Home;
