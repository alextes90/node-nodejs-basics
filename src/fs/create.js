import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const FILE_NAME = "fresh.txt";
const content = "I am fresh and young";
const pathToNewFile = path.join(DIR_NAME, "files", FILE_NAME);

const create = async () => {
  try {
    await fs.writeFile(pathToNewFile, content, { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
