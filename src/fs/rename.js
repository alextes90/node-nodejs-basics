import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const NEW_FILE_NAME = "properFilename.md";
const OLD_FILE_NAME = "wrongFilename.txt";
const pathToOldFile = path.join(DIR_NAME, "files", OLD_FILE_NAME);
const pathToNewFile = path.join(DIR_NAME, "files", NEW_FILE_NAME);

const rename = async () => {
  try {
    const files = await fs.readdir(path.join(DIR_NAME, "files"));
    if (!files.includes(OLD_FILE_NAME)) throw new Error();
    await fs.rename(pathToOldFile, pathToNewFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
