import {
    registerResponseSchema,
    loginResponseSchema,
    meSchema,
    type Me,
    type Login,
    type Register,
    type RegisterResponse,
} from "./schemas/auth/auth-schema";
import { api, API_ENDPOINTS } from "./api-endpoints";

export const registerFetch = async (params: Register) => {
    try {
        const { data } = await api.post<RegisterResponse>(
            API_ENDPOINTS.AUTH.REGISTER,
            params,
        );
        return registerResponseSchema.parse(data);
    } catch (error) {
        throw new Error("Error to apply the register!");
    }
};

export const loginFetch = async (params: Login) => {
    try {
        const { data } = await api.post(API_ENDPOINTS.AUTH.LOGIN, params);
        return loginResponseSchema.parse(data);
    } catch (error) {
        throw new Error("Error to apply the login!");
    }
};

export const meFetch = async () => {
    try {
        const { data } = await api.get<Me>(API_ENDPOINTS.AUTH.ME);
        return meSchema.parse(data);
    } catch (error) {
        throw new Error("Error to get the current user!");
    }
};
