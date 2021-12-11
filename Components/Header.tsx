import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 10vh;
	max-height: 80px;

	color: var(--fullwhite);
	span {
		padding: 0 3rem;

		font-size: 1.1rem;
		cursor: pointer;

		:hover {
			color: var(--dark-grey);
		}

		&.ownerName {
			flex: 1;

			font-size: 1.6rem;
			text-align: center;
		}
	}
`;

export default function Header() {
	return (
		<StyledHeader>
			<span>Home</span>
			<span>About</span>
			<span className="ownerName">Indrė Bujokaitė</span>
			<span>Projects</span>
			<span>Contact</span>
		</StyledHeader>
	);
}
