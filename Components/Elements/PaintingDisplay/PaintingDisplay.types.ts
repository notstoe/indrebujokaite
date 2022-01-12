import { ApolloError } from '@apollo/client';
import { Painting } from 'Components/Projects/Projects.types';

export interface DataDisplay {
	displayPaintings: { paintings: Painting[] }[];
	loading: boolean;
	error?: ApolloError;
}
