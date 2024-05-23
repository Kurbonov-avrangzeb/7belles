import {api} from '../api/index';

export const setAuthToken = token => {
  if(token) {
    api.defaults.headers.common['x-auth-token'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
}