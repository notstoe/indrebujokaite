import { s } from './Header.styles';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTransform, useViewportScroll } from 'framer-motion';

export default function Header() {
	const { scrollYProgress } = useViewportScroll();

	const router = useRouter();
	const { id } = router.query;

	const headerShow = useTransform(scrollYProgress, id ? [0, 0] : [0.05, 0.2], [
		0,
		1,
	]);

	return (
		<s.StyledHeader style={{ opacity: headerShow }}>
			<Link href='/#home'>Home</Link>
			<Link href='/#about'>About</Link>
			<div>
				<Link href='/#home' passHref>
					<a className='ownerName'>Indreta Art</a>
				</Link>
			</div>
			<Link href='/#portfolio'>Portfolio</Link>
			<Link href='/#contact'>Contact</Link>
		</s.StyledHeader>
	);
}
