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

export interface DataC {
	contact: ContactInfo;
	loading: boolean;
	error?: ApolloError;
}
