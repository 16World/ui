import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await copyFile("src/styles.css", "dist/styles.css");
console.log("Copied src/styles.css to dist/styles.css");
