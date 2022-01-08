import styled from 'styled-components';

const SectionWrapper = styled.section`
	display: flex;
	flex-direction: column;

	width: 95%;
	max-width: 1500px;
	margin: 0 auto;

	padding: 0;

	font-weight: lighter;

	.description {
		align-self: center;

		display: flex;
		justify-content: flex-end;

		text-align: right;

		width: 95%;
		max-width: 76rem;
	}

	.description span {
		width: 85%;
		max-width: 25rem;
		line-height: 1.9rem;
		font-size: 1.35rem;
	}
`;

const StyledImage = styled.img`
	align-self: flex-start;

	width: 50%;
	max-width: 25rem;

	margin-top: 10rem;
	padding-left: 1rem;
`;

export const s = { StyledImage, SectionWrapper };
