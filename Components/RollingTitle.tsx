import styled, { css } from "styled-components";

const Wrapper = styled.div<{ altMode: boolean }>`
	display: flex;
	flex-direction: column;

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

	.first {
		position: relative;

		::after {
			content: "";
			display: block;
			position: absolute;

			${({ altMode }) =>
				altMode
					? css`
							top: 108%;
							right: 50%;
					  `
					: css`
							top: -35%;
							right: 30%;
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
	}

	.top,
	.bottom {
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
			<div className="top first">
				<span>{title}</span>
			</div>
			<div className="middle">
				<span>{title}</span>
			</div>
			<div className="bottom">
				<span>{title}</span>
			</div>
		</s.Wrapper>
	);
}
