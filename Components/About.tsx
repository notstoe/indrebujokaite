import { gql, useQuery } from "@apollo/client";

import styled from "styled-components";

const StyledAboutSectionWrapper = styled.section`
	width: 95%;
	max-width: 1500px;
	margin: 0 auto;
	margin-top: 8rem;

	padding: 0;

	font-weight: lighter;

	display: flex;
	flex-direction: column;

	.title {
		font-size: 10rem;

		@media (max-width: 615px) {
			font-size: 6.5rem;
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
		line-height: 10rem;
		text-align: left;
	}
	.right {
		line-height: 10rem;
		text-align: right;
	}
`;

const StyledInnerContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	line-height: 1.9rem;
	text-align: right;

	margin-top: 10rem;

	max-width: 81rem;

	span {
		align-self: flex-end;

		width: 80%;
		max-width: 30rem;

		padding: 0 0.5rem 1rem 2rem;

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

interface DataA {
	about: {
		__typename: string;
		about_me_txt: string;
	};
}

export default function About() {
	const ABOUT_ME_QUERY = gql`
		query ABOUT_ME_TXT {
			about {
				about_me_txt
			}
		}
	`;

	const { data, loading, error } = useQuery<DataA>(ABOUT_ME_QUERY);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{JSON.stringify(error)}</div>;

	return (
		<StyledAboutSectionWrapper>
			<div className="left first title">
				<span>ABOUT ME</span>
			</div>
			<div className="right title">
				<span>ABOUT ME</span>
			</div>
			<div className="left title">
				<span>ABOUT ME</span>
			</div>
			<StyledInnerContentWrapper>
				<span>{data?.about.about_me_txt}</span>
				<StyledImage
					src="https://res.cloudinary.com/dowa8tjdi/image/upload/v1639500322/profile_2_nslztr.jpg"
					alt="Indre's picture"
				/>
			</StyledInnerContentWrapper>
		</StyledAboutSectionWrapper>
	);
}
