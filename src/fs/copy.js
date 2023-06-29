import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

const FILES_COPY = "files_copy";
const pathToSource = path.join(DIR_NAME, "files");
const pathToDest = path.join(DIR_NAME, FILES_COPY);

const copy = async () => {
  try {
    await fs.cp(pathToSource, pathToDest, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
