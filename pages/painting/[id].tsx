import apollo from '@lib/apolloClient';
import SinglePainting from 'Components/SinglePainting/SinglePainting';
import { revalidateStaticPages } from 'config';

import {
	ALL_PAINTINGS_IDS_QUERY,
	SINGLE_PAINTINGS_QUERY,
} from 'queries/id.queries';

import {
	DataSinglePage,
	IParams,
	SinglePaintingPageProps,
	dataAllPaintingsIds,
} from 'types/id.types';

export default function SinglePaintingPage({
	contact,
	painting,
}: SinglePaintingPageProps) {
	return <SinglePainting contactData={contact} paintingData={painting} />;
}

export async function getStaticPaths() {
	const { data }: dataAllPaintingsIds = await apollo.query({
		query: ALL_PAINTINGS_IDS_QUERY,
	});

	const paths = data.paintings.map((painting) => ({
		params: { id: painting.id },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: IParams }) {
	const { id } = params as IParams;

	const { data }: DataSinglePage = await apollo.query({
		query: SINGLE_PAINTINGS_QUERY,
		variables: {
			paintingId: id,
		},
	});

	return {
		props: {
			painting: data.paintings[0],
			contact: data.contact,
		},
		revalidate: revalidateStaticPages,
	};
}
