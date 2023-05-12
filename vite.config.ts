import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";
const { EsLinter, linterPlugin } = EsLint;
import * as packageJson from "./package.json";
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
    plugins: [
        dts({
            include: ["src/components/"],
        }),
        react(),
        tsConfigPaths(),
        linterPlugin({
            include: ["./src}/**/*.{ts,tsx}"],
            linters: [new EsLinter({ configEnv })],
        }),
    ],
    build: {
        cssCodeSplit: true,
        cssMinify: true,
        lib: {
            entry: resolve("src", "components/index.ts"),
            name: "SmplAdminUI",
            formats: ["es", "umd"],
            fileName: `smpladminui`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
}));
