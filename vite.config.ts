import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "src/app"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@features": path.resolve(__dirname, "src/features"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@i18n": path.resolve(__dirname, "src/i18n"),
            "@lib": path.resolve(__dirname, "src/lib"),
            "@testing": path.resolve(__dirname, "src/testing"),
            "@customtypes": path.resolve(__dirname, "src/custom-types"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@config": path.resolve(__dirname, "src/config"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@context": path.resolve(__dirname, "src/context"),
        },
    },
});
