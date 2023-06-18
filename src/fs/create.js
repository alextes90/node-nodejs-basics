import fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));
const FILE_NAME = "fresh.txt";

const create = async () => {
  try {
    const files = await fs.readdir(`${DIR_NAME}/files`);
    if (files.includes(`${FILE_NAME}`)) throw new Error("FS operation failed");

    const content = "I am fresh and young";
    await fs.writeFile(`${DIR_NAME}/files/${FILE_NAME}`, content);
  } catch (err) {
    console.log(err);
  }
};

await create();
