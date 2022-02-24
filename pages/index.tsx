import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Contact from 'Components/Contact/Contact';
import SeoHead, { SeoProps } from 'Components/Head/SeoHead';
import Portfolio from '../Components/Portfolio/Portfolio';

import { DataHomePage, HomePageProps } from '../types/index.types';
import { HOME_PAGE_DATA_QUERY } from '../queries/index.queries';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { revalidateStaticPages } from 'config';

import apollo from '@lib/apolloClient';

export default function Home({
	about,
	collectionsPaintings,
	featuredPaintings,
	contact,
}: HomePageProps) {
	const optimizedImgUrl = getOptimizedCloudinaryUrl(
		about.background_intro_picture.url,
		'small'
	);

	const seoInfo: SeoProps = {
		title: 'Indreta Art | Acrylic Painting',
		description: `Original acrylic paintings and prints. By Indre Bujokaite`,
		imageUrl: optimizedImgUrl,
		websiteUrl: 'https://indreta.art',
	};

	return (
		<>
			<SeoHead
				title={seoInfo.title}
				description={seoInfo.description}
				imageUrl={seoInfo.imageUrl}
				websiteUrl={seoInfo.websiteUrl}
			/>
			<Intro backgroundImgUrl={about.background_intro_picture.url} />
			<About aboutData={about} />
			<Portfolio
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
			featuredPaintings: data.featuredPainting.paintings,
			contact: data.contact,
		},
		revalidate: revalidateStaticPages,
	};
}
