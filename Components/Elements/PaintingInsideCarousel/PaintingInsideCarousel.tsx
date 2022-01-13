import { getOptimizedCloudinaryUrl } from '@helpers/getOptimizedCloudinaryUrl';
import { useState } from 'react';

import { Painting } from 'Components/Projects/Projects.types';

import { s } from './PaintingInsideCarousel.styles';

export default function PaintingInsideCarousel({
	collectionTitle,
	painting,
}: {
	collectionTitle?: string;
	painting?: Painting;
}) {
	const [showPaintingInfo, setShowPaintingInfo] = useState<boolean>(false);

	const optimizedUrl = getOptimizedCloudinaryUrl(
		painting?.picture[0].url,
		'medium'
	);

	return (
		<s.Painting
			onMouseEnter={() => setShowPaintingInfo(true)}
			onMouseLeave={() => setShowPaintingInfo(false)}
			href=''
		>
			<s.StyledImage src={optimizedUrl} alt={`${painting?.title} painting`} />
			{showPaintingInfo && (
				<s.PaintingHoverInfo>
					<span>{collectionTitle}</span>
					<span>{painting?.title}</span>
					<span>Indrė Bujokaitė</span>
				</s.PaintingHoverInfo>
			)}
		</s.Painting>
	);
}
