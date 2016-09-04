//using redux to make API request.

//If you use Axios (AJAX request) make sure to get redux-promise middleware (converts promise response to normal object response)
// npm install --save axios
//npm install --save redux-promise

//Or use THUNK and FETCH


//FLICKR API DOCS: https://www.flickr.com/services/api/

//FLICKR API KEY
const API_KEY ='cf49ac47e2690f991171125124ee57e1'
const ROOT_URL = '';

//not sure if you need this
// secret: 2fb4f5e5150452d0

const FETCH_IMAGE = 'FETCH_IMAGE';

function fetchImage(image) {
	return {
		type: FETCH_IMAGE,
		payload: request

	};
}


exports.FETCH_IMAGE = FETCH_IMAGE;
exports.fetchImage = fetchImage;

