import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.SPRING_DEFAULT_PATH_LOCAL,
    headers: {
        "Content-Type": "application/json",
    },
});

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
