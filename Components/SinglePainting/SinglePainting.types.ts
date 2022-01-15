import { ApolloError } from '@apollo/client';

type Painting = {
	title: string;
	painting_collection: { collectionTitle: string };
	description: string;
	price: Number;
	picture: {
		url: string;
	}[];
};

type ContactInfo = {
	email: string;
	phone: string;
	location_based: string;
	shipping_info: string;
	instagram: string;
	facebook: string;
};

export interface DataSinglePage {
	paintings: Painting[];
	contact: ContactInfo;
	loading: boolean;
	error: ApolloError;
}
