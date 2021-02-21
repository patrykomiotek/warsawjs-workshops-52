import http from './http';

const api = {
  login(email, password) {
    return http.login('/login', { email, password });
  },

  me() {
    return http.get('/me')
  },

  getUsers() {
    return http.get('/users')
  }
}

export default api;
