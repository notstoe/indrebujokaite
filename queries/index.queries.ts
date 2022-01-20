import { DocumentNode, gql } from '@apollo/client';

export const HOME_PAGE_DATA_QUERY: DocumentNode = gql`
	query HOME_PAGE_DATA {
		about {
			about_me_txt
			my_vision_txt
			ProfilePic {
				url
			}
			background_intro_picture {
				url
			}
		}
		collectionsPaintings(sort: "createdAt:asc") {
			collectionTitle
			paintings(sort: "createdAt:desc") {
				id
				title
				painting_collection {
					collectionTitle
				}
				picture {
					url
				}
			}
		}
		featuredPainting {
			paintings {
				id
				title
				painting_collection {
					collectionTitle
				}
				picture {
					url
				}
			}
		}
		contact {
			name
			email
			phone
			location_based
			shipping_info
			instagram
			facebook
		}
	}
`;
