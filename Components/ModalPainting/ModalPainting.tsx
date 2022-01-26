import { Variants } from 'framer-motion';
import { s } from './ModalPainting.styles';
import Image from 'next/image';

const opacityVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

interface ModalProps {
	url: string;
	handleModalClick: () => void;
	paintingTitle: string;
}

export default function ModalPainting({
	url,
	handleModalClick,
	paintingTitle,
}: ModalProps) {
	return (
		<s.Overlay
			initial='hidden'
			animate='visible'
			variants={opacityVariants}
			transition={{ duration: 0.3 }}
			onClick={handleModalClick}
		>
			<s.ImageWrapper variants={opacityVariants} transition={{ duration: 0.6 }}>
				<Image
					src={url}
					layout='fill'
					objectFit='contain'
					alt={`${paintingTitle} painting`}
				/>
			</s.ImageWrapper>
		</s.Overlay>
	);
}
