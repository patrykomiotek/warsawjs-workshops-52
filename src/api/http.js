import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  withCredentials: true
});

const request = (method, path, data = null) => {
  const uri = path;
  switch (method.toLowerCase()) {
    case 'post':
      return axiosInstance.post(uri, data);
    case 'login':
    case 'logout':
      return axiosInstance.post(uri, data, { withCredentials: false });
    case 'put':
      return axiosInstance.put(uri, data);
    case 'patch':
      return axiosInstance.patch(uri, data);
    case 'delete':
      return axiosInstance.delete(uri);
    case 'get':
    default:
      return axiosInstance.get(uri)
  }
}

const get = (path) => request('get', path)
const post = (path, data) => request('post', path, data)
const login = (path, data) => request('login', path, data)
const logout = (path, data) => request('logout', path, data)
const put = (path, data) => request('put', path, data)
const patch = (path, data) => request('patch', path, data)
const del = (path) => request('delete', path)

const http = {
  get,
  post,
  login,
  logout,
  put,
  patch,
  delete: del
}

export default http;
