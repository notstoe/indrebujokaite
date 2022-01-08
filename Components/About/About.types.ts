import { ApolloError } from '@apollo/client';

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
