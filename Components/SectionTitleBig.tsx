import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	div {
		font-size: 10rem;
		line-height: 10.3rem;

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
			top: -13vh;
			right: 29vw;

			z-index: -2;

			width: 23rem;
			height: 23rem;
			border-radius: 50%;

			background-color: var(--dark-grey);
		}
	}

	.left {
		text-align: left;
	}
	.right {
		text-align: right;
	}
`;

const s = { Wrapper };

interface SectionTitlebigProps {
	title: string;
	topBottomPos: "left" | "right";
	middlePos: "left" | "right";
}

export default function SectionTitleBig(props: SectionTitlebigProps) {
	const { title, topBottomPos, middlePos } = props;

	const firstElemClass = topBottomPos + " first";

	return (
		<s.Wrapper>
			<div className={firstElemClass}>
				<span>{title}</span>
			</div>
			<div className={middlePos}>
				<span>{title}</span>
			</div>
			<div className={topBottomPos}>
				<span>{title}</span>
			</div>
		</s.Wrapper>
	);
}
