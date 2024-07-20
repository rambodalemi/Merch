import http from "./httpService";

export function handleSuccessPaymentStripe(data) {
  return http.post(`/payment/verify/stripe`, data).then(({ data }) => data);
}

export function handleSuccessPaymentZibal(id) {
  return http.post(`/payment/verify/zibal/${id}`, id).then(({ data }) => data);
}
