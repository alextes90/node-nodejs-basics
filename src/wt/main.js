import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";
import os from "os";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const numberOfCPU = os.cpus().length;
  const result = await Promise.allSettled(
    [...Array(numberOfCPU).keys()].map((el, index) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(`${DIR_PATH}/worker.js`, {
          workerData: 10 + index,
        });
        worker.on("message", resolve);
        worker.on("error", () => reject({ status: "error", data: null }));
        worker.on("exit", (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    })
  );

  console.log(
    result.map((el) => {
      if (el.value) {
        return el.value;
      } else {
        return {
          status: "error",
          data: null,
        };
      }
    })
  );
};

await performCalculations();
