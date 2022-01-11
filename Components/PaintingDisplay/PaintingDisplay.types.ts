import { ApolloError } from '@apollo/client';

enum Collection {
	LANDSCAPE = 'Landscape',
	MODERN_BLOCKS = 'Modern_Blocks',
	CONTEMPORARY_FINE_ART = 'Contemporary_Fine_art',
}

export type Painting = {
	id: string;
	title: string;
	collection_type: Collection;
	picture: {
		url: string;
	}[];
};

interface PaintingD {
	paintings: Painting[];
}

export interface DataD {
	displayPaintings: PaintingD[];
	loading: boolean;
	error?: ApolloError;
}
