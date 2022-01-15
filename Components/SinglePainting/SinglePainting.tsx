import Image from 'next/image';

import { s } from './SinglePainting.styles';

import Copy from '@assets/copy.svg';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { gql, useQuery } from '@apollo/client';
import { DataSinglePage } from './SinglePainting.types';
import { ss } from 'Components/Elements/Loading/loading.styles';

export default function SinglePainting({ paintingId }: { paintingId: string }) {
	const SINGLE_PAINTINGS_QUERY = gql`
		query SINGLE_PAINTING_QUERY($paintingId: String) {
			paintings(where: { id: $paintingId }) {
				title
				painting_collection {
					collectionTitle
				}
				description
				price
				picture {
					url
				}
			}
			contact {
				email
				phone
				instagram
				facebook
				location_based
				shipping_info
			}
		}
	`;

	const { data, loading, error } = useQuery<DataSinglePage>(
		SINGLE_PAINTINGS_QUERY,
		{
			variables: { paintingId },
		}
	);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

	const mockedPainting = {
		id: '61d5b87df2d5726e461c2c4c',
		title: 'Lorem Ipsum',
		collection: 'Contemporary Fine Art',
		description:
			'Sed in ligula gravida, luctus velit vitae, ultricies sem. Maecenas malesuada tortor vel ipsum sagittis semper. Aliquam mattis et odio sit amet sodales.',
		price: 800,
		pictureUrl: [
			'https://res.cloudinary.com/dowa8tjdi/image/upload/v1637685777/indrebujokaite/DSC_0840_2_6930451a7d.jpg',
			'https://res.cloudinary.com/dowa8tjdi/image/upload/v1637685777/indrebujokaite/DSC_0840_2_6930451a7d.jpg',
			'https://res.cloudinary.com/dowa8tjdi/image/upload/v1637685777/indrebujokaite/DSC_0840_2_6930451a7d.jpg',
		],
	};
	const mockedContact = {
		email: 'Indre.bujokaite@example.com',
		phone: '+44 999999999',
		location_based: 'Based in Liverpool, UK.',
		shipping_info: 'Shipping only to the UK.',
	};

	const thumbnailsDivs = data?.paintings[0].picture.map((picture, index) => {
		const optimizedThumbnailUrl = getOptimizedCloudinaryUrl(
			picture.url,
			'thumbnail'
		);

		return (
			<s.StyledThumbnail key={index}>
				<Image
					src={optimizedThumbnailUrl}
					alt='painting thumbnail'
					layout='fill'
					objectFit='contain'
				/>
			</s.StyledThumbnail>
		);
	});

	const optimizedUrl = getOptimizedCloudinaryUrl(
		data?.paintings[0].picture[0].url,
		'large'
	);

	return (
		<s.Wrapper>
			<s.PaintingDisplay>
				<section>
					<s.BackgroundCircle
						radius={{ normal: '12rem', mobile: '10rem' }}
						positioning={{ top: '13%', left: '11%' }}
					/>
					<span>{mockedPainting.collection}</span>
					<s.Title>{mockedPainting.title}</s.Title>
					<span className='author'>Indrė Bujokaitė</span>
				</section>
				<s.StyledImageWrapper>
					<Image
						src={optimizedUrl}
						layout='fill'
						objectFit='contain'
						alt={`${mockedPainting.title} painting`}
					/>
				</s.StyledImageWrapper>
				<s.ThumbnailsWrapper>{thumbnailsDivs}</s.ThumbnailsWrapper>
			</s.PaintingDisplay>
			<s.TextWrapper>
				<h2>
					Description
					<s.BackgroundCircle
						radius={{ normal: '8rem', mobile: '6rem' }}
						positioning={{
							top: '-55%',
							left: '4.5%',
							topMobile: '-35%',
							leftMobile: '9%',
						}}
					/>
				</h2>
				<p>{mockedPainting.description}</p>
				<span>{`£${mockedPainting.price}`}</span>
			</s.TextWrapper>
			<s.TextWrapper alignRight={true}>
				<h2>
					Contact
					<s.BackgroundCircle
						radius={{ normal: '8rem', mobile: '6rem' }}
						positioning={{
							top: '-60%',
							left: `87.5%`,
							topMobile: '-38%',
							leftMobile: '84%',
						}}
					/>
				</h2>
				<p>
					{mockedContact.email}{' '}
					<s.SvgEmailWrapper
						onClick={() =>
							navigator.clipboard.writeText(mockedContact.email ?? '')
						}
					>
						<Copy />

						<s.TxtHelper>Copy</s.TxtHelper>
					</s.SvgEmailWrapper>
				</p>
				<p className='phone'>{mockedContact.phone}</p>
			</s.TextWrapper>
			<s.TextWrapper>
				<h2>
					Where Am I
					<s.BackgroundCircle
						radius={{ normal: '8rem', mobile: '6rem' }}
						positioning={{
							top: '-55%',
							left: '4.5%',
							topMobile: '-35%',
							leftMobile: '9%',
						}}
					/>
				</h2>
				<p>{mockedContact.location_based} </p>
				<p>{mockedContact.shipping_info}</p>
			</s.TextWrapper>
		</s.Wrapper>
	);
}
