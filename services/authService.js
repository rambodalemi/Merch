import http from "./httpService";

export function register(data) {
  return http.post(`/auth/register`, data).then(({ data }) => data);
}

export function verifyEmail(data) {
  return http.post(`/auth/verify`, data).then(({ data }) => data);
}

export function login(data) {
  return http.post(`/auth/login`, data).then(({ data }) => data);
}

export function logout(data) {
  return http.get(`/auth/logout`).then(({ data }) => data);
}

export function forgetPassowrd(data) {
  return http.post(`/auth/forget-password`, data).then(({ data }) => data);
}

export function resetPassowrd(data) {
  return http.post(`/auth/reset-password`, data).then(({ data }) => data);
}

export function sendOtp(data) {
  return http.post(`/auth/send-otp`, data).then(({ data }) => data);
}
