import {api} from '../../api/index'
import { FETCH_REVIEWS } from '../type/types';
;

// GET ALL REVIEWS
export const fetchReviews = () => async dispatch => {
  const response = await api.get('/api/v1/reviews');

  dispatch({ type: FETCH_REVIEWS, payload: response.data })
}