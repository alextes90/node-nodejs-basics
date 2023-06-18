import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { pipeline } from "stream/promises";
import { createUnzip } from "zlib";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const gzip = createUnzip();
  const source = createReadStream(`${DIR_PATH}/files/archive.gz`);
  const destination = createWriteStream(`${DIR_PATH}/files/fileToCompress.txt`);
  await pipeline(source, gzip, destination);
};

await decompress();
