import http from "./httpService";

export function addNewCoupon(data) {
  return http.post(`/coupon/add/`, data).then(({ data }) => data);
}

export function updateCoupon(data, id) {
  return http.patch(`/coupon/${id}`, id).then(({ data }) => data);
}

export function removeCoupon(id) {
  return http.delete(`/coupon/${id}`, id).then(({ data }) => data);
}

export function getCoupons() {
  return http.get("/coupon/").then(({ data }) => data);
}

export function getCoupon(id) {
  return http.post(`/coupon/${id}`,id).then(({ data }) => data);
}
