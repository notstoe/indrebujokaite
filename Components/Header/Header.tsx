import { s } from './Header.styles';

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
			{/* FIXME - make it link to each part of the page later on */}
			<span>Home</span>
			<span>About</span>
			<div>
				<span className='ownerName'>Indreta Art</span>
			</div>
			<span>Projects</span>
			<span>Contact</span>
		</s.StyledHeader>
	);
}
