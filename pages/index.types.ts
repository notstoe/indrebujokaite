export interface AboutMeInfo {
	about_me_txt: string;
	my_vision_txt: string;
	ProfilePic: {
		id: string;
		url: string;
	};
	background_intro_picture: {
		url: string;
	};
}

export type Painting = {
	id: string;
	title: string;
	painting_collection: { collectionTitle: string };
	picture: {
		url: string;
	}[];
};

export interface CollectionsPaintings {
	collectionTitle: string;
	paintings: Painting[];
}

export interface DataHomePage {
	data: {
		about: AboutMeInfo;
		collectionsPaintings: CollectionsPaintings[];
		featuredPainting: { paintings: Painting[] };
		contact: ContactInfo;
	};
}

export interface HomePageProps {
	about: AboutMeInfo;
	collectionsPaintings: CollectionsPaintings[];
	featuredPaintings: Painting[];
	contact: ContactInfo;
}

export type ContactInfo = {
	name: string;
	email: string;
	phone: string;
	location_based: string;
	shipping_info: string;
	instagram: string;
	facebook: string;
};
