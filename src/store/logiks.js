import { create } from "zustand";
import axios from "axios";

const baseUrl = "https://store-api.softclub.tj/";

export const useLogiks = create((set) => ({

    registration: async (obj, nav) => {
        try {
            const { data } = await axios.post(`${baseUrl}Account/register`, obj);
            nav("/login");
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        }
    },

    loginUser: async (obj, nav) => {
        try {
            const { data } = await axios.post(`${baseUrl}Account/login`, obj);
            localStorage.setItem("token", data.data);
            console.log(data.data);
            
            nav("/");
        } catch (error) {
            console.error("Login error:", error);
        }
    },

    getProducts: async () => {
        try {
            const { data } = await axios.get(`${baseUrl}Product/get-products`);
            set({ data: data.data.products });
        } catch (error) {
            console.error(error);
        }
    },
    AddToCard: async (id) => {
        try {
            await axios.post(`${baseUrl}Cart/add-product-to-cart?id=${id}`, {}, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('token')}`,
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
}));