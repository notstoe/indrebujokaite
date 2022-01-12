import { ApolloError } from '@apollo/client';
import { Painting } from 'Components/Projects/Projects.types';

export interface DataFeaturedPaintings {
	featuredPainting: { paintings: Painting[] };
	loading: boolean;
	error?: ApolloError;
}
