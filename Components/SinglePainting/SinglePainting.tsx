import Image from 'next/image';
import { useState } from 'react';
import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';

import { s } from './SinglePainting.styles';
import { motion, Variants } from 'framer-motion';

import { ContactInfo } from 'types/index.types';
import { PaintingFullInfo } from 'types/id.types';

import Copy from '@assets/copy.svg';
import Fb from '@assets/Fb.svg';
import Ig from '@assets/Ig.svg';
import TextWrapperPaintingPage from 'Components/Elements/TextWrapperPaintingPage/TextWrapperPaintingPage';
import ModalPainting from 'Components/ModalPainting/ModalPainting';
import SeoHead from 'Components/Head/SeoHead';

const paintingInfoVariants: Variants = {
	hidden: { x: -80, opacity: 0 },
	visible: { x: 0, opacity: 1 },
};

const opacityVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const circleVariants: Variants = {
	hidden: { scale: 0, y: -15, opacity: 0 },
	visible: { scale: 1, y: 0, opacity: 1 },
};

const textWrapperCircleOptions = {
	description: {
		positioning: {
			top: '-55%',
			left: '4.5%',
			topMobile: '-35%',
			leftMobile: '9%',
		},
		radius: { normal: '8rem', mobile: '6rem' },
	},
	contact: {
		positioning: {
			top: '-60%',
			left: `87.5%`,
			topMobile: '-38%',
			leftMobile: '84%',
		},
		radius: { normal: '8rem', mobile: '6rem' },
	},
	location: {
		positioning: {
			top: '-55%',
			left: '4.5%',
			topMobile: '-35%',
			leftMobile: '9%',
		},
		radius: { normal: '8rem', mobile: '6rem' },
	},
};

interface SinglePaintingComponentProps {
	contactData: ContactInfo;
	paintingData: PaintingFullInfo;
}

export default function SinglePainting({
	contactData,
	paintingData,
}: SinglePaintingComponentProps) {
	const [currentPicture, setCurrentPicture] = useState('');
	const [showModal, setShowModal] = useState(false);

	const initialPicture = getOptimizedCloudinaryUrl(
		paintingData?.picture[0].url,
		'large'
	);

	const thumbnailsDivs = paintingData?.picture.map((picture, index) => {
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

	// considering line breaks from string that comes back from backend
	const descriptionArrayWithLineBreaks: Array<string> = paintingData.description.split(
		'\n'
	);

	const descriptionPTags: JSX.Element[] = descriptionArrayWithLineBreaks.map(
		(lineStr, index) => <p key={index}>{lineStr}</p>
	);

	function handlePaintingClick(): void {
		setShowModal((stateValue) => !stateValue);
	}

	const SeoInfo = {
		title: `Indreta | ${paintingData.title}`,
		description: `${paintingData.title} from the ${paintingData.painting_collection.collectionTitle}`,
		imageUrl: initialPicture,
	};

	return (
		<s.Wrapper>
			<SeoHead SeoInfo={SeoInfo} />
			<s.PaintingDisplay initial='hidden' animate='visible'>
				<motion.section>
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
						{paintingData.painting_collection.collectionTitle}
					</motion.span>
					<s.Title
						transition={{ duration: 1.7, delay: 0.4 }}
						variants={paintingInfoVariants}
					>
						{paintingData.title}
					</s.Title>
					<motion.span
						transition={{ duration: 1.7, delay: 0.2 }}
						variants={paintingInfoVariants}
						className='author'
					>
						Indrė Bujokaitė
					</motion.span>
				</motion.section>
				<s.ImageWrapper
					variants={opacityVariants}
					transition={{ duration: 3 }}
					onClick={handlePaintingClick}
				>
					<Image
						src={currentPicture.length > 0 ? currentPicture : initialPicture}
						layout='fill'
						objectFit='contain'
						alt={`${paintingData.title} painting`}
					/>
				</s.ImageWrapper>
				<s.ThumbnailsWrapper variants={opacityVariants}>
					{thumbnailsDivs}
				</s.ThumbnailsWrapper>
			</s.PaintingDisplay>
			<TextWrapperPaintingPage
				title='Description'
				fromLeft
				circleOptions={textWrapperCircleOptions.description}
			>
				{descriptionPTags}
				{paintingData.price && <p>{`£${paintingData.price}`}</p>}
				<p>{paintingData.available ? 'Available' : 'Unavailable'}</p>
			</TextWrapperPaintingPage>

			<TextWrapperPaintingPage
				title='Contact'
				fromLeft={false}
				circleOptions={textWrapperCircleOptions.contact}
			>
				<p>
					<s.SvgEmailWrapper
						onClick={() =>
							navigator.clipboard.writeText(contactData.email ?? '')
						}
					>
						<Copy />

						<s.TxtHelper>Copy</s.TxtHelper>
					</s.SvgEmailWrapper>
					{contactData.email}
				</p>
				<p>{contactData.phone}</p>
				<s.ExternalLinks
					variants={opacityVariants}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<s.SvgFbWrapper href={contactData.facebook}>
						<Fb />
					</s.SvgFbWrapper>
					<s.SvgIgWrapper href={contactData.instagram}>
						<Ig />
					</s.SvgIgWrapper>
				</s.ExternalLinks>
			</TextWrapperPaintingPage>
			<TextWrapperPaintingPage
				title='Where Am I'
				fromLeft
				circleOptions={textWrapperCircleOptions.location}
			>
				<p>{contactData.location_based} </p>
				<p>{contactData.shipping_info}</p>
			</TextWrapperPaintingPage>

			{showModal && (
				<ModalPainting
					handleModalClick={handlePaintingClick}
					paintingTitle={paintingData.title}
					url={currentPicture.length > 0 ? currentPicture : initialPicture}
				/>
			)}
		</s.Wrapper>
	);
}
