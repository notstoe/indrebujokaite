import { ApolloError } from '@apollo/client';

type ContactInfo = {
	name: string;
	email: string;
	phone: string;
	location_based: string;
	shipping_info: string;
	instagram: string;
	facebook: string;
};

export interface DataContact {
	contact: ContactInfo;
	loading: boolean;
	error?: ApolloError;
}
