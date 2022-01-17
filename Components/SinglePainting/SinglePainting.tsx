import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import { useInView } from '@hooks/useInView';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';

import { s } from './SinglePainting.styles';
import { ss } from 'Components/Elements/Loading/loading.styles';
import { motion, Variants } from 'framer-motion';

import { DataSinglePage } from './SinglePainting.types';

import Copy from '@assets/copy.svg';
import Fb from '@assets/Fb.svg';
import Ig from '@assets/Ig.svg';

const circleVariants: Variants = {
	hidden: { scale: 0, y: -15, opacity: 0 },
	visible: { scale: 1, y: 0, opacity: 1 },
};

const paintingInfoVariants: Variants = {
	hidden: { x: -80, opacity: 0 },
	visible: { x: 0, opacity: 1 },
};

const opacityVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};
const txtWrapperVariants: Variants = {
	hiddenLeft: { opacity: 0, x: -80 },
	hiddenRight: { opacity: 0, x: 80 },
	visible: { opacity: 1, x: 0 },
};

const textTransition = { type: 'tween', duration: 1 };
const circleTransition = { duration: 1.5, delay: 0.6 };

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

export default function SinglePainting({ paintingId }: { paintingId: string }) {
	const [currentPicture, setCurrentPicture] = useState('');

	const [elementRef, inView] = useInView<HTMLDivElement>({ threshold: 0.45 });

	const [elementRef2, inView2] = useInView<HTMLDivElement>({ threshold: 0.45 });

	const [elementRef3, inView3] = useInView<HTMLDivElement>({ threshold: 0.45 });

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

	const initialPicture = getOptimizedCloudinaryUrl(
		data?.paintings[0].picture[0].url,
		'large'
	);

	const thumbnailsDivs = data?.paintings[0].picture.map((picture, index) => {
		const optimizedThumbnailUrl = getOptimizedCloudinaryUrl(
			picture.url,
			'thumbnail'
		);

		return (
			<s.StyledThumbnail
				key={index}
				onClick={() => handleThumbnailClick(picture.url)}
			>
				<Image
					src={optimizedThumbnailUrl}
					alt='painting thumbnail'
					layout='fill'
					objectFit='contain'
				/>
			</s.StyledThumbnail>
		);
	});

	function handleThumbnailClick(url: string): void {
		setCurrentPicture(getOptimizedCloudinaryUrl(url, 'large'));
	}

	return (
		<s.Wrapper>
			<Head>
				<title>Indreta | {data?.paintings[0].title}</title>
			</Head>
			<s.PaintingDisplay>
				<motion.section initial='hidden' animate='visible'>
					<s.BackgroundCircle
						radius={{ normal: '12rem', mobile: '10rem' }}
						positioning={{ top: '13%', left: '11%' }}
						transition={{ duration: 1.2, delay: 0.6 }}
						variants={circleVariants}
					/>
					<motion.span
						transition={{ duration: 1.7, delay: 0.6 }}
						variants={paintingInfoVariants}
					>
						{data?.paintings[0].painting_collection.collectionTitle}
					</motion.span>
					<s.Title
						transition={{ duration: 1.7, delay: 0.4 }}
						variants={paintingInfoVariants}
					>
						{data?.paintings[0].title}
					</s.Title>
					<motion.span
						transition={{ duration: 1.7, delay: 0.2 }}
						variants={paintingInfoVariants}
						className='author'
					>
						Indrė Bujokaitė
					</motion.span>
				</motion.section>
				<s.StyledImageWrapper
					initial='hidden'
					animate='visible'
					variants={opacityVariants}
					transition={{ duration: 3 }}
				>
					<Image
						src={currentPicture.length > 0 ? currentPicture : initialPicture}
						layout='fill'
						objectFit='contain'
						alt={`${data?.paintings[0].title} painting`}
					/>
				</s.StyledImageWrapper>
				<s.ThumbnailsWrapper
					initial='hidden'
					animate='visible'
					variants={opacityVariants}
				>
					{thumbnailsDivs}
				</s.ThumbnailsWrapper>
			</s.PaintingDisplay>
			<s.TextWrapper
				ref={elementRef}
				initial='hidden'
				animate={inView ? 'visible' : 'hiddenLeft'}
				variants={txtWrapperVariants}
				transition={textTransition}
			>
				<h2>
					Description
					<s.BackgroundCircle
						initial='hidden'
						animate={inView ? 'visible' : 'hidden'}
						variants={circleVariants}
						transition={circleTransition}
						radius={{ normal: '8rem', mobile: '6rem' }}
						positioning={{
							top: '-55%',
							left: '4.5%',
							topMobile: '-35%',
							leftMobile: '9%',
						}}
					/>
				</h2>
				<p>{data?.paintings[0].description}</p>
				<span>{`£${data?.paintings[0].price}`}</span>
			</s.TextWrapper>
			<s.TextWrapper
				alignRight={true}
				ref={elementRef2}
				initial='hidden'
				animate={inView2 ? 'visible' : 'hiddenRight'}
				variants={txtWrapperVariants}
				transition={textTransition}
			>
				<h2>
					Contact
					<s.BackgroundCircle
						initial='hidden'
						animate={inView2 ? 'visible' : 'hidden'}
						variants={circleVariants}
						transition={circleTransition}
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
					{data?.contact.email}{' '}
					<s.SvgEmailWrapper
						onClick={() =>
							navigator.clipboard.writeText(data?.contact.email ?? '')
						}
					>
						<Copy />

						<s.TxtHelper>Copy</s.TxtHelper>
					</s.SvgEmailWrapper>
				</p>
				<p className='phone'>{data?.contact.phone}</p>
				<s.ExternalLinks
					variants={opacityVariants}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<s.SvgFbWrapper href={data?.contact.facebook}>
						<Fb />
					</s.SvgFbWrapper>
					<s.SvgIgWrapper href={data?.contact.instagram}>
						<Ig />
					</s.SvgIgWrapper>
				</s.ExternalLinks>
			</s.TextWrapper>
			<s.TextWrapper
				ref={elementRef3}
				initial='hidden'
				animate={inView3 ? 'visible' : 'hiddenLeft'}
				variants={txtWrapperVariants}
				transition={textTransition}
			>
				<h2>
					Where Am I
					<s.BackgroundCircle
						initial='hidden'
						animate={inView3 ? 'visible' : 'hidden'}
						variants={circleVariants}
						transition={circleTransition}
						radius={{ normal: '8rem', mobile: '6rem' }}
						positioning={{
							top: '-55%',
							left: '4.5%',
							topMobile: '-35%',
							leftMobile: '9%',
						}}
					/>
				</h2>
				<p>{data?.contact.location_based} </p>
				<p>{data?.contact.shipping_info}</p>
			</s.TextWrapper>
		</s.Wrapper>
	);
}
