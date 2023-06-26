import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

const FILES_COPY = "files_copy";

const copy = async () => {
  try {
    const rootDir = await fs.readdir(`${DIR_NAME}`);

    if (!rootDir.includes("files") || rootDir.includes(`${FILES_COPY}`))
      throw new Error("FS operation failed");

    await fs.mkdir(path.join(DIR_NAME, FILES_COPY));

    const filesDir = await fs.readdir(path.join(DIR_NAME, "files"));
    filesDir.forEach(async (file) => {
      await fs.cp(
        path.join(DIR_NAME, "files", file),
        path.join(DIR_NAME, FILES_COPY, file),
        {},
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
};

await copy();
