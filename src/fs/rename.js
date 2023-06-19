import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const NEW_FILE_NAME = "properFilename.md";
const OLD_FILE_NAME = "wrongFilename.txt";

const rename = async () => {
  try {
    const files = await fs.readdir(path.join(DIR_NAME, "files"));
    if (files.includes(NEW_FILE_NAME) || !files.includes(OLD_FILE_NAME))
      throw new Error("FS operation failed");
    await fs.rename(
      path.join(DIR_NAME, "files", OLD_FILE_NAME),
      path.join(DIR_NAME, "files", NEW_FILE_NAME)
    );
  } catch (err) {
    console.log(err);
  }
};

await rename();
