import { createReadStream } from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";

const FILE_PATH = fileURLToPath(import.meta.url);
const { createHash } = await import("crypto");

const hash = createHash("sha256");

const calculateHash = async () => {
  const input = createReadStream(FILE_PATH);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
