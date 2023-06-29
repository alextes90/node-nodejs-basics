import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const pathToSource = path.join(DIR_NAME, "files");

const list = async () => {
  try {
    console.log(await fs.readdir(pathToSource));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
