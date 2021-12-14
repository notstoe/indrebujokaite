import styled from "styled-components";

const StyledAboutSectionWrapper = styled.section`
	width: 95%;
	max-width: 1500px;
	margin: 0 auto;
	margin-top: 8rem;

	padding: 0;

	font-size: 10rem;
	font-weight: lighter;

	display: flex;
	flex-direction: column;

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
		font-weight: lighter;
	}
`;

const StyledImage = styled.img`
	align-self: flex-start;

	width: 50%;
	max-width: 25rem;

	margin-top: 10rem;
	padding-left: 1rem;
`;

export default function About() {
	return (
		<StyledAboutSectionWrapper>
			<div className="left first">
				<span>ABOUT ME</span>
			</div>
			<div className="right">
				<span>ABOUT ME</span>
			</div>
			<div className="left">
				<span>ABOUT ME</span>
			</div>
			<StyledInnerContentWrapper>
				<span>
					{/* FIXME - fetch from backend the "about me" txt */}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna
					lacus, mollis vitae dignissim in, molestie id odio. Cras non ipsum
					eget tortor euismod sodales at sed nunc. Duis eu auctor ex. Integer
					finibus, est sed rhoncus sodales, diam dui consectetur sem, nec cursus
					tortor tellus at est. Sed in ligula gravida, luctus velit vitae,
					ultricies sem. Maecenas malesuada tortor vel ipsum sagittis semper.
					Aliquam mattis et odio sit amet sodales.
				</span>
				<StyledImage
					src="https://res.cloudinary.com/dowa8tjdi/image/upload/v1639500322/profile_2_nslztr.jpg"
					alt="Indre's picture"
				/>
			</StyledInnerContentWrapper>
		</StyledAboutSectionWrapper>
	);
}
