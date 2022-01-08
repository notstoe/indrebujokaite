import { ApolloError, gql, useQuery } from '@apollo/client';
import { until, Device } from '@helpers/media';
import brand from '@helpers/brand';
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

		.title {
			font-weight: normal;
			font-size: 3rem;
			align-self: center;
		}

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

			background-color: ${brand.grey.dark};
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

		.title {
			padding-left: 2rem;
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

const s = { StyledImage, SingleDisplayWrapper, DisplaysWrapper };

enum Collection {
	LANDSCAPE = 'Landscape',
	MODERN_BLOCKS = 'Modern_Blocks',
	CONTEMPORARY_FINE_ART = 'Contemporary_Fine_art',
}

interface PaintingD {
	paintings: {
		id: string;
		title: string;
		collection_type: Collection;
		picture: {
			url: string;
		}[];
	}[];
}

interface DataD {
	displayPaintings: PaintingD[];
	loading: boolean;
	error?: ApolloError;
}

export default function PaintingDisplay() {
	const DISPLAY_PAINTINGS_QUERY = gql`
		query DISPLAY_PAINTINGS {
			displayPaintings {
				paintings {
					id
					title
					collection_type
					picture {
						url
					}
				}
			}
		}
	`;

	const { data, loading, error } = useQuery<DataD>(DISPLAY_PAINTINGS_QUERY);

	if (loading) return <div style={{ textAlign: 'center' }}>Loading...</div>;

	if (error)
		return (
			<div style={{ textAlign: 'center', fontSize: '2rem' }}>
				Something went wrong... Try refreshing the page.
			</div>
		);

	const displayPaintingsDivs = data?.displayPaintings[0].paintings.map(
		(painting, index) => {
			const collectionType = painting.collection_type.split('_').join(' ');

			return (
				<s.SingleDisplayWrapper key={painting.id} inverted={index % 2 !== 0}>
					<div>
						<span>{collectionType}</span>
						<span className="title">{painting.title}</span>
						<span className="author">Indrė Bujokaitė</span>
					</div>
					<StyledImage
						src={painting.picture[0].url}
						alt={`${painting.title} painting`}
					/>
				</s.SingleDisplayWrapper>
			);
		}
	);

	return <s.DisplaysWrapper>{displayPaintingsDivs}</s.DisplaysWrapper>;
}
