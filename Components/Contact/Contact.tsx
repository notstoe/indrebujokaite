import { s } from './Contact.styles';

export default function Contact() {
	return (
		<s.Wrapper>
			<s.ContactInfo>
				<span className='author'>Indrė Bujokaitė</span>
				<span>
					Email: <br />
					indreta.art@example.com
				</span>
				<span>
					Phone:
					<br /> (+44) 999999999
				</span>
				<span>Based in Liverpool, UK</span>
				<s.ExternalLinks>
					<a href=''>Ig</a>
					<a href=''>Fb</a>
				</s.ExternalLinks>
			</s.ContactInfo>
			<h1>GET IN TOUCH</h1>
		</s.Wrapper>
	);
}
