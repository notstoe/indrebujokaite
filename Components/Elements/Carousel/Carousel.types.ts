import { ApolloError } from '@apollo/client';

enum Collection {
	LANDSCAPE = 'Landscape',
	MODERN_BLOCKS = 'Modern_Blocks',
	COMTEMPORARY_FINE_ART = 'Comtemporary_Fine_art',
}

interface PaintingP {
	id: string;
	collection_type: Collection;
	picture: {
		url: string;
	}[];
}

export interface DataP {
	paintings: PaintingP[];
	loading: boolean;
	error?: ApolloError;
}
