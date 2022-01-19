import { ApolloError } from '@apollo/client';

export interface DataIntro {
	about: { background_intro_picture: { url: string } };
	loading: boolean;
	error: ApolloError;
}
