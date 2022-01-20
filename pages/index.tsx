import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from 'Components/Contact/Contact';
import Head from 'next/head';
import apollo from '@lib/apolloClient';
import { revalidateStaticPages } from 'config';

import { DataHomePage, HomePageProps } from '../types/index.types';

import { HOME_PAGE_DATA_QUERY } from '../queries/index.queries';

export default function Home({
	about,
	collectionsPaintings,
	featuredPaintings,
	contact,
}: HomePageProps) {
	return (
		<>
			<Head>
				<title>Indreta Art</title>
			</Head>
			<Intro backgroundImgUrl={about.background_intro_picture.url} />
			<About aboutData={about} />
			<Projects
				collectionsPaintings={collectionsPaintings}
				featuredPaintings={featuredPaintings}
			/>
			<Contact contactData={contact} />
		</>
	);
}

export async function getStaticProps() {
	const { data }: DataHomePage = await apollo.query({
		query: HOME_PAGE_DATA_QUERY,
	});

	return {
		props: {
			about: data.about,
			collectionsPaintings: data.collectionsPaintings,
			featuredPainting: data.featuredPainting.paintings,
			contact: data.contact,
		},
		revalidate: revalidateStaticPages,
	};
}
