import axios from 'axios';
const execute  = (method, url, payload, options) => {
    if (method === 'get') {
      return axios[method](url, { params: payload, ...options });
    } else if (method === 'delete') {
      return axios[method](url, { data: payload, ...options });
    } else if (method === 'put') {
      return axios[method](url, { params: payload.params, data: payload.data, ...options });
    } else {
      return axios[method](url, payload, options);
    }
  }
  
const request = async (method, url, data, options = {}) => {
    const response = await execute(method, url, data, options);
    return { ...response };
  }
 
export default {
    get (url, data) {
      return request('get', url, data);
    },
    post (url, data, options) {
      return request('post', url, data, options);
    },
    patch (url, data, options) {
      return request('patch', url, data, options);
    },
    put (url, data, options) {
      return request('put', url, data, options);
    },
    delete (url, data, options) {
      return request('delete', url, data, options);
    },
  };