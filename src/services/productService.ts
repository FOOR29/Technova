import axios from "axios";

const API_URL = "http://localhost:4000/products";

export const getProducts = async () => axios.get(API_URL);
export const getProductById = async (id: number) => axios.get(`${API_URL}/${id}`);
export const postProduct = async (product: any) => axios.post(API_URL, product);
export const updateProduct = async (id: number, product: any) => axios.put(`${API_URL}/${id}`, product);
export const deleteProduct = async (id: number) => axios.delete(`${API_URL}/${id}`);
