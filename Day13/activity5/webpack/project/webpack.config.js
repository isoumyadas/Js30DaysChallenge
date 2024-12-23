import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js", // Entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  mode: "development", // Mode: development or production
  devtool: "source-map", // Source map for debugging
};
