import { createWriteStream } from "fs";
import { stdin } from "process";
import { fileURLToPath } from "url";
import path from "path";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const stream = createWriteStream(
    path.join(DIR_PATH, "files", "fileToWrite.txt")
  );
  stdin.pipe(stream);
};

await write();
