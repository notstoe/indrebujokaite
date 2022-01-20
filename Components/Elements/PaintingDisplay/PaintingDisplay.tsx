import { s } from './PaintingDisplay.styles';

import SingleDisplay from 'Components/Elements/SingleDisplay/SingleDisplay';
import { Painting } from 'pages/index.types';

interface PaintingDisplayProps {
	featuredPaintings?: Painting[];
}

export default function PaintingDisplay({
	featuredPaintings,
}: PaintingDisplayProps) {
	const featuredPaintingsDivs = featuredPaintings?.map((painting, index) => {
		return (
			<SingleDisplay
				key={painting.id}
				painting={painting}
				inverted={index % 2 !== 0}
			/>
		);
	});

	return <s.DisplaysWrapper>{featuredPaintingsDivs}</s.DisplaysWrapper>;
}
