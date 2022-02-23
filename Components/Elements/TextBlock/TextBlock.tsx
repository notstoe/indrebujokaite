import { motion, Variants } from 'framer-motion';

import { useInView } from '@hooks/useInView';
import { s } from './TextBlock.styles';

interface TextBlockProps {
	content: string;
	alignleft: boolean;
}

export default function TextBlock({ content, alignleft }: TextBlockProps) {
	const [elementRef, inView] = useInView<HTMLDivElement>(
		{ threshold: 0.4 },
		true
	);

	const sectionVariants: Variants = {
		hidden: {
			opacity: 0,
			x: alignleft ? -80 : 80,
			transition: { duration: 0.8 },
		},

		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8 },
		},
	};

	// considering line breaks from string that comes back from backend
	const textArrayWithLineBreaks: Array<string> = content.split('\n');

	return (
		<s.TxtWrapper
			ref={elementRef}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			alignleft={alignleft ? 'alignleft' : undefined}
			variants={sectionVariants}
		>
			{textArrayWithLineBreaks.map((lineStr, index) => (
				<motion.p variants={sectionVariants} key={index}>
					{lineStr}
				</motion.p>
			))}
		</s.TxtWrapper>
	);
}
