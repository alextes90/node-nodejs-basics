import { stdin, stdout } from "process";
import { TransformStream, ReadableStream } from "stream/web";

const transform = async () => {
  console.log("to close type exit");

  stdin.on("data", async (data) => {
    if (data.toString().trim() === "exit") {
      stdout.write("\nThank you for checking! And Good luck\n");
      process.exit();
    } else {
      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(data);
        },
      });
      const transform = new TransformStream({
        transform(chunk, controller) {
          controller.enqueue(chunk.toString().split("").reverse().join(""));
        },
      });
      const transformedStream = stream.pipeThrough(transform);
      for await (const chunk of transformedStream) stdout.write(chunk + "\n");
    }
  });
};

await transform();
