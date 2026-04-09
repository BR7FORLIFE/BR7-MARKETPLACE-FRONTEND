import {
    registerResponseSchema,
    loginResponseSchema,
    type Login,
    type Register,
    type RegisterResponse,
} from "./schemas/auth/AuthSchema";
import { api, API_ENDPOINTS } from "./apiEndpoints";

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
