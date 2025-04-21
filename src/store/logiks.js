import { create } from "zustand";
import axiosInstance from "../../utils/axiosInstance";


export const useLogiks = create((set) => ({
    data:[],
    registration: async (obj, nav) => {
        try {
            const { data } = await axiosInstance.post(`Account/register`, obj);
            window.location.href = "/login"
        } catch (error) {
            console.error("Registration error:", error);
        }
    },

    loginUser: async (obj, nav) => {
        try {
            const { data } = await axiosInstance.post(`Account/login`, obj);
            localStorage.setItem("token", data.data);
            nav("/");
        } catch (error) {
            console.error("Login error:", error);
        }
    },

    getProducts: async () => {
        try {
            const { data } = await axiosInstance.get(`Product/get-products`);
            set({ data: data.data.products });
        } catch (error) {
            console.error(error);
        }
    },
    AddToCard: async (id) => {
        try {
            await axiosInstance.post(`Cart/add-product-to-cart?id=${id}`, {}, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('token')}`,
                }
            })
        } catch (error) {
            console.error(error);
        }
    },

    getProductsCart: async () => {
        try {
            const { data } = await axiosInstance.get("Cart/get-products-from-cart")
            console.log(data.data[0].productsInCart )
            set({ data:data.data[0].productsInCart })
        } catch (error) {
            console.error(error);
        }
    }
}));