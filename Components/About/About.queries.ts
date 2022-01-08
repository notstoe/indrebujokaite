import { gql } from '@apollo/client';

export const ABOUT_ME_QUERY = gql`
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
