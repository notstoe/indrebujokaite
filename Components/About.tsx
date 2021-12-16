import { ApolloError, gql, useQuery } from "@apollo/client";

import styled from "styled-components";
import RollingTitle from "./RollingTitle";

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

const s = { StyledImage, SectionWrapper };

interface aboutMeInfo {
	about_me_txt: string;
	ProfilePic: {
		id: string;
		url: string;
	};
	my_vision_txt: string;
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
				my_vision_txt
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
			<div style={{ textAlign: "center", fontSize: "2rem" }}>
				Something went wrong... Try refreshing the page.
			</div>
		);

	return (
		<s.SectionWrapper>
			<RollingTitle title="ABOUT ME" altMode={false} />
			<div className="description">
				<span>{data?.about.about_me_txt}</span>
			</div>
			<s.StyledImage src={data?.about.ProfilePic.url} alt="Artist's Profile" />
			<RollingTitle title="MY VISION" altMode={true} />
			<div className="description">
				<span>{data?.about.my_vision_txt}</span>
			</div>
		</s.SectionWrapper>
	);
}
