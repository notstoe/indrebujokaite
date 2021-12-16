import { ApolloError, gql, useQuery } from "@apollo/client";

import styled from "styled-components";

import SectionTitleBig from "./SectionTitleBig";

const SectionWrapper = styled.section`
	width: 95%;
	max-width: 1500px;
	margin: 0 auto;
	margin-top: 8rem;

	padding: 0;

	font-weight: lighter;
`;
const InnerContentDiv = styled.div`
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

const s = { StyledImage, InnerContentDiv, SectionWrapper };

interface aboutMeInfo {
	about_me_txt: string;
	ProfilePic: {
		id: string;
		url: string;
	};
}

export interface DataA {
	about: aboutMeInfo;
	loading: boolean;
	error?: ApolloError;
}

export default function About() {
	const ABOUT_ME_QUERY = gql`
		query ABOUT_ME_TXT {
			about {
				about_me_txt
				ProfilePic {
					url
				}
			}
		}
	`;

	const { data, loading, error } = useQuery<DataA>(ABOUT_ME_QUERY);

	if (loading) return <div style={{ textAlign: "center" }}>Loading...</div>;
	if (error)
		return (
			<div style={{ textAlign: "center" }}>
				Something went wrong... Try refreshing the page
			</div>
		);

	return (
		<s.SectionWrapper>
			<SectionTitleBig title="ABOUT ME" topBottomPos="left" middlePos="right" />
			<s.InnerContentDiv>
				<span>{data?.about.about_me_txt}</span>
				<s.StyledImage
					src={data?.about.ProfilePic.url}
					alt="Artist's Profile"
				/>
			</s.InnerContentDiv>
		</s.SectionWrapper>
	);
}
