import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    iconsSpritesheet([
      {
        withTypes: true,
        inputDir: "src/assets/icons",
        outputDir: "public/icons",
        typesOutputFile: "./src/components/icons/icons.ts",
        fileName: "sprites.svg",
      },
    ])
  ],
});
