import { ApolloError } from '@apollo/client';

interface ContactInfo {
	name: string;
	email: string;
	phone: string;
	location_based: string;
	shipping_info: string;
	instagram: string;
	facebook: string;
}

export interface DataContact {
	contact: {
		name: string;
		email: string;
		phone: string;
		location_based: string;
		shipping_info: string;
		instagram: string;
		facebook: string;
	};
	loading: boolean;
	error?: ApolloError;
}
