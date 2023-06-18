import { createWriteStream } from "fs";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";
import path from "path";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  console.log("to close type exit");

  stdin.on("data", (data) => {
    if (data.toString().trim() === "exit") {
      stdout.write("\nThank you for checking! And Good luck\n");
      process.exit();
    } else {
      createWriteStream(`${DIR_PATH}/files/fileToWrite.txt`, {}).write(data);
    }
  });
};

await write();
