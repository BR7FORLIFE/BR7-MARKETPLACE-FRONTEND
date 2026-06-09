import axios from "axios";
import { useAuthStore } from "../stores/auth-store";

export const api = axios.create({
    baseURL: import.meta.env.VITE_SPRING_DEFAULT_PATH_LOCAL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

//inyectar el accessToken en la cabecera Authorization
api.interceptors.request.use((config) => {
    const token = useAuthStore().getAccessToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

//si en caso tal ha expirado el accessToken hacer el refresh y obtener el nuevo
api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401) {
            const refreshResponse = await refreshToken(); //crear la funcion para hacer el refresh

            const token = refreshResponse.accessToken;

            useAuthStore.setState({
                accessToken: token,
            });

            originalRequest.headers.Authorization = `Bearer ${token}`;

            return api(originalRequest);
        }

        return Promise.reject(error);
    },
);

export const API_ENDPOINTS = {
    AUTH: {
        REGISTER: "/auth/register",
        LOGIN: "auth/login",
        ME: "/auth/me",
        VERIFYEMAIL: "/email/verify",
        ROTATE: "/auth/refresh/rotate",
        LOGOUT: "/auth/logout",
        REFRESH: "/auth/refresh",
    },
};
