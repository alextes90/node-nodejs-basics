import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import path from "path";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));
const pathToSource = path.join(DIR_PATH, "files", "fileToRead.txt");

const read = async () => {
  const readStream = createReadStream(pathToSource);
  readStream.pipe(stdout);

  readStream.on("error", () => {
    throw new Error("Stream is failed");
  });
};

await read();
