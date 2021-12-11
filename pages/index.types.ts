import { ApolloError } from "@apollo/client";

// FIXME - change to the page that'll do the queries, index was testing

enum Collection {
	LANDSCAPE = "Landscape",
	MODERN_BLOCKS = "Modern_Blocks",
	COMTEMPORARY_FINE_ART = "Comtemporary_Fine_art",
}

interface PaintingI {
	Title: string;
	Description: string;
	Price: number;
	Available: boolean;
	Collection: Collection;
	Picture: {
		url: string;
	}[];
}

export interface DataI {
	paintings: PaintingI[];
	loading: boolean;
	error?: ApolloError;
}
