import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const FILE_NAME = "fileToRead.txt";

const read = async () => {
  try {
    const files = await fs.readdir(path.join(DIR_NAME, "files"));
    if (!files.includes(FILE_NAME)) throw new Error("FS operation failed");
    const response = await fs.readFile(
      path.join(DIR_NAME, "files", FILE_NAME),
      {
        encoding: "utf8",
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

await read();
