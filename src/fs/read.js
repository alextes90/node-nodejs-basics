import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const FILE_NAME = "fileToRead.txt";
const pathToFileToRead = path.join(DIR_NAME, "files", FILE_NAME);

const read = async () => {
  try {
    const response = await fs.readFile(pathToFileToRead, {
      encoding: "utf8",
    });
    console.log(response);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
