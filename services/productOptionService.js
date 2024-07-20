import http from "./httpService";

export function addProduct(data) {
  return http.post("/product-option/add", data).then(({ data }) => data);
}

export function updateProduct(data, id) {
  return http.patch(`/product/update/${id}`, data).then(({ data }) => data);
}

export function removeProduct(id) {
  return http.delete(`/product/delete/${id}`).then(({ data }) => data);
}

export function getProductList() {
  return http.get("/product").then(({ data }) => data);
}

export function getOneProduct(id) {
  return http.get(`/product/find/${id}`, data).then(({ data }) => data);
}
