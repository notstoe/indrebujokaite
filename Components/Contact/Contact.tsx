import { useInView } from '@hooks/useInView';

import { motion, Variants } from 'framer-motion';
import { s } from './Contact.styles';

import { ContactInfo } from 'types/index.types';

import Copy from '@assets/copy.svg';
import Fb from '@assets/Fb.svg';
import Ig from '@assets/Ig.svg';

const contactInfoVariants: Variants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0 },
};

const opacityChange: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const circleVariants: Variants = {
	hidden: { scale: 0, y: -15, opacity: 0 },
	visible: { scale: 1, y: 0, opacity: 1 },
};

export default function Contact({ contactData }: { contactData: ContactInfo }) {
	const [elementRef, inView] = useInView({ threshold: 0.35 }, true);

	return (
		<s.Wrapper id='contact' ref={elementRef}>
			<s.ContactInfo initial='hidden' animate={inView ? 'visible' : 'hidden'}>
				<motion.span
					variants={contactInfoVariants}
					className='white'
					transition={{ duration: 1 }}
				>
					{contactData.name}
				</motion.span>
				{contactData.call_to_action_small_txt && (
					<motion.span
						variants={contactInfoVariants}
						className='white'
						transition={{ duration: 1 }}
					>
						{contactData.call_to_action_small_txt}
					</motion.span>
				)}
				<motion.span
					transition={{ duration: 1, delay: 0.4 }}
					variants={contactInfoVariants}
				>
					{contactData.email}
					<s.SvgEmailWrapper
						onClick={() =>
							navigator.clipboard.writeText(contactData.email ?? '')
						}
					>
						<Copy />

						<s.TxtHelper>Copy</s.TxtHelper>
					</s.SvgEmailWrapper>
				</motion.span>
				<motion.span
					transition={{ duration: 1, delay: 0.6 }}
					variants={contactInfoVariants}
				>
					{contactData.phone}
				</motion.span>
				<motion.span
					transition={{ duration: 1, delay: 0.8 }}
					variants={contactInfoVariants}
				>
					{contactData.location_based}
				</motion.span>
				<s.ExternalLinks
					variants={opacityChange}
					transition={{ duration: 0.8, delay: 1.8 }}
				>
					<s.SvgFbWrapper href={contactData.facebook}>
						<Fb />
					</s.SvgFbWrapper>
					<s.SvgIgWrapper href={contactData.instagram}>
						<Ig />
					</s.SvgIgWrapper>
				</s.ExternalLinks>
			</s.ContactInfo>
			<motion.h3>
				<s.BackgroundCircle
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={circleVariants}
					transition={{ duration: 1, delay: 1.4 }}
				/>
				GET IN TOUCH
			</motion.h3>
		</s.Wrapper>
	);
}
