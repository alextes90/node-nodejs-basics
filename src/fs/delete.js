import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const FILE_NAME = "fileToRemove.txt";

const remove = async () => {
  try {
    const files = await fs.readdir(`${DIR_NAME}/files`);
    if (!files.includes(`${FILE_NAME}`)) throw new Error("FS operation failed");
    await fs.rm(`${DIR_NAME}/files/${FILE_NAME}`);
  } catch (err) {
    console.log(err);
  }
};

await remove();
