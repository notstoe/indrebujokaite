import { s } from './Header.styles';

export default function Header() {
	return (
		<s.StyledHeader>
			{/* FIXME - make it link to each part of the page later on */}
			<span className='home'>Home</span>
			<span>About</span>
			<div>
				<span className='ownerName'>Indreta Art</span>
			</div>
			<span>Projects</span>
			<span className='contact'>Contact</span>
		</s.StyledHeader>
	);
}
