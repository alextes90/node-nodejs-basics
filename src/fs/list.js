import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const rootDir = await fs.readdir(DIR_NAME);

    if (!rootDir.includes("files")) throw new Error("FS operation failed");

    console.log(await fs.readdir(path.join(DIR_NAME, "files")));
  } catch (err) {
    console.log(err);
  }
};

await list();
