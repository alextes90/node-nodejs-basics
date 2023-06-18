import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import path from "path";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const input = createReadStream(`${DIR_PATH}/files/fileToRead.txt`);
  input.pipe(stdout);
};

await read();
