import { s } from './Header.styles';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTransform, useViewportScroll } from 'framer-motion';

// TODO - make it link properly to home page links when in single product

export default function Header() {
	const { scrollYProgress } = useViewportScroll();

	const headerShow = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

	// const router = useRouter();
	// const { id } = router.query;

	return (
		<s.StyledHeader style={{ opacity: headerShow }}>
			<Link href='/#home'>Home</Link>
			<Link href='/#about'>About</Link>
			<div>
				<Link href='/#home' passHref>
					<a className='ownerName'>Indreta Art</a>
				</Link>
			</div>
			<Link href='/#projects'>Projects</Link>
			<Link href='/#contact'>Contact</Link>
		</s.StyledHeader>
	);
}
