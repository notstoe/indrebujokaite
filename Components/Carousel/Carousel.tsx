import { ApolloError, gql, useQuery } from "@apollo/client";

import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";

const SingleCarouselWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	h1 {
		text-align: center;
		font-size: 2rem;
		font-weight: lighter;
	}
`;

const CarouselWrapper = styled.div`
	overflow: hidden;

	> div {
		display: flex;

		.embla__slide {
			position: relative;
			flex: 0 0 0%;
		}
	}
`;

const StyledImage = styled.img`
	height: 40vh;
	max-height: 350px;
`;

const s = { StyledImage, SingleCarouselWrapper, CarouselWrapper };

enum Collection {
	LANDSCAPE = "Landscape",
	MODERN_BLOCKS = "Modern_Blocks",
	COMTEMPORARY_FINE_ART = "Comtemporary_Fine_art",
}

interface PaintingP {
	id: string;
	collection_type: Collection;
	picture: {
		url: string;
	}[];
}

interface DataP {
	paintings: PaintingP[];
	loading: boolean;
	error?: ApolloError;
}

export default function Carousel() {
	const COLLECTION_PAINTINGS_QUERY = gql`
		query COLLECTION_PAINTINGS_FILTER {
			paintings(
				where: { collection_type: "Landscapes" }
				sort: "createdAt:desc"
			) {
				id
				collection_type
				picture {
					url
				}
			}
		}
	`;

	const [emblaRef] = useEmblaCarousel({
		dragFree: true,
		align: "start",
		containScroll: "trimSnaps",
	});

	const { data, loading, error } = useQuery<DataP>(COLLECTION_PAINTINGS_QUERY);

	if (loading)
		return (
			<div style={{ textAlign: "center", fontSize: "2rem", padding: "8rem" }}>
				Loading...
			</div>
		);

	if (error)
		return (
			<div style={{ textAlign: "center", fontSize: "2rem", padding: "8rem" }}>
				Something went wrong... Try refreshing the page.
			</div>
		);

	const paintingsDivs = data?.paintings.map((painting) => {
		return (
			<div key={painting.id} className="embla__slide">
				<s.StyledImage src={painting.picture[0].url} alt="Indreta's painting" />
			</div>
		);
	});

	return (
		<s.SingleCarouselWrapper>
			<h1>Contemporary Fine Art</h1>
			<s.CarouselWrapper ref={emblaRef}>
				<div>{paintingsDivs}</div>
			</s.CarouselWrapper>
		</s.SingleCarouselWrapper>
	);
}
