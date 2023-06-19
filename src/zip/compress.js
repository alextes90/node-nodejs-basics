import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(
    path.join(DIR_PATH, "files", "fileToCompress.txt")
  );
  const destination = createWriteStream(
    path.join(DIR_PATH, "files", "archive.gz")
  );
  await pipeline(source, gzip, destination);
};

await compress();
