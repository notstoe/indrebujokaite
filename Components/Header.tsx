import styled from "styled-components";

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 1;

	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 90%;
	max-width: 1500px;
	height: 10vh;
	max-height: 80px;

	margin: 0 auto;

	color: var(--fullwhite);

	font-family: "Cormorant Garamond";

	div {
		flex: 0.7;

		text-align: center;
	}

	span {
		font-size: 1.2rem;
		cursor: pointer;

		:hover {
			color: var(--light-grey);
		}

		&.ownerName {
			font-size: 1.7rem;
			text-align: center;
		}
	}
`;

const s = { StyledHeader };

export default function Header() {
	return (
		<s.StyledHeader>
			{/* FIXME - make it link to each part of the page later on */}
			<span className="home">Home</span>
			<span>About</span>
			<div>
				<span className="ownerName">Indreta Art</span>
			</div>
			<span>Projects</span>
			<span className="contact">Contact</span>
		</s.StyledHeader>
	);
}
