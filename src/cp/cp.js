import { spawn } from "child_process";
import * as path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  try {
    const cp = spawn("node", [`${DIR_NAME}/files/script.js`, ...args]);
    process.stdin.pipe(cp.stdin);
    cp.stdout.pipe(process.stdout);
  } catch {
    throw new Error("Child process failed");
  }
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
