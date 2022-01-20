import { gql } from '@apollo/client';

export const SINGLE_PAINTINGS_QUERY = gql`
	query SINGLE_PAINTING_QUERY($paintingId: String) {
		paintings(where: { id: $paintingId }) {
			title
			painting_collection {
				collectionTitle
			}
			description
			price
			picture {
				url
			}
			available
		}
		contact {
			email
			phone
			instagram
			facebook
			location_based
			shipping_info
		}
	}
`;

export const ALL_PAINTINGS_IDS_QUERY = gql`
	query ALL_PAINTINGS_IDS {
		paintings {
			id
		}
	}
`;
