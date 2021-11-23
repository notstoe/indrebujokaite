import type { NextPage } from "next";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

import { DataI } from "./index.types";

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

	const { data, loading, error } = useQuery<DataI>(ALL_PAINTINGS_QUERY);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{JSON.stringify(error)}</div>;

	console.log({ data });

	// const paintings = data?.paintings.map((painting, index) => (
	// 	<div key={index}>
	// 		{painting.Title + " " + painting.Price}
	// 		<img
	// 			src={painting.Picture[1].url}
	// 			style={{ width: "200px" }}
	// 			alt=""
	// 		></img>
	// 		<img
	// 			src={painting.Picture[0].url}
	// 			style={{ width: "200px" }}
	// 			alt={painting.Title}
	// 		></img>
	// 	</div>
	// ));

	return (
		<div>
			<Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>

			<main>{paintings}</main>

			<footer></footer>
		</div>
	);
};

export default Home;
