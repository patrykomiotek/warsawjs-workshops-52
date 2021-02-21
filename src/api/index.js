import http from './http';

const api = {
  login(email, password) {
    return http.login('/login', { email, password });
  },

  users() {
    return http.get('/users')
  },

  me() {
    return http.get('/me')
  }
}

export default api;
