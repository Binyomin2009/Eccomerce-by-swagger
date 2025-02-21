import axios from "axios";

const url = "https://store-api.softclub.tj/"


axiosRequest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);