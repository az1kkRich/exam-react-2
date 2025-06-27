import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const fetchProducts = async (limit = 1, skip = 10) => {
    try {
        const response = await api.get(`/category/smartphones?limit=${limit}&skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const fetchProductById = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
}

export const fetchCategories = async (category) => {
    try {
        const response = await api.get(`/category/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

export const fetchSearchProducts = async (query) => {
    try {
        const response = await api.get(`/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error searching products:', error);
        throw error;
    }
}