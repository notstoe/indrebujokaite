import Head from 'next/head';

interface SeoProps {
	SeoInfo: {
		title: string;
		description: string;
		imageUrl?: string;
	};
}

export default function SeoHead({ SeoInfo }: SeoProps) {
	const { title, description, imageUrl } = SeoInfo;

	return (
		<Head>
			<title>{title}</title>
			<meta property='og:title' content={title} />

			<meta name='description' content={description} />
			<meta property='og:description' content={description} />

			{imageUrl && <meta property='og:image' content={imageUrl} />}
		</Head>
	);
}
