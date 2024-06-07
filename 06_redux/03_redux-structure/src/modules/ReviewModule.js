import { createActions, handleActions } from "redux-actions";

/* 초기화 */
const initialState = {};

/* 액션 */

const GET_REVIEWLIST = 'review/GET_REVIEWLIST';

export const { review : {getReviewlist}} = createActions({
    [GET_REVIEWLIST] : result => ({reviewlist : result})
});

/* 리듀서 */
const reviewReducer = handleActions({
    [GET_REVIEWLIST] : (state, { payload }) => payload
}, initialState);

export default reviewReducer;