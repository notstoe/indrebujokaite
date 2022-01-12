import { s } from './Footer.styles';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<s.Footer>
			<span>Copyright {currentYear} • Indrė Bujokaitė</span>
			<span>
				Developed by <a href='https://github.com/notstoe'>Gustavo Tonin</a>
			</span>
		</s.Footer>
	);
}
