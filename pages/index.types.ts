import { ApolloError } from "@apollo/client";

// FIXME - change to the page that'll do the queries, index was testing

enum Collection {
	LANDSCAPE = "Landscape",
	MODERN_BLOCKS = "Modern_Blocks",
	COMTEMPORARY_FINE_ART = "Comtemporary_Fine_art",
}

export interface PaintingI {
	title: string;
	description: string;
	price: number;
	available: boolean;
	collection: Collection;
	picture: {
		url: string;
	}[];
}

export interface DataI {
	paintings: PaintingI[];
	loading: boolean;
	error?: ApolloError;
}
