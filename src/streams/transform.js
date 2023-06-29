import { Transform } from "stream";
import { pipeline } from "stream/promises";
import os from "os";

const reverse = new Transform({
  transform(chunk, _, cb) {
    const string = chunk.toString().trim();
    const reversedString = string.split("").reverse().join("");
    cb(null, reversedString + os.EOL);
  },
});

const cliInput = process.stdin;
const cliOutput = process.stdout;

const transform = async () => {
  await pipeline(cliInput, reverse, cliOutput);
};

await transform().catch(console.error);
