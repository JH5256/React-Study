import { request } from "./api"
import { getReviewlist } from '../modules/ReviewModule';

export function callGetReviewListAPI () {
    return async(dispatch, getState) => {

        const result = await request('GET', '/review');

        console.log(result);

        dispatch(getReviewlist(result));
    }
}