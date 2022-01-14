import { gql, useQuery } from '@apollo/client';

import { useInView } from '@hooks/useInView';

import { ss } from 'Components/Elements/Loading/loading.styles';
import { motion, Variants } from 'framer-motion';
import { s } from './Contact.styles';

import { DataContact } from './Contact.types';

import Copy from '@assets/copy.svg';
import Fb from '@assets/Fb.svg';
import Ig from '@assets/Ig.svg';

export default function Contact() {
	const [elementRef, inView] = useInView({ threshold: 0.35 }, true);

	const CONTACT_INFO_QUERY = gql`
		query CONTACT_INFO {
			contact {
				name
				email
				phone
				location_based
				shipping_info
				instagram
				facebook
			}
		}
	`;

	const { data, loading, error } = useQuery<DataContact>(CONTACT_INFO_QUERY);

	if (loading) return <ss.Loading>Loading...</ss.Loading>;
	if (error) {
		console.log([error, error.message]);
		return null;
	}

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

	return (
		<s.Wrapper id='contact' ref={elementRef}>
			<s.ContactInfo initial='hidden' animate={inView ? 'visible' : 'hidden'}>
				<motion.span
					variants={contactInfoVariants}
					className='author'
					transition={{ duration: 1 }}
				>
					{data?.contact.name}
				</motion.span>
				<motion.span
					transition={{ duration: 1, delay: 0.4 }}
					variants={contactInfoVariants}
				>
					{data?.contact.email}
					<s.SvgEmailWrapper
						onClick={() =>
							navigator.clipboard.writeText(data?.contact.email ?? '')
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
					{data?.contact.phone}
				</motion.span>
				<motion.span
					transition={{ duration: 1, delay: 0.8 }}
					variants={contactInfoVariants}
				>
					{data?.contact.location_based}
				</motion.span>
				<s.ExternalLinks
					variants={opacityChange}
					transition={{ duration: 0.8, delay: 1.8 }}
				>
					<s.SvgFbWrapper href={data?.contact.facebook}>
						<Fb />
					</s.SvgFbWrapper>
					<s.SvgIgWrapper href={data?.contact.instagram}>
						<Ig />
					</s.SvgIgWrapper>
				</s.ExternalLinks>
			</s.ContactInfo>
			<motion.h1>
				<s.BackgroundCircle
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={circleVariants}
					transition={{ duration: 1, delay: 1.4 }}
				/>
				GET IN TOUCH
			</motion.h1>
		</s.Wrapper>
	);
}
