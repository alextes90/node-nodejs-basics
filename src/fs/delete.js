import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const FILE_NAME = "fileToRemove.txt";

const remove = async () => {
  try {
    await fs.rm(path.join(DIR_NAME, "files", FILE_NAME));
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
