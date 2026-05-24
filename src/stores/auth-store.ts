import { create } from "zustand";

interface AuthInfo {
    userId: string | null;
    username: string | null;
    email: string | null;
    setUser: (info: {
        user_id: string;
        username: string;
        email: string;
    }) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthInfo>((set) => ({
    userId: null,
    username: null,
    email: null,
    setUser: (info) => {
        set({
            userId: info.user_id,
            username: info.username,
            email: info.email,
        });
    },
    logout: () => {
        set({
            userId: null,
            username: null,
            email: null,
        });
    },
}));
