import { z } from "zod";

//request
export const registerSchema = z.object({
    username: z.string().min(4),
    password: z.string(),
    email: z.email(),
});

export const loginSchema = z.object({
    password: z.string().min(4),
    email: z.email(),
});

export const meSchema = z.object({
    userId: z.uuid(),
    username: z.string().min(4),
    authorities: z.array(z.string()),
});

//responses
export const registerResponseSchema = z.object({
    userId: z.uuid(),
    username: z.string().min(4),
});

export const loginResponseSchema = z.object({
    access_token: z.jwt(),
});

//request
export type Register = z.infer<typeof registerSchema>;
export type Login = z.infer<typeof loginSchema>;
export type Me = z.infer<typeof meSchema>;

//response
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
