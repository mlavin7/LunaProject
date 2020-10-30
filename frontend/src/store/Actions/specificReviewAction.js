import baseUrl from '../../helper/url_helper';

export const specificReviewAction = (props) => async (dispatch, getState) => {
	// const { token } = getState();
	const url = `${baseUrl}/backend/api/reviews/restaurant/${props}`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			// Authorization: `Bearer ${ token }`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default specificReviewAction;
