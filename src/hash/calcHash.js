import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToSource = path.join(
  __dirname,
  "files",
  "fileToCalculateHashFor.txt"
);
const { createHash } = await import("crypto");

const hash = createHash("sha256");

const calculateHash = async () => {
  const input = createReadStream(pathToSource);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
