import { create } from "zustand";

interface AuthInfo {
    userId: string | null;
    username: string | null;
    email: string | null;
    accessToken: string | null;
    setUser: (info: {
        user_id: string;
        username: string;
        email: string;
    }) => void;

    setAccessToken: (token: string) => void;
    getAccessToken: () => string | null;
    logout: () => void;
}

export const useAuthStore = create<AuthInfo>((set, get) => ({
    userId: null,
    username: null,
    email: null,
    accessToken: null,

    setUser: (info) => {
        set({
            userId: info.user_id,
            username: info.username,
            email: info.email,
        });
    },

    setAccessToken: (token) => {
        set({
            accessToken: token,
        });
    },

    getAccessToken() {
        return get().accessToken;
    },

    logout: () => {
        set({
            userId: null,
            username: null,
            email: null,
        });
    },
}));
