import { until, Device } from '@helpers/media';

import { brand } from '@helpers/brand';
import styled, { css } from 'styled-components';

const DisplaysWrapper = styled.section`
	padding: 3rem 0;
`;

const SingleDisplayWrapper = styled.div<{ inverted: boolean }>`
	width: 90%;
	max-width: 1150px;

	margin: 0 auto;
	padding-top: 8rem;
	padding-bottom: 8rem;

	display: flex;
	justify-content: space-between;

	gap: 4rem;

	${({ inverted }) =>
		inverted &&
		css`
			div {
				order: 2;
			}
		`}

	div {
		flex: 1;

		position: relative;

		display: flex;
		flex-direction: column;

		padding-top: 8.5%;

		font-size: 1.4rem;
		font-weight: lighter;

		.author {
			align-self: flex-end;
		}

		&::before {
			content: '';
			display: block;
			position: absolute;

			left: 11%;
			top: 13%;

			z-index: -2;

			width: 13rem;
			height: 13rem;

			border-radius: 50%;

			background-color: ${brand.grey.detail};
		}
	}

	@media ${until(Device.TabletLarge)} {
		flex-direction: column;

		div {
			order: 0;
			font-size: 1.2rem;
			align-self: center;

			&::before {
				width: 10rem;
				height: 10rem;
			}
		}
	}
`;

const StyledImage = styled.img`
	width: 95%;
	max-width: 40rem;

	@media ${until(Device.TabletLarge)} {
		align-self: center;
	}
`;

const Title = styled.span`
	font-weight: normal;
	font-size: 3rem;
	align-self: center;

	@media ${until(Device.TabletLarge)} {
		padding-left: 2rem;
	}
`;

export const s = {
	StyledImage,
	SingleDisplayWrapper,
	DisplaysWrapper,
	Title,
};
