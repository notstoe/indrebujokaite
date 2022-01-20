import { ContactInfo } from 'types/index.types';
import { ParsedUrlQuery } from 'querystring';

export type PaintingFullInfo = {
	title: string;
	painting_collection: { collectionTitle: string };
	description: string;
	price: Number;
	picture: {
		url: string;
	}[];
	available: boolean;
};

export interface DataSinglePage {
	data: {
		paintings: PaintingFullInfo[];
		contact: ContactInfo;
	};
}

export interface SinglePaintingPageProps {
	contact: ContactInfo;
	painting: PaintingFullInfo;
}

export interface IParams extends ParsedUrlQuery {
	id: string;
}

export interface dataAllPaintingsIds {
	data: { paintings: { id: string }[] };
}
