import { s } from './Header.styles';

import Link from 'next/link';

const headerVariants = {
	hidden: { y: '-50vh' },
	visible: {
		y: 0,
		transition: { type: 'spring', delay: 2, duration: 1.2 },
	},
};

export default function Header() {
	return (
		<s.StyledHeader
			variants={headerVariants}
			initial='hidden'
			animate='visible'
		>
			<Link href='#intro'>Home</Link>
			<Link href='#about'>About</Link>
			<div>
				<Link href='#intro' passHref>
					<a className='ownerName'>Indreta Art</a>
				</Link>
			</div>
			<Link href='#projects'>Projects</Link>
			<Link href='#contact'>Contact</Link>
		</s.StyledHeader>
	);
}
