import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));
const pathToSource = path.join(DIR_PATH, "files", "archive.gz");
const pathToDestination = path.join(DIR_PATH, "files", "fileToCompress.txt");

const decompress = async () => {
  const gzip = createGunzip();
  const source = createReadStream(pathToSource);
  const destination = createWriteStream(pathToDestination);
  await pipeline(source, gzip, destination);
};

await decompress().catch(console.error);
