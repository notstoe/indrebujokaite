import brand from '@helpers/brand';
import styled, { css } from 'styled-components';
import { until, Device } from '@helpers/media';

const Wrapper = styled.div<{ altMode: boolean }>`
	display: flex;
	flex-direction: column;

	position: relative;

	margin-top: 10rem;
	margin-bottom: 10rem;

	div {
		font-size: 10rem;
		line-height: 10rem;
	}

	&::after {
		content: '';
		display: block;
		position: absolute;

		z-index: -2;

		width: 23rem;
		height: 23rem;

		border-radius: 50%;

		background-color: ${brand.grey.dark};
	}

	${({ altMode }) =>
		altMode
			? css`
					&::after {
						bottom: -15%;
						right: 50%;
					}

					.edge {
						text-align: right;
					}
					.middle {
						text-align: left;
					}
			  `
			: css`
					&::after {
						top: -13%;
						right: 27%;
					}

					.edge {
						text-align: left;
					}
					.middle {
						text-align: right;
					}
			  `}

	@media ${until(Device.Tablet)} {
		div {
			font-size: 6.5rem;
			line-height: normal;
		}

		&::after {
			width: 18rem;
			height: 18rem;
		}
	}

	@media ${until(Device.MobileLarge)} {
		div {
			font-size: 4.5rem;
		}
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
