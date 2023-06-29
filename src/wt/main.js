import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import path from "path";
import { availableParallelism } from "os";

const DIR_PATH = path.dirname(fileURLToPath(import.meta.url));
const pathToWorker = path.join(DIR_PATH, "worker.js");
const STARTING_NUMBER = 10;

const performCalculations = async () => {
  const numberOfCPU = availableParallelism();
  const result = await Promise.allSettled(
    [...Array(numberOfCPU).keys()].map((el, index) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker, {
          workerData: STARTING_NUMBER + index,
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

  const finalResult = result.map((el) => {
    if (el.value) {
      return el.value;
    } else {
      return {
        status: "error",
        data: null,
      };
    }
  });
  console.log(finalResult);
};

await performCalculations().catch(console.error);
