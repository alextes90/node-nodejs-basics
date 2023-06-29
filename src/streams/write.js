import { createWriteStream } from "fs";
import { stdin } from "process";
import { fileURLToPath } from "url";
import path from "path";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));
const pathToSource = path.join(DIR_PATH, "files", "fileToWrite.txt");

const write = async () => {
  const stream = createWriteStream(pathToSource);
  stdin.pipe(stream);
};

await write();
