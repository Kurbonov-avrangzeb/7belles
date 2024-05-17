import {api} from '../api/index';

export const setAuthToken = token => {
  if(token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
}