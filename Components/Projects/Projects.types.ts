import { ApolloError } from '@apollo/client';

export type Painting = {
	id: string;
	title: string;
	painting_collection: { collectionTitle: string };
	picture: {
		url: string;
	}[];
};

export interface CollectionsPaintings {
	collectionTitle: string;
	paintings: Painting[];
}

export interface DataCollections {
	collectionsPaintings: CollectionsPaintings[];
	loading: boolean;
	error: ApolloError;
}
