import { create } from "zustand";
import axiosInstance from "../../utils/axiosInstance";


export const useInfoProducts = create((set) => ({
    data: [],
    getProdByid: async (id) => {
        try {
            const { data } = await axiosInstance(`Product/get-product-by-id?id=${id}`)
            
            set({ data: data.data})
        } catch (error) {
            console.error(error);
        }
    }
}));