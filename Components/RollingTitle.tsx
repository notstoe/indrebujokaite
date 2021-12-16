import styled, { css } from "styled-components";

const Wrapper = styled.div<{ altMode: boolean }>`
	display: flex;
	flex-direction: column;

	position: relative;

	div {
		font-size: 10rem;
		line-height: 10rem;

		@media (max-width: 615px) {
			font-size: 6.5rem;
			line-height: normal;
		}

		@media (max-width: 450px) {
			font-size: 4.5rem;
		}
	}

	::after {
		content: "";
		display: block;
		position: absolute;

		${({ altMode }) =>
			altMode
				? css`
						bottom: -15%;
						right: 50%;
				  `
				: css`
						top: -13%;
						right: 27%;
				  `}

		z-index: -2;

		width: 23rem;
		height: 23rem;

		border-radius: 50%;

		background-color: var(--dark-grey);

		@media (max-width: 600px) {
			width: 18rem;
			height: 18rem;
		}
	}

	.edge {
		${({ altMode }) =>
			altMode
				? css`
						text-align: right;
				  `
				: css`
						text-align: left;
				  `}
	}
	.middle {
		${({ altMode }) =>
			altMode
				? css`
						text-align: left;
				  `
				: css`
						text-align: right;
				  `}
	}
`;

const s = { Wrapper };

interface RollingTitle {
	title: string;
	altMode: boolean;
}

export default function RollingTitle({ title, altMode }: RollingTitle) {
	return (
		<s.Wrapper altMode={altMode}>
			<div className="edge">
				<span>{title}</span>
			</div>
			<div className="middle">
				<span>{title}</span>
			</div>
			<div className="edge">
				<span>{title}</span>
			</div>
		</s.Wrapper>
	);
}
