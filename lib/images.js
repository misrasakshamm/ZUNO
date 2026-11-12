import fs from "fs";
import path from "path";

// Server-side helper: returns "/folder/slug.ext" if that image exists in /public, else null.
// Drop real images into public/hero, public/posters, public/episodes or public/banner
// and they are picked up automatically (no code changes needed).
const exts = ["jpg", "jpeg", "png", "webp", "avif"];

export function findImage(folder, name) {
  for (const ext of exts) {
    const file = path.join(process.cwd(), "public", folder, `${name}.${ext}`);
    if (fs.existsSync(file)) return `/${folder}/${name}.${ext}`;
  }
  return null;
}
