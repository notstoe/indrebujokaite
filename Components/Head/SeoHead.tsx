import Head from 'next/head';

export interface SeoProps {
	title: string;
	description: string;
	imageUrl?: string;
	websiteUrl: string;
}

export default function SeoHead({
	title,
	description,
	imageUrl,
	websiteUrl,
}: SeoProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta property='og:title' content={title} />
			<meta property='og:site_name' content={title}></meta>

			<meta property='og:type' content='website' />
			<meta property='og:url' content={websiteUrl}></meta>

			<meta name='description' content={description} />
			<meta property='og:description' content={description} />

			{imageUrl && <meta property='og:image' content={imageUrl} />}
		</Head>
	);
}
